ServerEvents.recipes((e) => {
  let recipeId = ["tfmg:coke_oven/"];

  //Coal Coke
  e.custom({
    type: "tfmg:coking",
    ingredients: [
      {
        item: "minecraft:coal",
        count: 1,
      },
    ],
    processingTime: 1000,
    results: [
      {
        item: "thermal:coal_coke",
        count: 1,
      },
      {
        fluid: "thermal:creosote",
        amount: 1,
      },
    ],
  }).id(`${recipeId}coal_coke`);

  //Coal Coke Block
  e.custom({
    type: "tfmg:coking",
    ingredients: [
      {
        item: "minecraft:coal_block",
        count: 1,
      },
    ],
    processingTime: 9000,
    results: [
      {
        item: "thermal:coal_coke_block",
        count: 1,
      },
      {
        fluid: "thermal:creosote",
        amount: 1,
      },
    ],
  }).id(`${recipeId}coal_coke_block`);
});
