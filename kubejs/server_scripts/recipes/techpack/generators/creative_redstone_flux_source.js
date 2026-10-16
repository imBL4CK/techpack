ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:creative_redstone_flux_source", 20)
    .produceEnergyPerTick(2147483647)
    .resetOnError()
    .hide();
});
