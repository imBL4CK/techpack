JEIEvents.information((e) => {
  const information = [
    {
      item: "minecraft:bucket",
      info: "You can store items inside this vial by right-clicking.",
    },
    {
      item: "#malum:spirit",
      info: "can be obtained by killing mobs using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:astral_weave",
      info: "can be obtained by killing ghasts or phantons using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:warp_flux",
      info: "can be obtained by killing endermans using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:rotting_essence",
      info: "can be obtained by killing zombies (and husks) using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "malum:grim_talc",
      info: "can be obtained by killing skeletons using the crude scythe or other soul-shattering damage items.",
    },
    {
      item: "minecraft:raw_iron",
      info: ["Temperate: Modest     -     Hot: Modest     -     Cold: Abundant"],
    },
    {
      item: "minecraft:raw_copper",
      info: ["Temperate: Modest     -     Hot: Abundant     -     Cold: Modest"],
    },
    {
      item: "minecraft:raw_gold",
      info: ["Temperate: Scarce     -     Hot: Modest     -     Cold: Scarce"],
    },
    {
      item: "thermal:raw_tin",
      info: ["Temperate: Modest     -     Hot: Modest     -     Cold: Abundant"],
    },
    {
      item: "thermal:raw_lead",
      info: ["Temperate: Scarce     -     Hot: Abundant     -     Cold: Scarce"],
    },
    {
      item: "thermal:raw_silver",
      info: ["Temperate: Scarce     -     Hot: Scarce     -     Cold: Modest"],
    },
    {
      item: "thermal:raw_nickel",
      info: ["Temperate: Modest     -     Hot: Abundant     -     Cold: Modest"],
    },
    {
      item: "create:raw_zinc",
      info: ["Temperate: Modest     -     Hot: Scarce     -     Cold: Abundant"],
    },
    {
      item: "kubejs:runewood_wand",
      info: ["To get Runewood Wand, press Right-Click in an Exposed Runewood Log with Totemic Staff"],
    },
    {
      item: "forbidden_arcanus:spawner_scrap",
      info: "Its obtained by breaking spawners.",
    },
  ];
  information.forEach((jei) => {
    e.addItem(jei.item, [jei.info]);
  });
  
});
