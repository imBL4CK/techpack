ServerEvents.recipes((e) => {
  const replaceIronToCasingMaterials = [
    "minecraft:cauldron",
    "minecraft:hopper",
    "minecraft:minecart",
    "minecraft:stonecutter",
    "minecraft:bucket",
    "minecraft:shears",
  ]
  replaceIronToCasingMaterials.forEach((recipe) => {
    e.replaceInput({ id: recipe }, "#c:ingots/iron", "#techpack:casing_materials");
  });
})