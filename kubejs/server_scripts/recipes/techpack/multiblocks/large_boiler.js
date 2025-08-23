ServerEvents.recipes(e => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe
  let coal = "#techpack:library/coal_fragments"

  //Bronze ingot
  recipe("techpack:large_boiler", 20).requireItem(coal, 20, 20).requireFluid("4000x minecraft:water", 40, 20).produceFluid("2000x techpack:steam", 90, 20)
  .width(128).height(64).progressX(62).progressY(22)

})