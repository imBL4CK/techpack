ServerEvents.recipes((e) => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe;

  recipe("techpack:basic_steam_turbine", 20)
    .requireFluid("10x techpack:steam", 4, 18)
    .produceFluid("5x minecraft:water", 54, 18)
    .requireEnergyPerTick(200, 78, 0)
    .width(96)
    .height(56)
    .progressData(ProgressData.create().x(27).y(20))

  recipe("techpack:advanced_steam_turbine", 20)
    .requireFluid("10x techpack:steam", 4, 18)
    .produceFluid("5x minecraft:water", 54, 18)
    .requireEnergyPerTick(400, 78, 0)
    .width(96)
    .height(56)
    .progressData(ProgressData.create().x(27).y(20))
});