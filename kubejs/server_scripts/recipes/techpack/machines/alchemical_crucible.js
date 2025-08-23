ServerEvents.recipes((e) => {
  //Brass
  {
    e.recipes.custommachinery.custom_machine("techpack:basic_alchemical_crucible", 300)
      .requireFluid("500x minecraft:water")
      .requireBlock("#farmersdelight:heat_sources", true, 0, -1, 0, 0, -1, 0)
      .requireItem("#c:ingots/copper")
      .requireItem("#c:ingots/zinc")
      .requireItem("malum:alchemical_calx")
      .requireItem("malum:hex_ash")
      .requireItem("malum:earthen_spirit")
      .requireItem("malum:arcane_spirit")
      .produceItem("4x create:brass_ingot")
  }
});