ServerEvents.recipes((e) => {
  
    let recipeId = "create:filling/";
  
    const recipes = [
      //Electron_Tube
      {
        output: ["create:electron_tube"],
        input: [Fluid.of("tfmg:molten_slag", 100), "create:polished_rose_quartz"],
        id: "electron_tube",
      },
    ];
    recipes.forEach((recipe) => {
      e.recipes.create.filling(recipe.output, recipe.input).id(`${recipeId}${recipe.id}`);
    });
  });
  