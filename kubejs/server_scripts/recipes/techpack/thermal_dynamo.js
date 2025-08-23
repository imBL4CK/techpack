ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("techpack:thermal_dynamo", 20)
    .requireFluidPerTick("4x #c:lava")
    .produceEnergyPerTick(100)
    .hide();
});
