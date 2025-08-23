ServerEvents.recipes((e) => {
  let machine = (e.recipes.custommachinery.custom_machine);
  
  machine("custommachinery:industrialrevival/steam_turbine", 20)
    .produceEnergyPerTick(120)
    .requireFluid(Fluid.of("systeams:steam", 100))
    .produceFluid(Fluid.of("minecraft:water", 10));
});
