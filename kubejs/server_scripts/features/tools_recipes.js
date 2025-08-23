ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shapeless/tools/"];

  let Materials = [
    "iron",
    "gold",
    "copper",
  ]
  Materials.forEach((Material) => {
    //Plates by Hammer
    {
      e.shapeless(`#forge:plates/${Material}`, [`2x #forge:ingots/${Material}`, "#forge:tools/hammer"])
      .damageIngredient("#forge:tools/hammer", 2).id(`${recipeId}plates/${Material}`);
    }
    //Wires by Wirecutter
    {
    e.shapeless(`#forge:wires/${Material}`, [`#forge:plates/${Material}`, "#forge:tools/wirecutter"])
    .damageIngredient("#forge:tools/wirecutter", 1).id(`${recipeId}wires/${Material}`);
    }
  });
});
