ServerEvents.tags("item", (e) => {
  const addTag = [
    //Flour
    {
      tag: "c:flours/wheat",
      item: ["pneumaticcraft:wheat_flour", "enderio:flour"],
    },
    //Dough
    {
      tag: "c:foods/dough",
      item: ["create:dough"],
    },
    //Coal Fragments
    {
      tag: "techpack:library/coal_fragments",
      item: ["malum:coal_fragment", "malum:charcoal_fragment"],
    },
    //Slag
    {
      tag: "c:slag",
      item: "techpack:slag",
    },
    //Plastic
    {
      tag: "c:plastics",
      item: "pneumaticcraft:plastic",
    },
    //Coal Coke
    {
      tag: "c:coal_coke",
      item: "techpack:coal_coke",
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
    },
    //Electrical Insulators
    {
      tag: "techpack:electrical_insulators",
      item: ["#c:rubbers", "#c:plastics"],
    },
    //Rubbers
    {
      tag: "c:rubbers",
      item: "techpack:rubber_sheet",
    },
    //Wrough Iron
    {
      tag: "c:ingots/wrough_iron",
      item: "techpack:wrough_iron_ingot",
    },
    //Sulfur dust
    {
      tag: "c:dusts/sulfur",
      item: "techpack:sulfur_dust",
    },
    //Stick storage block
    {
      tag: "c:storage_blocks/sticks",
      item: "techpack:stick_bundle",
    },
    //Techpack can storage items
    {
      tag: "techpack:can_storage_items",
      item: ["minecraft:chest", "minecraft:barrel"],
    },
    //Plastic
    {
      tag: "c:plastics",
      item: "techpack:bio_plastic_mesh",
    },
    //Plastic
    {
      tag: "create:pulpifiable",
      item: "techpack:sawdust",
    },
  ];
  addTag.forEach((add) => {
    e.add(add.tag, add.item);
  });
});
