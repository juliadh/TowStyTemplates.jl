# TowStyTemplates.jl

Templates for [TowSty](https://gitlab.huma-num.fr/ceen/towsty/towsty), the webapp and static site generator in Julia.

TowStyTemplates.jl is mainly based on [FranklinTemplates.jl](https://github.com/JuliaDocs/FranklinTemplates.jl).

## Getting started

```julia
pkg> add TowStyTemplates

julia> using TowStyTemplates

julia> templates()
2×3 DataFrame
 Row │ licence  name       navbar
     │ String   String     Bool
─────┼────────────────────────────
   1 │ GPL 3.0  jj           true
   2 │ GPL 3.0  tinlizzie    true

julia> newproject("myProject", template="jj")
```
