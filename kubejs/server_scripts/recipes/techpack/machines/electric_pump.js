ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("techpack:electric_pump", 20)
    .produceFluidPerTick("500x minecraft:water")
    .requireBlock("minecraft:water", true, 0, -1, 0, 0, -1, 0)
    .requireEnergyPerTick(10)
});
