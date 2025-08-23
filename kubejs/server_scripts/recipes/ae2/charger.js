ServerEvents.recipes((e) => {
  
  let recipeId = ["ae2:charger/"];

  //Energized Steel Ingot
  e.custom({
    type: "ae2:charger",
    ingredient: {
      item: "thermal:steel_ingot",
    },
    result: {
      item: "kubejs:energized_steel_ingot",
    },
  }).id(`${recipeId}energized_steel_ingot`);
});
