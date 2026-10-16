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
      item: ["techpack:common_bee_drone", "techpack:common_bee_queen"],
      info: "Can be obtained by right-clicking in Bee Nests using the Capture Net.\n\nDrones have a 30% chance of dropping, and Queens have a 10% chance.",
    },
    {
      item: ["techpack:enigmatic_bee_drone", "techpack:enigmatic_bee_queen"],
      info: "It can be found in loot chests in end cities.",
    },
    {
      item: ["techpack:fossil_bee_drone", "techpack:fossil_bee_queen"],
      info: "It can be found in loot chests in nether fortresses and bastions.",
    },
    {
      item: ["techpack:cavernous_bee_drone", "techpack:cavernous_bee_queen"],
      info: "It can be found in loot chests in mineshafts and simple dungeons.",
    },
    {
      item: ["techpack:wizard_bee_drone", "techpack:wizard_bee_queen"],
      info: "It can be found in loot chests in stronghold libraries.",
    },
    {
      item: [
        "techpack:sulfur_block",
        "techpack:budding_sulfur",
        "techpack:sulfur_cluster",
        "techpack:sulfur_dust",
      ],
      info: "It can be found in geodes around the world or transmuting in the crucible by charcoal.",
    },
    {
      item: [
        "techpack:cinnabar_block",
        "techpack:budding_cinnabar",
        "techpack:small_cinnabar_bud",
        "techpack:medium_cinnabar_bud",
        "techpack:large_cinnabar_bud",
        "techpack:cinnabar_cluster",
        "techpack:cinnabar_shard",
      ],
      info: "It can be found by breaking in geodes around the world.",
    },
    {
      item: "techpack:obsidian_glass",
      info: "This glass is meticulously crafted at the perfect fusion point between obsidian and sand, making it as explosion-resistant as obsidian or ancient debris.",
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
      item: ["techpack:silite", "techpack:bauxite"],
      info: "A solid rock, with a hardness similar to deepslate.\n\nCan be found in lunar caves",
    },
    {
      item: "techpack:strange_dirt",
      info: "A soil with a strange color, it seems to resemble sand, small stones can be found in its composition.\n\nCan be found in lunar caves",
    },
    {
      item: "techpack:rare_earths",
      info: "Small patches of strange land that have a higher concentration of ores.",
    },
    {
      item: "precision_fluid_pipette:fluid_pipette",
      info: "It is capable of interacting with fluids inside blocks, either obtaining them or transferring them, the tooltip indicates the fluid inside the item.\n\nRight-Click to use.",
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
      info: "It is a tool with strange properties, it has the ability to revive certain mobs when it interacts with the remains of their bodies.\n\nIt is interacts with a select group of blocks, mostly mob heads",
    },
    {
      item: "techpack:apiary",
      info: "Apiaries are workstations where bees generate combs. Each bee species has its own specific requirements for working, which can be viewed using the JEI/EMI",
    },
    {
      item: "techpack:bee_house",
      info: "Bee House are workstations to breed bees. Each bee species has its own specific requirements for working, which can be viewed using the JEI/EMI",
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
      info: "Collects scraps when placed in orbit.",
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
      item: ["minecraft:wither_skeleton_skull","minecraft:skeleton_skull","minecraft:zombie_head","minecraft:piglin_head", "minecraft:creeper_head", "techpack:warden_totem"],
      info: "It can be obtained by killing the skull-related mob using a Suffering Ending.",
    },
    {
      item: ["techpack:reinforced_concrete"],
      info: "A variation of concrete, with a higher concentration of slags, which makes it more resistant, including against explosions. However, it cannot be dyed.",
    },
    {
      item: "techpack:glitch_knife",
      info: "Something that perhaps doesn't belong to that dimension",
    },
    {
      item: "techpack:animated_parts",
      info: "A set of gears that move rapidly when conducting spiritual energy",
    },
    {
      item: "malum:mimicry_relay",
      info: "It absorbs the properties of a spirit and increases its power momentarily, like a redstone repeater.",
    },
    {
      item: "techpack:animated_mechanical_motor",
      info: "A brilliant contraption capable of conducting spiritual energy and transforming it into kinetic energy.\n\nThe process occurs when mimicry relays enhance the spiritual energy, causing the animated parts to rotate the shaft.",
    },
    {
      item: "techpack:mimicry_dynamo",
      info: "A variation of dynamos that converts spiritual energy into redstone flux.\n\nIts operation is similar to an Animated Mechanical Motor, but with the addition of a redstone transmission coil.",
    },
    {
      item: "ad_astra:fuel_bucket",
      info: "fuel used in rockets for interplanetary travel",
    },
    {
      item: "ad_astra:etrionic_capacitor",
      info: "A capacitor that internally stores Redstone Flux; it can be enabled or disabled by right-clicking.\n\nYou can also change its energy distribution mode by shift-right-clicking.",
    },
    {
      item: "industrialforegoing:sewer",
      info: "Collects sewage from animals located within the work area.",
    },
    {
      item: "industrialforegoing:sewage_composter",
      info: "Transforms 1,000 mB of sewage into fertilizer",
    },
    {
      item: "industrialforegoing:spores_recreator",
      info: "The Spore Recreator duplicates mushrooms at the cost of energy and water.",
    },
    {
      item: "ad_astra:cryo_freezer",
      info: "Uses energy and ice to produce cryo fuel.",
    },
    {
      item: "ad_astra:cryo_fuel_bucket",
      info: "A fuel produced from ice. It can be used in cryo-dynamos, rockets, or for cooling items.\n\nIt is produced in a Cryo Freezer.",
    },
    {
      item: "#techpack:coil_blocks",
      info: "Coil blocks are responsible for generating, storing, and conducting heat that can be utilized by multiblocks. Each coil variant has its own characteristics.",
    },
    {
      item: "biggerreactors:cyanite_ingot",
      info: "Ingot form of nuclear waste produced in nuclear reactors.\nIts can be refined into blutonium ingot in a cyanite reprocessor.",
    },
    {
      item: "biggerreactors:blutonium_ingot",
      info: "A material made in a cyanite reprocessor.\nIts can be used to make ludicrite or a Turbine Terminal.",
    },
    {
      item: "biggerreactors:cyanite_reprocessor",
      info: "A machine that reprocesses cyanite into blutonium using water and power.",
    },
  ];
  information.forEach((jei) => {
    e.add(jei.item, [jei.info]);
  });
});
