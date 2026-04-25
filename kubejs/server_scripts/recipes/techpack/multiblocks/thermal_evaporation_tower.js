ServerEvents.recipes((e) => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe;

  recipe("techpack:thermal_evaporation_tower", 600)
    .requireEnergyPerTick(200, 0, 1)
    .requireFluid("100x minecraft:water", 20, 18)
    .produceFluid("100x techpack:brine", 70, 18)
    .width(96)
    .height(56)
    .progressData(ProgressData.create().x(42).y(19))

  recipe("techpack:thermal_evaporation_tower", 600)
    .requireEnergyPerTick(200, 0, 1)
    .requireFluid("900x techpack:brine", 20, 18)
    .produceFluid("90x techpack:lithium_solution", 70, 18)
    .width(96)
    .height(56)
    .progressData(ProgressData.create().x(42).y(19))
});
