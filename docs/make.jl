using Documenter, TowStyTemplates

makedocs(;
    format = Documenter.HTML(;
        prettyurls = get(ENV, "CI", nothing) == "true"
    ),
    authors = "J. Morvan <morvan.josselin@gmail.com>",
    pages = [
        "TowStyTemplates.jl" => "index.md",
    ],
    sitename = "TowStyTemplates.jl"
)


deploydocs(
    repo = "https://github.com/juliadh/TowStyTemplates.jl.git",
)
