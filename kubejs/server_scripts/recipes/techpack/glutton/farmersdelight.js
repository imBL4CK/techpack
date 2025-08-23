ServerEvents.recipes((e) => {
  e.recipes.custommachinery.custom_machine("techpack:glutton", 200)
      .requireItem('farmersdelight:ham')
      .produceItem("2x malum:sacred_spirit")
      .produceItem("1x malum:earthen_spirit")
      .produceItem("1x techpack:lustrous_pearl").chance(0.1);
});
