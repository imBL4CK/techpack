ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:basic_electric_motor", 20)
    .requireEnergyPerTick(40)
    .produceSU(64, 64)
    .hide();
});
