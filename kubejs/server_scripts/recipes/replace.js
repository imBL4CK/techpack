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

  e.replaceInput({ id: "travelertoolbelt:belt" }, "minecraft:leather", "techpack:tanned_leather");
  e.replaceInput({ id: "stellaris:misc/green_can" }, "minecraft:iron_nugget", "techpack:tin_plate");
  e.replaceInput({ id: "stellaris:misc/small_green_can" }, "minecraft:iron_nugget", "techpack:tin_plate");
})