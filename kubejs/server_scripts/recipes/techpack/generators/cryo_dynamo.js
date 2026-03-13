ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:cryo_dynamo", 20)
    .requireFluidPerTick("1x techpack:ice_coolant")
    .produceEnergyPerTick(20)
    .resetOnError()
    .jei().priority(1)

  e.recipes.custommachinery.custom_machine("techpack:cryo_dynamo", 20)
    .requirePNCTemperature("[-273,0]")
    .produceEnergyPerTick(10)
    .resetOnError()
});
