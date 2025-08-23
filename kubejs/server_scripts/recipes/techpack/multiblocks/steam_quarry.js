ServerEvents.recipes(e => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe

  //Bronze ingot
  recipe("techpack:steam_quarry", 1200).requireFluid("4000x techpack:steam", 30, 21).lootTable("techpack:chests/quarry/steam_quarry", 80, 21).requireHeight("[-63, 32)")
  .width(128).height(64).progressX(52).progressY(23)

})