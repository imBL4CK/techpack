RecipeViewerEvents.addInformation("item", e => {
  const information = [
    {
      item: "#malum:spirits",
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
      item: ["malum:strange_crystal", "malum:large_strange_crystal", "techpack:budding_strange_crystal"],
      info: "They are obtained by spreading corruption throughout the world. Once obtained, you can make a budding, which periodically grows crystals.",
    },
    {
      item: ["techpack:wither_drop", "minecraft:nether_star"],
      info: "Its obtained by killing Wither boss.",
    },
    {
      item: "#techpack:native_clusters",
      info: "It has a 20% chance of being obtained when breaking ores with the Spellweaving Pickaxe.",
    },
    {
      item: ["techpack:common_bee_drone", "techpack:common_bee_queen"],
      info: "Can be obtained by breaking Wild Forest Nest using the Catching Net. Drones have a 30% chance of dropping, and Queens have a 10% chance.",
    },
    {
      item: ["techpack:boreal_bee_drone", "techpack:boreal_bee_queen"],
      info: "Can be obtained by breaking Wild Boreal Nest using the Catching Net. Drones have a 30% chance of dropping, and Queens have a 10% chance.",
    },
    {
      item: ["techpack:enigmatic_bee_drone", "techpack:enigmatic_bee_queen"],
      info: "Can be obtained by breaking Wild Chorus Nest using the Catching Net. Drones have a 30% chance of dropping, and Queens have a 10% chance.",
    },
    {
      item: ["techpack:catching_net" ],
      info: "When breaking a wild nest using a catching net, you can drop a bee drone with a 30% chance, or a queen with a 10% chance.",
    },
    {
      item: "minecraft:raw_copper",
      info: "Can be found in the Overworld",
    },
    {
      item: "minecraft:raw_iron",
      info: "Can be found in the Overworld and Moon",
    },
    {
      item: "minecraft:raw_gold",
      info: "Can be found in the Overworld and Nether",
    },
    {
      item: "create:raw_zinc",
      info: "Can be found in the Overworld",
    },
    {
      item: "techpack:raw_silver",
      info: "Can be found in the Overworld and Moon",
    },
    {
      item: "techpack:raw_tin",
      info: "Can be found in the Overworld",
    },
    {
      item: "techpack:raw_nickel",
      info: "Can be found in the Overworld and Moon",
    },
    {
      item: "techpack:raw_lead",
      info: "Can be found in the Overworld and Moon",
    },
    {
      item: "techpack:raw_platinum",
      info: "Can be found in the Moon",
    },
    {
      item: "techpack:raw_aluminum",
      info: "Can be found in the Moon",
    },
    {
      item: "techpack:raw_chrome",
      info: "Can be found in the Moon",
    },
    {
      item: "create:raw_zinc",
      info: "Can be found in the Moon",
    },
    {
      item: "minecraft:ancient_debris",
      info: "Can be found in the Nether",
    },
    {
      item: [
        "techpack:sulfur_crystal",
        "techpack:budding_sulfur",
        "techpack:sulfur_cluster",
        "techpack:sulfur_dust",
      ],
      info: "It can be found by breaking coal ores, transmuting in the crucible with charcoal, or in geodes around the world.",
    },
    {
      item: [
        "techpack:cinnabar_block",
        "techpack:budding_cinnabar",
        "techpack:small_cinnabar_bud",
        "techpack:medium_cinnabar_bud",
        "techpack:large_cinnabar_bud",
        "techpack:cinnabar_cluster",
        "techpack:cinnabar",
      ],
      info: "It can be found by breaking in geodes around the world.",
    },
    {
      item: "techpack:obsidian_glass",
      info: "This glass is meticulously crafted at the perfect fusion point between obsidian and sand, making it as explosion-resistant as obsidian or ancient debris.",
    },
    {
      item: ["techpack:cavernous_bee_drone", "techpack:cavernous_bee_queen"],
      info: "It can be found in loot chests in mineshafts",
    },
    {
      item: "industrialforegoingsouls:soul_laser_base",
      info: "A variation of the laser base that allows the extraction of souls from a warden when positioned correctly.",
    },
    {
      item: "industrialforegoingsouls:soul_network_pipe",
      info: "When connected to a Soul Laser base that has stored Souls, it allows them to be transported to Soul Surges.",
    },
    {
      item: "industrialforegoingsouls:soul_surge",
      info: "It uses souls to speed up recipe processing. It needs to be connected to a soul pipe.",
    },
    {
      item: "#techpack:electrodes",
      info: "Electrodes are essential for induction furnaces to function. Their durability varies depending on the material used in their recipe.",
    },
  ];
  information.forEach((jei) => {
    e.add(jei.item, [jei.info]);
  });
});
