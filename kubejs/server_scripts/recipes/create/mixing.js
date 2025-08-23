ServerEvents.recipes((e) => {

  let recipeId = "create:mixing/";

  const recipes = [
    //Andesite Alloy from iron
    {
      output: [Item.of("create:andesite_alloy", 4)],
      input: [
        "minecraft:andesite",
        "#forge:nuggets/iron",
        "minecraft:clay_ball",
      ],
      id: "create/andesite_alloy_from_iron",
    },
    //Andesite Alloy from zinc
    {
      output: [Item.of("create:andesite_alloy", 4)],
      input: [
        "minecraft:andesite",
        "#forge:nuggets/zinc",
        "minecraft:clay_ball",
      ],
      id: "create/andesite_alloy_from_zinc",
    },
    //TFMG Slag
    {
      output: [Item.of("#forge:slag", 9)],
      input: [Fluid.of("tmfg:molten_slag", 1000)],
      id: "tfmg/slag_from_molten",
    },
  ];
  const heatedRecipes = [
    //Brass From Dusts
    {
      output: "4x #forge:ingots/bronze",
      input: "4x #forge:dusts/bronze",
      id: "forge/bronze_ingot_from_dusts",
    },
    //Silica Steel Mix
    {
      output: ["4x moreminecarts:silica_steel_mix"],
      input: ["#forge:dusts/iron", "#forge:coal_coke", "3x #forge:gems/quartz"],
      id: "moreminecrafts/silica_mix",
    },
  ];

  recipes.forEach((recipe) => {
    e.recipes.create.mixing(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
  });
  heatedRecipes.forEach((recipe) => {
    e.recipes.create.mixing(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`).heated();
  });
});
