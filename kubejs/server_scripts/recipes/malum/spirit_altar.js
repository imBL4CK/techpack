ServerEvents.recipes((e) => {
  let recipeId = "malum:spirit_infusion/";

  const recipes = [
    //Empty Blaze Burner
    {
      extra_items: [
        {
          count: 4,
          tag: "forge:plates/iron",
        },
      ],
      input: {
        count: 1,
        tag: "forge:netherrack",
      },
      output: {
        item: "create:empty_blaze_burner",
      },
      spirits: [
        {
          type: "infernal",
          count: 2,
        },
        {
          type: "arcane",
          count: 4,
        },
      ],
      id: "create/empty_blaze_burner",
    },
    //Runewood Sapling
    {
      extra_items: [
        {
          count: 1,
          item: "malum:runic_sapball",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
      ],
      input: {
        count: 1,
        tag: "minecraft:saplings",
      },
      output: {
        item: "malum:runewood_sapling",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "earthen",
          count: 1,
        },
      ],
      id: "malum/runewood_sapling",
    },
    //Azure Runewood Sapling
    {
      extra_items: [
        {
          count: 1,
          item: "malum:runic_sapball",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
      ],
      input: {
        count: 1,
        tag: "minecraft:saplings",
      },
      output: {
        item: "malum:azure_runewood_sapling",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "aqueous",
          count: 1,
        },
      ],
      id: "malum/azure_runewood_sapling",
    },
    //Mixing Cauldron
    {
      extra_items: [
        {
          count: 2,
          item: "malum:tainted_rock",
        },
        {
          count: 2,
          item: "malum:twisted_rock",
        },
        {
          count: 1,
          item: "malum:chunk_of_brilliance",
        },
        {
          count: 1,
          item: "malum:arcane_charcoal",
        },
      ],
      input: {
        count: 1,
        item: "minecraft:cauldron",
      },
      output: {
        item: "hexerei:mixing_cauldron",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "aerial",
          count: 2,
        },
      ],
      id: "hexerei/mixing_cauldron",
    },
    //Pewter Inlay
    {
      extra_items: [
        {
          count: 4,
          item: "eidolon:pewter_ingot",
        },
      ],
      input: {
        count: 1,
        item: "malum:processed_soulstone",
      },
      output: {
        count: 2,
        item: "eidolon:pewter_inlay",
      },
      spirits: [
        {
          type: "wicked",
          count: 2,
        },
      ],
      id: "eidolon/pewter_inlay",
    },
    //Chromatic Compound
    {
      extra_items: [
        {
          count: 4,
          item: "create:polished_rose_quartz",
        },
        {
          count: 4,
          item: "create:powdered_obsidian",
        },
        {
          count: 4,
          item: "minecraft:glowstone_dust",
        },
        {
          count: 1,
          item: "kubejs:energized_steel_ingot",
        },
      ],
      input: {
        count: 1,
        item: "malum:ether",
      },
      output: {
        count: 4,
        item: "create:chromatic_compound",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "sacred",
          count: 2,
        },
      ],
      id: "create/chromatic_compound",
    },
    //Spirit Jar
    {
      extra_items: [
        {
          count: 1,
          item: "malum:hallowed_gold_ingot",
        },
        {
          count: 1,
          item: "malum:processed_soulstone",
        },
      ],
      input: {
        count: 1,
        item: "supplementaries:jar",
      },
      output: {
        count: 1,
        item: "malum:spirit_jar",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
      ],
      id: "malum/spirit_jar",
    },
    //Clibano Core
    {
      extra_items: [
        {
          count: 8,
          item: "forbidden_arcanus:polished_darkstone",
        },
      ],
      input: {
        count: 1,
        item: "minecraft:blast_furnace",
      },
      output: {
        count: 1,
        item: "forbidden_arcanus:clibano_core",
      },
      spirits: [
        {
          type: "arcane",
          count: 2,
        },
        {
          type: "earthen",
          count: 1,
        },
      ],
      id: "forbidden_arcanus/clibano_core",
    },
    //Thermal Machine Frame
    {
      extra_items: [
        {
          count: 1,
          item: "actuallyadditions:iron_casing",
        },
        {
          count: 1,
          item: "kubejs:basic_machine_casing",
        },
        {
          count: 1,
          item: "industrialforegoing:machine_frame_pity",
        },
        {
          count: 1,
          item: "create:refined_radiance",
        },
      ],
      input: {
        count: 1,
        tag: "thermal:glass/hardened",
      },
      output: {
        count: 1,
        item: "thermal:machine_frame",
      },
      spirits: [
        {
          type: "arcane",
          count: 4,
        },
      ],
      id: "thermal/machine_frame",
    },
    //EnderIO Void Chasis
    {
      extra_items: [
        {
          count: 1,
          item: "create:shadow_steel",
        },
        {
          count: 4,
          item: "enderio:infinity_rod",
        },
        {
          count: 1,
          item: "actuallyadditions:black_quartz",
        },
        {
          count: 1,
          item: "enderio:dark_steel_ingot",
        },
      ],
      input: {
        count: 1,
        item: "enderio:grains_of_infinity",
      },
      output: {
        count: 1,
        item: "enderio:void_chassis",
      },
      spirits: [
        {
          type: "wicked",
          count: 4,
        },
      ],
      id: "enderio/void_chassis",
    },
    //Insighful Crystal
    {
      extra_items: [
        {
          count: 2,
          tag: "forge:gems/lapis",
        },
        {
          count: 2,
          item: "minecraft:experience_bottle",
        },
      ],
      input: {
        count: 1,
        tag: "forge:gems/emerald",
      },
      output: {
        count: 1,
        item: "thermal:xp_crystal",
      },
      spirits: [
        {
          type: "arcane",
          count: 1,
        },
      ],
      id: "thermal/insighful_crystal",
    },
    //Spectral Lens
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "minecraft:amethyst_shard",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
        {
          count: 1,
          item: "eidolon:pewter_inlay",
        },
      ],
      input: {
        count: 1,
        item: "kubejs:quicksilver",
      },
      output: {
        count: 1,
        item: "malum:spectral_lens",
      },
      spirits: [
        {
          type: "arcane",
          count: 1,
        },
      ],
      id: "malum/spectral_lens",
    },
    //Elvin Gateway
    {
      extra_items: [
        {
          count: 2,
          item: "malum:complete_design",
        },
        {
          count: 4,
          item: "botania:terrasteel_ingot",
        },
        {
          count: 2,
          item: "malum:malignant_pewter_plating",
        },
        {
          count: 1,
          item: "botania:natura_pylon",
        },
        {
          count: 2,
          item: "kubejs:ender_essence",
        },
        {
          count: 4,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "forbidden_arcanus:dark_matter",
        },
        {
          count: 1,
          item: "eidolon:holy_symbol",
        },
      ],
      input: {
        count: 8,
        item: "botania:livingwood_log",
      },
      output: {
        count: 1,
        item: "botania:alfheim_portal",
      },
      spirits: [
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "sacred",
          count: 32,
        },
        {
          type: "earthen",
          count: 32,
        },
        {
          type: "aqueous",
          count: 32,
        },
      ],
      id: "botania/alfheim_portal",
    },
    //Crude Manasteel
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "malum:hex_ash",
        },
      ],
      input: {
        count: 1,
        tag: "forge:ingots/steel",
      },
      output: {
        item: "kubejs:crude_manasteel",
      },
      spirits: [
        {
          type: "sacred",
          count: 2,
        },
      ],
      id: "techlab/crude_manasteel",
    },
    //Terrestrial Agglomeration Plate
    {
      extra_items: [
        {
          count: 1,
          item: "forbidden_arcanus:mundabitur_dust",
        },
        {
          count: 1,
          item: "kubejs:ender_dew",
        },
        {
          count: 1,
          item: "malum:complete_design",
        },
        {
          count: 1,
          item: "botania:rune_water",
        },
        {
          count: 1,
          item: "botania:rune_earth",
        },
        {
          count: 1,
          item: "botania:rune_mana",
        },
        {
          count: 1,
          item: "botania:rune_air",
        },
        {
          count: 1,
          item: "botania:rune_fire",
        },
      ],
      input: {
        count: 1,
        item: "botania:manasteel_block",
      },
      output: {
        item: "botania:terra_plate",
      },
      spirits: [
        {
          type: "sacred",
          count: 32,
        },
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "aerial",
          count: 32,
        },
        {
          type: "aqueous",
          count: 32,
        },
        {
          type: "earthen",
          count: 32,
        },
        {
          type: "infernal",
          count: 32,
        },
      ],
      id: "botania/terrestrial_agglomeration_plate",
    },
    //Refined Radiance
    {
      extra_items: [],
      input: {
        count: 1,
        item: "create:chromatic_compound",
      },
      output: {
        item: "create:refined_radiance",
      },
      spirits: [
        {
          type: "sacred",
          count: 4,
        },
      ],
      id: "create/refined_radiance",
    },
    //Shadow Steel
    {
      extra_items: [],
      input: {
        count: 1,
        item: "create:chromatic_compound",
      },
      output: {
        item: "create:shadow_steel",
      },
      spirits: [
        {
          type: "wicked",
          count: 4,
        },
      ],
      id: "create/shadow_steel",
    },
    //Magic Feather
    {
      extra_items: [
        {
          count: 1,
          item: "hexerei:mahogany_broom",
        },
        {
          count: 1,
          item: "malum:complete_design",
        },
        {
          count: 1,
          item: "malum:poppet",
        },
        {
          count: 1,
          item: "eidolon:gravity_belt",
        },
      ],
      input: {
        count: 1,
        item: "eidolon:raven_feather",
      },
      output: {
        item: "magicfeather:magic_feather",
      },
      spirits: [
        {
          type: "sacred",
          count: 64,
        },
        {
          type: "aerial",
          count: 64,
        },
      ],
      id: "magicfeather/magic_feather",
    },
    //Gold Inlay
    {
      extra_items: [
        {
          count: 4,
          item: "eidolon:arcane_gold_ingot",
        },
      ],
      input: {
        count: 1,
        item: "malum:mnemonic_fragment",
      },
      output: {
        count: 2,
        item: "eidolon:gold_inlay",
      },
      spirits: [
        {
          type: "sacred",
          count: 2,
        },
      ],
      id: "eidolon/gold_inlay",
    },
    //Basic Spirit Catalizer
    {
      extra_items: [
        {
          count: 1,
          item: "kubejs:alchemical_brass_gear",
        },
        {
          count: 4,
          item: "kubejs:alchemical_brass_plate",
        },
        {
          count: 1,
          item: "malum:spectral_optic",
        },
        {
          count: 2,
          item: "malum:ether",
        },
        {
          count: 1,
          item: "kubejs:basic_spirit_catalyzer_research_page",
        },
      ],
      input: {
        count: 1,
        item: "minecraft:piston",
      },
      output: {
        count: 1,
        item: "custommachinery:custom_machine_item",
        nbt: {
          machine: "custommachinery:industrialrevival/basic_spirit_catalyzer",
        },
      },
      spirits: [
        {
          type: "arcane",
          count: 16,
        },
        {
          type: "aerial",
          count: 4,
        },
      ],
      id: "techlab_machines/spirit_catalyzer",
    },
    //Magic Mirror
    {
      extra_items: [
        {
          count: 1,
          item: "create:chromatic_compound",
        },
        {
          count: 2,
          tag: "forge:plates/brass",
        },
        {
          count: 3,
          item: "malum:astral_weave",
        },
        {
          count: 2,
          item: "eidolon:gold_inlay",
        },
        {
          count: 1,
          item: "kubejs:magic_mirror_research_page",
        },
      ],
      input: {
        count: 4,
        item: "kubejs:quicksilver",
      },
      output: {
        count: 1,
        item: "kubejs:magic_mirror",
      },
      spirits: [
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "sacred",
          count: 24,
        },
        {
          type: "eldritch",
          count: 24,
        },
      ],
      id: "techlab/magic_mirror",
    },
    //Advanced Spirit Catalizer
    {
      extra_items: [
        {
          count: 1,
          item: "kubejs:basic_circuit",
        },
        {
          count: 1,
          item: "malum:spectral_optic",
        },
        {
          count: 4,
          item: "malum:soul_stained_steel_plating",
        },
        {
          count: 1,
          item: "kubejs:advanced_spirit_catalyzer_research_page",
        },
      ],
      input: {
        count: 1,
        item: "kubejs:basic_machine_casing",
      },
      output: {
        count: 1,
        item: "custommachinery:custom_machine_item",
        nbt: {
          machine:
            "custommachinery:industrialrevival/advanced_machines/advanced_spirit_catalyzer",
        },
      },
      spirits: [
        {
          type: "arcane",
          count: 24,
        },
        {
          type: "sacred",
          count: 12,
        },
        {
          type: "wicked",
          count: 12,
        },
      ],
      id: "techlab_machines/advanced_spirit_catalyzer",
    },
    //Boots of the Traveller
    {
      extra_items: [
        {
          count: 1,
          item: "eidolon:lesser_soul_gem",
        },
        {
          count: 2,
          item: "kubejs:industrial_leather",
        },
        {
          count: 2,
          item: "eidolon:gold_inlay",
        },
        {
          count: 1,
          item: "kubejs:boots_of_the_traveller_research_page",
        },
      ],
      input: {
        count: 1,
        item: "eidolon:warlock_boots",
      },
      output: {
        count: 1,
        item: "kubejs:boots_of_the_traveller",
      },
      spirits: [
        {
          type: "arcane",
          count: 12,
        },
        {
          type: "aerial",
          count: 8,
        },
        {
          type: "earthen",
          count: 8,
        },
      ],
      id: "techlab/boots_of_the_traveller",
    },
    //Ender Chest
    {
      extra_items: [
        {
          count: 1,
          item: "actuallyadditions:ender_casing",
        },
        {
          count: 1,
          item: "kubejs:basic_circuit",
        },
        {
          count: 1,
          item: "enderio:ender_resonator",
        },
        {
          count: 1,
          item: "kubejs:magic_mirror_research_page",
        },
      ],
      input: {
        count: 1,
        item: "ironchest:obsidian_chest",
      },
      output: {
        count: 1,
        item: "enderstorage:ender_chest",
      },
      spirits: [
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "eldritch",
          count: 12,
        },
      ],
      id: "enderstorage/ender_chest",
    },
    //Ender Tank
    {
      extra_items: [
        {
          count: 1,
          item: "actuallyadditions:ender_casing",
        },
        {
          count: 1,
          item: "kubejs:basic_circuit",
        },
        {
          count: 1,
          item: "enderio:ender_resonator",
        },
        {
          count: 1,
          item: "kubejs:magic_mirror_research_page",
        },
      ],
      input: {
        count: 1,
        item: "industrialforegoing:simple_black_hole_tank",
      },
      output: {
        count: 1,
        item: "enderstorage:ender_tank",
      },
      spirits: [
        {
          type: "arcane",
          count: 32,
        },
        {
          type: "eldritch",
          count: 12,
        },
      ],
      id: "enderstorage/ender_tank",
    },
    //Ender Tank
    {
      extra_items: [
        {
          count: 1,
          item: "tfmg:capacitor_",
        },
        {
          count: 1,
          item: "kubejs:quicksilver",
        },
        {
          count: 1,
          tag: "forge:plates/tin",
        },
      ],
      input: {
        count: 1,
        item: "kubejs:basic_circuit",
      },
      output: {
        count: 1,
        item: "scannable:scanner",
      },
      spirits: [
        {
          type: "earthen",
          count: 8,
        },
        {
          type: "aqueous",
          count: 4,
        },
        {
          type: "aerial",
          count: 4,
        },
      ],
      id: "scannable/scanner",
    },
    //Ender Casing
    {
      extra_items: [
        {
          count: 2,
          item: "actuallyadditions:empowered_enori_crystal",
        },
        {
          count: 4,
          tag: "forge:storage_blocks/ender_pearls",
        },
        {
          count: 1,
          item: "eidolon:ender_calx",
        },
      ],
      input: {
        count: 1,
        item: "actuallyadditions:black_quartz_block",
      },
      output: {
        count: 1,
        item: "actuallyadditions:ender_casing",
      },
      spirits: [
        {
          type: "eldritch",
          count: 12,
        },
      ],
      id: "actuallyadditions/ender_casing",
    },
    //Ensouled Chasis
    {
      extra_items: [
        {
          count: 4,
          item: "enderio:soul_chain",
        },
        {
          count: 4,
          tag: "forge:ingots/soularium",
        },
      ],
      input: {
        count: 1,
        tag: "forge:gems/quartz",
      },
      output: {
        count: 1,
        item: "enderio:ensouled_chassis",
      },
      spirits: [
        {
          type: "eldritch",
          count: 2,
        },
      ],
      id: "enderio/ensouled_chassis",
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "malum:spirit_infusion",
      extra_items: recipe.extra_items,
      input: recipe.input,
      output: recipe.output,
      spirits: recipe.spirits,
    }).id(`${recipeId}${recipe.id}`);
  });
});
