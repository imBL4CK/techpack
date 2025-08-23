ServerEvents.recipes((e) => {

  let recipeId = "thermal:induction_smelter/";

  const recipes = [
    //Dark Steel Ingot
    {
      output: [
        {
          tag: "forge:ingots/dark_steel",
          count: 1,
        },
      ],
      input: [
        {
          value: [
            {
              tag: "forge:ingots/iron",
            },
            {
              tag: "forge:dusts/iron",
            },
          ],
          count: 1,
        },
        {
          value: [
            {
              tag: "forge:obsidian",
            },
          ],
          count: 1,
        },
        {
          tag: "forge:dusts/coal",
          count: 1,
        },
      ],
      energy: 2048,
      id: "enderio/dark_steel_ingot",
    },
    //Shadow Bronze Ingot
    {
      output: [
        {
          tag: "forge:ingots/shadow_bronze",
          count: 3,
        },
      ],
      input: [
        {
          value: [
            {
              tag: "forge:ingots/copper",
            },
            {
              tag: "forge:dusts/copper",
            },
          ],
          count: 1,
        },
        {
          value: [
            {
              item: "kubejs:manganese_ingot",
            },
            {
              item: "kubejs:manganese_dust",
            }
          ],
          count: 1,
        },
        {
          value: [
            {
              tag: "forge:ingots/silver",
            },
            {
              tag: "forge:dusts/silver",
            },
          ],
          count: 1,
        },
      ],
      energy: 2048,
      id: "techlab/shadow_bronze_ingot",
    },
  ];

  recipes.forEach((recipe) => {
    e.custom({
      type: "thermal:smelter",
      ingredients: recipe.input,
      result: recipe.output,
      energy: recipe.energy,
    }).id(`${recipeId}${recipe.id}`);
  });
});
