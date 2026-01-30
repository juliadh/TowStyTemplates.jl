module TowStyTemplates

using Random

export newproject

const TOWSTY_PATH = dirname(pathof(TowStyTemplates))
const TEMPLATES_PATH = joinpath(TOWSTY_PATH, "templates")

const TEMPLATES_LIST = (
  "jj",
  "tinlizzie",
  "empty"
)

include("utils.jl")

end # module TowStyTemplates
