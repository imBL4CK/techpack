ServerEvents.recipes((e) => {
  let boiler = e.recipes.custommachinery.custom_machine("techpack:low_pressure_boiler", 20)

  boiler.requireFuel().requireFluid("20x minecraft:water").produceFluid("20x techpack:steam")
});
