RecipeViewerEvents.addInformation("item", (e) => {
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
      item: [
        "malum:strange_crystal",
        "malum:large_strange_crystal",
        "techpack:budding_strange_crystal",
      ],
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
      item: ["techpack:catching_net"],
      info: "When breaking a wild nest using a catching net, you can drop a bee drone with a 30% chance, or a queen with a 10% chance.",
    },
    {
      item: ["minecraft:raw_copper", "create:raw_zinc", "techpack:raw_tin"],
      info: "Can be found in the Overworld",
    },
    {
      item: [
        "minecraft:raw_iron",
        "techpack:raw_silver",
        "techpack:raw_nickel",
        "techpack:raw_lead",
      ],
      info: "Can be found in the Overworld and Moon",
    },
    {
      item: "minecraft:raw_gold",
      info: "Can be found in the Overworld and Nether",
    },
    {
      item: [
        "techpack:raw_platinum",
        "techpack:raw_aluminum",
        "techpack:raw_chromium",
      ],
      info: "Can be found in the Moon",
    },
    {
      item: "minecraft:ancient_debris",
      info: "Can be found in the Nether",
    },
    {
      item: [
        "techpack:sulfur_block",
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
    {
      item: "techpack:silite",
      info: "A solid rock, with a hardness similar to deepslate. Can be found in lunar caves",
    },
    {
      item: "techpack:strange_dirt",
      info: "A soil with a strange color, it seems to resemble sand, small stones can be found in its composition. Can be found in lunar caves",
    },
    {
      item: "techpack:rare_earths",
      info: "Small patches of strange land that have a higher concentration of ores.",
    },
    {
      item: "stellaris:fluid_cell",
      info: "It is capable of interacting with fluids inside blocks, either obtaining them or transferring them, the tooltip indicates the fluid inside the item. Right-Click to use.",
    },
    {
      item: "stellaris:vacuumator",
      info: "Allows for the canning of tin cans. Small cans store up to 10 nutrition points, while large cans store up to 20 points.",
    },
    {
      item: "solarhelmet:solar_helmet_module",
      info: "Craft this with a helmet without a template in smithing table to get a helmet with module.",
    },
    {
      item: "techpack:warden_totem",
      info: "It can be obtained from chests in the Ancient City, or by killing a warden with the suffering ending",
    },
    {
      item: "techpack:flint_and_soul",
      info: "It is a tool with strange properties, it has the ability to revive certain mobs when it interacts with the remains of their bodies. It is interacts with a select group of blocks, mostly mob heads",
    },
    {
      item: "techpack:apiary",
      info: "Apiaries are workstations where bees generate combs. Each bee species has its own specific requirements for working, which can be viewed using the JEI/EMI",
    },
    {
      item: "techpack:bee_house",
      info: "Bee House are workstations to breed bees, but without species mutation. Each bee species has its own specific requirements for working, which can be viewed using the JEI/EMI",
    },
    {
      item: "techpack:mutation_station",
      info: "Mutation Stations are workstations to mutate bees with breeding. Each bee species has its own specific requirements for working, which can be viewed using the JEI/EMI",
    },
    {
      item: "stellaris:antenna",
      info: "Antenna only can be placed below the center of the launch pad",
    },
    {
      item: "techpack:electric_composter",
      info: "Turns organic materials into organic matter and organic oil",
    },
    {
      item: "techpack:electric_pump",
      info: "Pumps water when above a source, consuming 10 RF/t and generating 500 mB/t.",
    },
    {
      item: "techpack:resource_collector",
      info: "Pumps water when above a source, consuming 10 RF/t and generating 500 mB/t.",
    },
    {
      item: "techpack:inorganic_matter_generator",
      info: "Passively duplicates stones when there is adjacent water and lava (like an igneous extruder from the thermal series).",
    },
    {
      item: "industrialforegoing:biofuel_generator",
      info: "It generates energy using biofuel, its generation rate is 160 RF/t. (aka Biofuel Generator)",
    },
    {
      item: "industrialforegoing:bioreactor",
      info: "It is a machine that can process organic materials into biofuel using energy and water. (aka Bioreactor)",
    },
    {
      item: "techpack:suffering_ending",
      info: "A weapon imbued with mysterious Umbral energy, it possesses the uncanny ability to reap the heads of mobs, including the warden.",
    },
    {
      item: [
        "minecraft:wither_skeleton_skull",
        "minecraft:skeleton_skull",
        "minecraft:zombie_head",
        "minecraft:piglin_head",
        "minecraft:creeper_head",
        "techpack:warden_totem"
      ],
      info: "It can be obtained by killing the skull-related mob using a Suffering Ending.",
    },
    {
      item: ["techpack:reinforced_concrete", "techpack:reinforced_concrete_bricks"],
      info: "A variation of concrete, with a higher concentration of slags, which makes it more resistant, including against explosions. However, it cannot be dyed.",
    },
  ];
  information.forEach((jei) => {
    e.add(jei.item, [jei.info]);
  });
});
