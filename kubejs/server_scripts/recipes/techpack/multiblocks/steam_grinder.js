ServerEvents.recipes(e => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe

  let materials = [
    "copper",
    "iron",
    "gold",
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",

    "steel",
    "bronze",
    "electrum",
    "invar",
    "constantan"
  ]
  let natural = [
    "copper",
    "iron",
    "gold",
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum"
  ];
  materials.forEach((recipe) => {
    //Dust by ingot
    e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
    .requireFluid("4000x techpack:steam", 20, 20)
    .requireItem(`32x #c:ingots/${recipe}`, 40, 20)
    .produceItem(`32x techpack:${recipe}_dust`, 90, 20)
    .width(128).height(64).progressX(62).progressY(23)
    
    //Dust by plate
    e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
    .requireFluid("4000x techpack:steam", 20, 20)
    .requireItem(`32x #c:plates/${recipe}`, 40, 20)
    .produceItem(`32x techpack:${recipe}_dust`, 90, 20)
    .width(128).height(64).progressX(62).progressY(23)
  })
  natural.forEach((recipe) => {
    //Dust by ingot
    e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
    .requireFluid("4000x techpack:steam", 20, 20)
    .requireItem(`32x #c:ores/${recipe}`, 40, 20)
    .produceItem(`48x techpack:${recipe}_dust`, 90, 20)
    .width(128).height(64).progressX(62).progressY(23)
  })

  //Sifted sand by sand
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`16x minecraft:sand`, 40, 20)
  .produceItem(`64x techpack:sifted_sand`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Sifted sand by red sand
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`16x minecraft:red_sand`, 40, 20)
  .produceItem(`64x techpack:sifted_sand`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Calcium dust by calcite
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`32x minecraft:calcite`, 40, 20)
  .produceItem(`32x techpack:calcium_dust`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Sulfur dust by cluster
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`16x techpack:sulfur_cluster`, 40, 20)
  .produceItem(`64x techpack:sulfur_dust`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Sulfur dust by crystal
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`16x techpack:sulfur_crystal`, 40, 20)
  .produceItem(`64x techpack:sulfur_dust`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Cinnabar dust by cluster
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`16x techpack:cinnabar_cluster`, 40, 20)
  .produceItem(`64x techpack:cinnabar`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Cinnabar dust by crystal
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`16x techpack:cinnabar_block`, 40, 20)
  .produceItem(`64x techpack:cinnabar`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Fireclay balls
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`32x techpack:fireclay`, 40, 20)
  .produceItem(`32x techpack:fireclay_ball`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Mica by andesite
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`32x minecraft:andesite`, 40, 20)
  .produceItem(`8x techpack:mica`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Mica by diorite
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`32x minecraft:diorite`, 40, 20)
  .produceItem(`8x techpack:mica`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Mica by granite
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`32x minecraft:granite`, 40, 20)
  .produceItem(`8x techpack:mica`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)

  //Mica by slag
  e.recipes.modular_machinery_reborn.machine_recipe("techpack:steam_grinder", 300)
  .requireFluid("4000x techpack:steam", 20, 20)
  .requireItem(`32x techpack:slag`, 40, 20)
  .produceItem(`8x techpack:mica`, 90, 20)
  .width(128).height(64).progressX(62).progressY(23)
})
    
