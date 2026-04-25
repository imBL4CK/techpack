ServerEvents.recipes(e => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe
  const entries = [
    {
      id: "copper",
      plate: true,
      gear: true,
    },
    {
      id: "iron",
      plate: true,
      gear: true,
    },
    {
      id: "gold",
      plate: true,
      gear: true,
    },
    {
      id: "diamond",
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "zinc",
      plate: true,
      gear: true,
    },
    {
      id: "tin",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "silver",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "nickel",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "lead",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "platinum",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "aluminum",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "chromium",
      raw: true,
      stoneOre: true,
      deepslateOre: true,
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "uranium",
      raw: true,
      ingot: true,
      nugget: true,
    },
    {
      id: "bronze",
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "steel",
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "electrum",
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "invar",
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "constantan",
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "kanthal",
      ingot: true,
      nugget: true,
      hotIngot: true,
      plate: true,
      gear: true,
    },
    {
      id: "advanced_alloy",
      ingot: true,
      nugget: true,
      plate: true,
      gear: true,
    },
    {
      id: "stainless_steel",
      ingot: true,
      nugget: true,
      hotIngot: true,
      plate: true,
      gear: true,
    },
    {
      id: "lithium",
      raw: true,
      ingot: true,
      nugget: true,
    },
  ];
  entries.forEach(entry => {
    if (entry.raw) {
      recipe("techpack:steam_grinder", 200)
        .requireFluidPerTick("20x techpack:steam", 6, 6)
        .requireItem(`32x #c:raw_materials/${entry.id}`, 24, 6)
        .produceItem(`48x techpack:${entry.id}_dust`, 74, 6)
        .width(96).height(32).progressData(ProgressData.create().x(47).y(7))
    }
    if (entry.stoneOre || entry.deepslateOre) {
      recipe("techpack:steam_grinder", 200)
        .requireFluidPerTick("20x techpack:steam", 6, 6)
        .requireItem(`32x #c:ores/${entry.id}`, 24, 6)
        .produceItem(`48x techpack:${entry.id}_dust`, 74, 6)
        .width(96).height(32).progressData(ProgressData.create().x(47).y(7))
    }
    if (entry.ingot) {
      recipe("techpack:steam_grinder", 200)
        .requireFluidPerTick("20x techpack:steam", 6, 6)
        .requireItem(`32x #c:ingots/${entry.id}`, 24, 6)
        .produceItem(`32x techpack:${entry.id}_dust`, 74, 6)
        .width(96).height(32).progressData(ProgressData.create().x(47).y(7))
    }
    if (entry.plate) {
      recipe("techpack:steam_grinder", 200)
        .requireFluidPerTick("20x techpack:steam", 6, 6)
        .requireItem(`32x #c:plates/${entry.id}`, 24, 6)
        .produceItem(`32x techpack:${entry.id}_dust`, 74, 6)
        .width(96).height(32).progressData(ProgressData.create().x(47).y(7))
    }
    if (entry.nugget) {
      recipe("techpack:steam_grinder", 200)
        .requireFluidPerTick("20x techpack:steam", 6, 6)
        .requireItem(`63x #c:nuggets/${entry.id}`, 24, 6)
        .produceItem(`7x techpack:${entry.id}_dust`, 74, 6)
        .width(96).height(32).progressData(ProgressData.create().x(47).y(7))
    }
    if (entry.gear) {
      recipe("techpack:steam_grinder", 200)
        .requireFluidPerTick("20x techpack:steam", 6, 6)
        .requireItem(`32x #c:gears/${entry.id}`, 24, 6)
        .produceItem(`64x techpack:${entry.id}_dust`, 74, 6)
        .width(96).height(32).progressData(ProgressData.create().x(47).y(7))
    } else {}
  })
})