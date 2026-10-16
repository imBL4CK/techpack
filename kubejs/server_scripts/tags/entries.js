const blockTag = [
  //Fireclacy can replace
  {
    tag: "techpack:fireclay_can_replace",
    block: [
      "minecraft:dirt",
      "minecraft:mud",
      "minecraft:sand",
      "minecraft:gravel",
    ],
    action: "add"
  },
  {
    tag: "techpack:moon_terrain_replaceable",
    block: [
      "ad_astra:moon_stone", 
      "ad_astra:moon_deepslate",
      "minecraft:soul_soil",
      "minecraft:deepslate",
      "minecraft:dripstone_block",
    ],
    action: "add"
  },
];
const itemTag = [
  //Flour
  {
    tag: "c:flours/wheat",
    item: ["pneumaticcraft:wheat_flour", "enderio:flour"],
    action: "add"
  },
  //Dough
  {
    tag: "c:foods/dough",
    item: ["create:dough"],
    action: "add"
  },
  //Slag
  {
    tag: "c:slag",
    item: "techpack:slag",
    action: "add"
  },
  //Plastic
  {
    tag: "c:plastics",
    item: ["pneumaticcraft:plastic", "techpack:bio_plastic_sheet", "techpack:ptfe_sheet"],
    action: "add"
  },
  //Coal Coke
  {
    tag: "c:coal_coke",
    item: "techpack:coal_coke",
    action: "add"
  },
  {
    tag: "techpack:coal_cokes",
    item: ["#c:coal_coke", "techpack:hop_graphite_dust"],
    action: "add"
  },
  //Fireclay can replace
  {
    tag: "techpack:fireclay_can_replace",
    item: [
      "minecraft:dirt",
      "minecraft:mud",
      "minecraft:sand",
      "minecraft:gravel",
      "c:stones",
    ],
    action: "add"
  },
  //Rubbers
  {
    tag: "c:rubbers",
    item: "techpack:rubber_sheet",
    action: "add"
  },
  //Electrical Insulators
  {
    tag: "techpack:electrical_insulators",
    item: ["#c:rubbers", "#c:plastics"],
    action: "add"
  },
  //Wrought Iron
  {
    tag: "c:ingots/wrought_iron",
    item: "techpack:wrought_iron_ingot",
    action: "add"
  },
  //Sulfur dust
  {
    tag: "c:dusts/sulfur",
    item: "techpack:sulfur_dust",
    action: "add"
  },
  //Stick storage block
  {
    tag: "c:storage_blocks/sticks",
    item: "techpack:stick_bundle",
    action: "add"
  },
  //Pulpifiable
  {
    tag: "create:pulpifiable",
    item: "techpack:sawdust",
    action: "add"
  },
  //Fireclay can replace
  {
    tag: "techpack:casing_materials",
    item: ["#c:ingots/iron", "#c:ingots/tin", "#c:ingots/zinc"],
    action: "add"
  },
  //Quicksilver
  {
    tag: "c:quicksilver",
    item: ["techpack:quicksilver_drop"],
    action: "add"
  },
  //Quicksilver
  {
    tag: "techpack:integral_augments",
    item: ["techpack:advanced_integral_augment", "techpack:sophisticated_integral_augment"],
    action: "add"
  },
  //Graphite Ingot
  {
    tag: "c:ingots/graphite",
    item: ["techpack:graphite_ingot"],
    action: "add"
  },
];
const fluidTag = [
  {
    tag: "techpack:coolants",
    fluid: ["techpack:ice_coolant", "techpack:hydrogen_fluoride"],
    action: "add"
  },]
ServerEvents.tags("block", (e) => {
  blockTag.forEach((entry) => {
    if (entry.action == "add") {
      e.add(entry.tag, entry.block);
    } else if (entry.action == "remove") {
      e.remove(entry.tag, entry.block);
    }
  });
});
ServerEvents.tags("item", (e) => {
  itemTag.forEach((entry) => {
    if (entry.action == "add") {
      e.add(entry.tag, entry.item);
    } else if (entry.action == "remove") {
      e.remove(entry.tag, entry.item);
    }
  });
});
ServerEvents.tags("fluid", (e) => {
  fluidTag.forEach((entry) => {
    if (entry.action == "add") {
      e.add(entry.tag, entry.fluid);
    } else if (entry.action == "remove") {
      e.remove(entry.tag, entry.fluid);
    }
  });
});
