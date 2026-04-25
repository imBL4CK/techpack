ServerEvents.recipes((e) => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe;

  recipe("techpack:large_boiler", 100)
    .requireEnergyPerTick(50, 0, 1)
    .requireFluid("1000x minecraft:water", 20, 18)
    .produceFluid("1000x techpack:steam", 70, 18)
    .width(96)
    .height(56)
    .progressData(ProgressData.create().x(42).y(19))
});
