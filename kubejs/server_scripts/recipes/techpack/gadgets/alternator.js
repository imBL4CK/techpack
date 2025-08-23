ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:basic_alternator", 20)
    .requireScalingSU(64, 8)
    .produceEnergyPerTick(20)
    .hide();
});
