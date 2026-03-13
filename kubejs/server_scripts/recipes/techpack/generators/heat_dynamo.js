ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:heat_dynamo", 20)
    .requireFluidPerTick("1x #c:lava")
    .produceEnergyPerTick(100)
    .resetOnError()
    .jei().priority(1)

  e.recipes.custommachinery.custom_machine("techpack:heat_dynamo", 20)
    .requirePNCTemperature("(500,)")
    .produceEnergyPerTick(10)
    .resetOnError()
});
