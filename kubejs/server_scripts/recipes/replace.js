ServerEvents.recipes((e) => {
  const replaceIronToCasingMaterials = [
    "minecraft:cauldron",
    "minecraft:hopper",
    "minecraft:minecart",
    "minecraft:stonecutter",
    "quark:tweaks/crafting/utility/misc/easy_hopper",
    "quark:tweaks/crafting/utility/misc/hopper_minecart",
    "quark:tweaks/crafting/utility/misc/chest_minecart",
    "quark:tweaks/crafting/utility/misc/furnace_minecart",
    "quark:building/crafting/furnaces/blackstone_minecart_tweaked",
    "quark:building/crafting/furnaces/deepslate_minecart_tweaked",
    "quark:tweaks/crafting/utility/misc/tnt_minecart",
    "minecraft:bucket",
    "minecraft:shears",
    "supplementaries:dispenser_minecart_quark"
  ]
  replaceIronToCasingMaterials.forEach((recipe) => {
    e.replaceInput({ id: recipe }, "#c:ingots/iron", "#techpack:casing_materials");
  });
})