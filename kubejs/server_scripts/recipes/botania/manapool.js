ServerEvents.recipes((e) => {

  let recipeId = "botania:manapool/";

  const recipes = [
    {
      input: "kubejs:crude_manasteel",
      output: "#forge:ingots/manasteel",
      mana: 500,
      id: "botania/manasteel_ingot",
    },
  ];
  recipes.forEach((recipe) => {
    e.recipes.botania.mana_infusion(recipe.output, recipe.input, recipe.mana).id(`${recipeId}${recipe.id}`);
  });
});
