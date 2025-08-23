ServerEvents.recipes((e) => {
  const recipes = [
    {
      replace: "pneumaticcraft:transistor",
      into: "techpack:transistor",
    },
    {
      replace: "#c:experience",
      into: "enderio:fluid_xp_juice_still",
    },
  ];
  recipes.forEach((recipe) => {
    e.replaceInput({}, recipe.replace, recipe.into);
    e.replaceOutput({}, recipe.replace, recipe.into);
  });
});
