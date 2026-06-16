module TowStyTemplates

using Random, DataFrames

export newproject, templates, generatehash

const TOWSTY_PATH = dirname(pathof(TowStyTemplates))
const TEMPLATES_PATH = joinpath(TOWSTY_PATH, "templates")

const TEMPLATES_LIST = [
  Dict(
    :name => "jj",
    :navbar => true,
    :licence => "GPL 3.0"
  ),
  Dict(
    :name => "tinlizzie",
    :navbar => true,
    :licence => "GPL 3.0"
  )
]

include("utils.jl")

end # module TowStyTemplates
