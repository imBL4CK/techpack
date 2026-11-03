const entries = [
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
  //Plastic
  {
    tag: "c:plastics",
    item: "pneumaticcraft:plastic",
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
  //Fireclay can replace
  {
    tag: "techpack:casing_materials",
    item: ["#c:ingots/iron", "#c:ingots/tin", "#c:ingots/zinc"],
    action: "add"
  },
];
entries.forEach((value) => {
  if (value.block) {
    ServerEvents.tags("block", (e) => {
        if (value.action == "add") {
          e.add(value.tag, value.block);
        } 
        else if (value.action == "remove") {
          e.remove(value.tag, value.block);
        }
    });
  }

  if (value.item) {
    ServerEvents.tags("item", (e) => {
        if (value.action == "add") {
          e.add(value.tag, value.item);
        } 
        else if (value.action == "remove") {
          e.remove(value.tag, value.item);
        }
    });
  }
})
