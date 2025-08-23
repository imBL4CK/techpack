ServerEvents.recipes((e) => {

  let recipeId = "createaddition:liquidburning/";

  const recipes = [
    {
      input: {
        fluidTag: "forge:benzene",
        amount: 1000,
      },
      burnTime: 32000,
      superHeated: true,
      conditions: [
        {
          fluidTag: "forge:benzene",
          type: "createaddition:has_fluid_tag",
        },
      ],
      id: "forge/benzene"
    },
  ];

  recipes.forEach((recipe) => {
    e.custom({
      type: "createaddition:liquid_burning",
      input: recipe.input,
      burnTime: recipe.burnTime,
      superheated: recipe.superHeated,
      conditions: recipe.conditions,
    }).id(`${recipeId}${recipe.id}`);
  });
});
