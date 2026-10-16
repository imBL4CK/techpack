ServerEvents.recipes((e) => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe;

  //Steam in Overworld
  recipe("techpack:steam_quarry", 2400)
    .dimensions("minecraft:overworld", false)
    .requireFluidPerTick("100x techpack:steam", 30, 21)
    .lootTable("techpack:chests/quarry/overworld", 80, 21)
    .requireHeight("[-60, -44)")
    .width(128)
    .height(64)
    .progressData(ProgressData.create().x(52).y(23))
  //Electric in Overworld
  recipe("techpack:electric_quarry", 1200)
    .dimensions("minecraft:overworld", false)
    .requireEnergyPerTick(250, 30, 10)
    .lootTable("techpack:chests/quarry/overworld", 80, 21)
    .requireHeight("[-60, -44)")
    .width(128)
    .height(64)
    .progressData(ProgressData.create().x(52).y(23))
});
