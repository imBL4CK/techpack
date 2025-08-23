ServerEvents.recipes((e) => {
  
  let recipeId = "thermal:phytogenic_insulator/";
  
  const recipes = [
    //Crimson Fungus
    {
      output: Item.of("minecraft:crimson_fungus", 2),
      input: "minecraft:crimson_fungus",
      water: 1000,
      id: "minecraft/crimson_fungus",
    },
    //Warped Fungus
    {
      output: Item.of("minecraft:warped_fungus", 2),
      input: "minecraft:warped_fungus",
      water: 1000,
      id: "minecraft/warped_fungus",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.thermal.insolator(recipe.output, recipe.input).water(recipe.water).id(`${recipeId}${recipe.id}`);
  });
});
