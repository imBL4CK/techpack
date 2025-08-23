MMEvents.createProcesses((e) => {
  let CommumVallues = {
    steam: { oresBlocks: 1000, rawOres: 250, ingots: 500 },
    dusts: [
      "thermal:iron_dust",
      "thermal:gold_dust",
      "thermal:copper_dust",
      "thermal:netherite_dust",
      "thermal:tin_dust",
      "thermal:lead_dust",
      "thermal:silver_dust",
      "thermal:nickel_dust",
      "thermal:steel_dust",
      "thermal:rose_gold_dust",
      "thermal:bronze_dust",
      "thermal:electrum_dust",
      "thermal:invar_dust",
      "thermal:constantan_dust",
      "thermal:signalum_dust",
      "thermal:lumium_dust",
      "thermal:enderium_dust",
      "thermalendergy:prismalium_dust",
      "thermalendergy:melodium_dust",
      "thermalendergy:stellarium_dust",
    ],
    ingots: [
      "minecraft:iron_ingot",
      "minecraft:copper_ingot",
      "minecraft:gold_ingot",
      "minecraft:netherite_ingot",
      "thermal:tin_ingot",
      "thermal:lead_ingot",
      "thermal:silver_ingot",
      "thermal:nickel_ingot",
      "thermal:steel_ingot",
      "thermal:rose_gold_ingot",
      "thermal:bronze_ingot",
      "thermal:electrum_ingot",
      "thermal:invar_ingot",
      "thermal:constantan_ingot",
      "thermal:signalum_ingot",
      "thermal:lumium_ingot",
      "thermal:enderium_ingot",
      "thermalendergy:prismalium_ingot",
      "thermalendergy:melodium_ingot",
      "thermalendergy:stellarium_ingot",
    ],
    id: ["mm:steam_macerator/mass_crafting"],
  };
  const recipes = [
    {
      id: CommumVallues.id + "copper_dust_by_ingot",
      input: { item: "minecraft:copper_ingot", count: 32 },
      output: { item: "thermal:copper_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "iron_dust_by_ingot",
      input: { item: "minecraft:iron_ingot", count: 32 },
      output: { item: "thermal:iron_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "gold_dust_by_ingot",
      input: { item: "minecraft:gold_ingot", count: 32 },
      output: { item: "thermal:gold_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "tin_dust_by_ingot",
      input: { item: "thermal:tin_ingot", count: 32 },
      output: { item: "thermal:tin_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "lead_dust_by_ingot",
      input: { item: "thermal:lead_ingot", count: 32 },
      output: { item: "thermal:lead_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "silver_dust_by_ingot",
      input: { item: "thermal:silver_ingot", count: 32 },
      output: { item: "thermal:silver_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "nickel_dust_by_ingot",
      input: { item: "thermal:nickel_ingot", count: 32 },
      output: { item: "thermal:nickel_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "steel_dust_by_ingot",
      input: { item: "thermal:steel_ingot", count: 32 },
      output: { item: "thermal:steel_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "rose_gold_dust_by_ingot",
      input: { item: "thermal:rose_gold_ingot", count: 32 },
      output: { item: "thermal:rose_gold_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "bronze_dust_by_ingot",
      input: { item: "thermal:bronze_ingot", count: 32 },
      output: { item: "thermal:bronze_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "electrum_dust_by_ingot",
      input: { item: "thermal:electrum_ingot", count: 32 },
      output: { item: "thermal:electrum_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "tin_dust_by_ingot",
      input: { item: "thermal:invar_ingot", count: 32 },
      output: { item: "thermal:invar_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "invar_dust_by_ingot",
      input: { item: "thermal:invar_ingot", count: 32 },
      output: { item: "thermal:invar_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "constantan_dust_by_ingot",
      input: { item: "thermal:constantan_ingot", count: 32 },
      output: { item: "thermal:constantan_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "signalum_dust_by_ingot",
      input: { item: "thermal:signalum_ingot", count: 32 },
      output: { item: "thermal:signalum_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "lumium_dust_by_ingot",
      input: { item: "thermal:lumium_ingot", count: 32 },
      output: { item: "thermal:lumium_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "enderium_dust_by_ingot",
      input: { item: "thermal:enderium_ingot", count: 32 },
      output: { item: "thermal:enderium_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "prismalium_dust_by_ingot",
      input: { item: "thermalendergy:prismalium_ingot", count: 32 },
      output: { item: "thermalendergy:prismalium_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "melodium_dust_by_ingot",
      input: { item: "thermalendergy:melodium_ingot", count: 32 },
      output: { item: "thermalendergy:melodium_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "stellarium_dust_by_ingot",
      input: { item: "thermalendergy:stellarium_ingot", count: 32 },
      output: { item: "thermalendergy:stellarium_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "apatite_dust_by_gem",
      input: { item: "thermal:apatite", count: 32 },
      output: { item: "thermal:apatite_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "cinnabar_dust_by_gem",
      input: { item: "thermal:cinnabar", count: 32 },
      output: { item: "thermal:cinnabar_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "niter_dust_by_gem",
      input: { item: "thermal:niter", count: 32 },
      output: { item: "thermal:niter_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "sulfur_dust_by_gem",
      input: { item: "thermal:sulfur", count: 32 },
      output: { item: "thermal:sulfur_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "lapis_dust_by_gem",
      input: { item: "minecraft:lapis_lazuli", count: 32 },
      output: { item: "thermal:lapis_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "diamond_dust_by_gem",
      input: { item: "minecraft:diamond", count: 32 },
      output: { item: "thermal:diamond_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "emerald_dust_by_gem",
      input: { item: "minecraft:emerald", count: 32 },
      output: { item: "thermal:emerald_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "quartz_dust_by_gem",
      input: { item: "minecraft:quartz", count: 32 },
      output: { item: "thermal:quartz_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "ruby_dust_by_gem",
      input: { item: "thermal:ruby", count: 32 },
      output: { item: "thermal:ruby_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "sapphire_dust_by_gem",
      input: { item: "thermal:sapphire", count: 32 },
      output: { item: "thermal:sapphire_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "certus_quartz_dust_by_gem",
      input: { item: "ae2:certus_quartz_crystal", count: 32 },
      output: { item: "ae2:certus_quartz_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "fluix_dust_by_gem",
      input: { item: "ae2:fluix_crystal", count: 32 },
      output: { item: "ae2:fluix_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "sky_dust_by_block",
      input: { item: "ae2:sky_stone_block", count: 32 },
      output: { item: "ae2:sky_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "arcane_crystal_dust_by_gem",
      input: { item: "forbidden_arcanus:arcane_crystal", count: 32 },
      output: { item: "forbidden_arcanus:arcane_crystal_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "advanced_alloy_dust_by_mixed_metal_ingot",
      input: { item: "kubejs:mixed_metal_ingot", count: 32 },
      output: { item: "kubejs:advanced_alloy_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "amethyst_dust_by_gem",
      input: { item: "minecraft:amethyst_shard", count: 32 },
      output: { item: "kubejs:amethyst_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
    {
      id: CommumVallues.id + "zinc_dust_by_gem",
      input: { item: "create:zinc_ingot", count: 32 },
      output: { item: "kubejs:zinc_dust", count: 32 },
      steam: CommumVallues.steam.ingots,
    },
  ];

  recipes.forEach((recipe) => {
    e.create(recipe.id)
      .structureId("mm:steam_macerator_structure")
      .ticks(600)
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:item",
          item: recipe.input.item,
          count: recipe.input.count,
        },
      })
      .input({
        type: "mm:input/consume",
        ingredient: {
          type: "mm:fluid",
          fluid: "systeams:steam",
          amount: recipe.steam,
        },
      })
      .output({
        type: "mm:output/simple",
        ingredient: {
          type: "mm:item",
          item: recipe.output.item,
          count: recipe.output.count,
        },
      });
  });
});
