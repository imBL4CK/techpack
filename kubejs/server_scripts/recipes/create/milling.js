ServerEvents.recipes((e) => {
  
  let recipeId = "create:milling/";

  const recipes = [
    //Sand
    {
      output: ["#forge:sand"],
      input: ["#forge:gravel"],
      id: "minecraft/sand",
    },
    //Crushed Raw Lithium by raw
    {
      output: ["create:crushed_raw_lithium"],
      input: ["tfmg:raw_lithium"],
      id: "create/crushed_raw_lithium",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.create.milling(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
  });
});
