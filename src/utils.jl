"""
init(dir; template="jj", changedir=true)

Generate a new folder (an error is thrown if it already exists) that contains
the skeleton of the blog that can be processed by TowSty. The user can
specify a `template` out of the list of available templates.
If `topdir` is specified as `"."` then the current directory is used.

* `template="jj"`:  name of the template to use,
* `changedir=true`: whether to change the current directory to the newly
created folder or not.
* `verbose=true`:   whether to display information or not.

### Example

```julia
init("MyNewWebsite", template="jj")
```
"""
function init(dir::String="project"; template::String="jj", changedir::Bool=true,  verbose::Bool=true)

  template = lowercase(template)
  template ∈ TEMPLATES_LIST || throw( ArgumentError("Template $template doesn't exist.") )

  # create the top-directory
  if dir == "."
    dir    = pwd()
    changedir = true
  else
    dir = mkdir(dir)
  end

  commondir   = joinpath(TEMPLATES_PATH, "common")
  templatedir = joinpath(TEMPLATES_PATH, template)

  mergefolders(commondir,   dir)
  mergefolders(templatedir, dir)

  # create content and temp folders for TowSty
  mkpath(joinpath(dir, "content"))
  mkpath(joinpath(dir, "temp"))

  hash = randstring(['0':'9'; 'a':'f'], 12)

  open(joinpath(dir, "credential.txt", "w")) do f
    write(f, hash)
  end

  # For 'added' packages, Pkg.jl makes some files read-only, so here we
  # restore to 644 to guarantee that they are r/w
  for (root, _, files) ∈ walkdir(dir)
    for file in files
      chmod(joinpath(root, file), 0o644)
    end
  end

  # move to the directory if relevant
  changedir && cd(dir)

  # Update TowSty paths if the module is loaded
  if changedir && isdefined(Main, :TowSty) && isdefined(Main.TowSty, :definepaths!)
    Base.invokelatest(Main.TowSty.definepaths!)
  end

  # display information as adequate
  verbose && begin
    print("✓ project folder generated at \"$(dir)\"")
    println(ifelse(changedir, " (now the current directory)." , "."))
    println("→ Use getworkspace() and toaster() from TowSty to see the website in your browser.")
    println("→ Your hash is: $(hash)")
  end

  return nothing
end

"""
    mergefolders(src, dst)

Internal function to looks at what's inside `src/` and put it in `dst/`. If
there are paths that match, the files are merged. It is assumed that files will
not clash, if they clash files in `dst` are replaced.
"""
function mergefolders(src, dst)
    for (root, _, files) ∈ walkdir(src)
        for file ∈ files
            newpath = replace(root, Regex("^$(escape_string(src))")=>"$dst")
            isdir(newpath) || mkpath(newpath)
            newpathfile = joinpath(newpath, file)
            cp(joinpath(root, file), newpathfile; force=true)
        end
    end
end
