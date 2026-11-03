ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:steam_dynamo", 20)
    .requireFluidPerTick("1x #c:steam")
    .produceEnergyPerTick(50)
    .resetOnError()
});
