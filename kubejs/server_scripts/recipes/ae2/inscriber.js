ServerEvents.recipes((e) => {

  let recipeId = ["ae2:inscriber/"];

  //Vaccum TUbe
  {
    e.custom({
      type: "ae2:inscriber",
      ingredients: {
        bottom: {
          item: "thermal:rf_coil",
        },
        middle: {
          item: "create:electron_tube",
        },
        top: {
          tag: "forge:wires/copper",
        },
      },
      mode: "press",
      result: {
        item: "kubejs:vaccum_tube",
      },
    }).id(`${recipeId}vaccum_tube`);
  }
  //Black Quartzite
  {
    e.custom({
      type: "ae2:inscriber",
      ingredients: {
        bottom: {
          tag: "forge:ingots/energized_steel",
        },
        middle: {
          item: "actuallyadditions:black_quartz",
        },
        top: {
          item: "minecraft:amethyst_shard",
        },
      },
      mode: "press",
      result: {
        item: "kubejs:black_quartzite_ingot",
      },
    }).id(`${recipeId}black_quartzite_ingot`);
  }
});
