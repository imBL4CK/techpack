ItemEvents.tooltip((e) => {
  e.addAdvanced("kubejs:runewood_wand", (stack, isAdvanced, tooltip) => {
    tooltip.add("Hold shift for details")
    if (e.shift) {
      tooltip.add([Text.yellow("  - Durability: "),"150"])
      tooltip.add([Text.yellow("  - Cooldown: "),"60s"])
    }
  })
  e.addAdvanced("kubejs:brass_wand", (stack, isAdvanced, tooltip) => {
    tooltip.add("Hold shift for details")
    if (e.shift) {
      tooltip.add([Text.yellow("  - Durability: "),"300"])
      tooltip.add([Text.yellow("  - Cooldown: "),"45s"])
    }
  })
  e.addAdvanced("kubejs:soul_stained_steel_wand", (stack, isAdvanced, tooltip) => {
    tooltip.add("Hold shift for details")
    if (e.shift) {
      tooltip.add([Text.yellow("  - Durability: "),"700"])
      tooltip.add([Text.yellow("  - Cooldown: "),"30s"])
    }
  })
  e.addAdvanced("kubejs:boots_of_the_traveller" , (stack, isAdvanced, tooltip) => {
    tooltip.add("Hold shift for details")
    if (e.shift) {
      tooltip.add(Text.yellow("  - Gives speed when equipped"))
    }
  })
  e.addAdvanced("mm:large_steam_turbine_controller" , (stack, isAdvanced, tooltip) => {
    tooltip.add("Hold shift for details")
    if (e.shift) {
      tooltip.add(Text.blue("  - Generates 600 FE/t"))
    }
  })
})