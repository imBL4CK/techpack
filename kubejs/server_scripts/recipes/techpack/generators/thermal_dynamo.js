ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("techpack:thermal_dynamo", 20)
    .requireFluidPerTick("1x #c:lava")
    .produceEnergyPerTick(100)
    .resetOnError()
});
