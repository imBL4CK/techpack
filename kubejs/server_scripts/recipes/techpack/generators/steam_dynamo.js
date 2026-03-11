ServerEvents.recipes((e) => {
  e.recipes.custommachinery
    .custom_machine("techpack:steam_dynamo", 20)
    .requireFluidPerTick("1x techpack:steam")
    .requireSU(64)
    .produceEnergyPerTick(50)
    .resetOnError()
});
