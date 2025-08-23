ServerEvents.recipes((e) => {
  let recipeFormat = e.recipes.custommachinery
  //Logs into Planks 
  {
    e.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    recipeFormat.custom_machine("techpack:basic_sawmill", 200)
      .requireEnergy(1000)
      .requireItem(ingredients[0])
      .produceItem(Item.of(output.id, 6))
      .produceItem("farmersdelight:tree_bark").chance(0.5)
      .produceItem("techpack:sawdust").chance(0.5)
      .jei()
      .priority(1);
  })
  }
  //Silicon Wafer
  {
    recipeFormat.custom_machine("techpack:basic_sawmill", 200)
      .requireEnergy(500)
      .requireItem("4x ae2:silicon")
      .produceItem("techpack:silicon_wafer")
      .jei()
      .priority(2);
  }
});