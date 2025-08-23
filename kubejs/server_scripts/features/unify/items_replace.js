ServerEvents.recipes((e) => {
    const recipes = [
      {
        replace: "tfmg:sulfur_dust",
        into: "#forge:gems/sulfur",
      },
      {
        replace: "tfmg:bitumen",
        into: "#forge:bitumen",
      },
    ];
    recipes.forEach((recipe) => {
      e.replaceInput({}, recipe.replace, recipe.into);
      e.replaceOutput({}, recipe.replace, recipe.into);
    });
  });
  