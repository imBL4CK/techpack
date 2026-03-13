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
  //Coal Fragments
  {
    tag: "techpack:library/coal_fragments",
    item: ["malum:coal_fragment", "actuallyadditions:tiny_coal"],
    action: "add"
  },
  //Charcoal Fragments
  {
    tag: "techpack:library/charcoal_fragments",
    item: ["malum:charcoal_fragment", "actuallyadditions:tiny_charcoal"],
    action: "add"
  },
  //Techpack general coal fragments
  {
    tag: "techpack:general_coal_fragments",
    item: ["#techpack:library/charcoal_fragments", "#techpack:library/coal_fragments"],
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
    item: "pneumaticcraft:plastic",
    action: "add"
  },
  //Coal Coke
  {
    tag: "c:coal_coke",
    item: "techpack:coal_coke",
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
  //Electrical Insulators
  {
    tag: "techpack:electrical_insulators",
    item: ["#c:rubbers", "#c:plastics"],
    action: "add"
  },
  //Rubbers
  {
    tag: "c:rubbers",
    item: "techpack:rubber_sheet",
    action: "add"
  },
  //Wrough Iron
  {
    tag: "c:ingots/wrough_iron",
    item: "techpack:wrough_iron_ingot",
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
  //Techpack can storage items
  {
    tag: "techpack:can_storage_items",
    item: ["minecraft:chest", "minecraft:barrel"],
    action: "add"
  },
  //Plastic
  {
    tag: "c:plastics",
    item: "techpack:bio_plastic_mesh",
    action: "add"
  },
  //Plastic
  {
    tag: "create:pulpifiable",
    item: "techpack:sawdust",
    action: "add"
  },
  //Seashells
  {
    tag: "techpack:seashells",
    item: ["nomansland:seashells", "primal:seashells"],
    action: "add"
  },
  //Seashells
  {
    tag: "c:fertilizers",
    item: "techpack:calcium_fertilizer",
    action: "add"
  },
  //Wrought Iron
  {
    tag: "c:ingots/wrought_iron",
    item: "techpack:wrought_iron_ingot",
    action: "add"
  },
  //Wrought Iron
  {
    tag: "c:ingots/stabillis",
    item: "techpack:stabillis_ingot",
    action: "add"
  },
  {
    tag: "c:raw_materials",
    item: "stellaris:raw_steel_ingot",
    action: "remove"
  },
  {
    tag: "c:raw_materials/steel",
    item: "stellaris:raw_steel_ingot",
    action: "remove"
  },
  {
    tag: "techpack:coal_cokes",
    item: ["techpack:coal_coke", "techpack:hop_graphite_dust"],
    action: "add"
  },
  {
    tag: "techpack:casing_materials",
    item: ["#c:ingots/iron", "#c:ingots/tin", "#c:ingots/zinc"],
    action: "add"
  },
];
const fluidTag = [
  {
    tag: "techpack:coolants",
    fluid: ["techpack:ice_coolant"],
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
