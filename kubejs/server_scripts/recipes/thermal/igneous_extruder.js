ServerEvents.recipes((e) => {
  
  let Cstones = [
    "minecraft:andesite",
    "minecraft:diorite",
    "minecraft:granite",
    "minecraft:calcite",
    "minecraft:tuff",
    "create:limestone",
    "create:scorchia",
    "create:scoria",
    "quark:shale",
    "quark:myalite",
    "quark:limestone",
    "quark:jasper",
    "kubejs:panel_block"
  ];

  Cstones.forEach((stones) => {
    e.custom({
      type: "thermal:rock_gen",
      adjacent: "water",
      below: stones,
      result: stones,
    });
  });
});
