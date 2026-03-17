import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const BasicRecipes = [
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["3x #c:ingots/copper", "#c:ingots/tin"],
            "produceItem": ["4x techpack:bronze_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/iron", "techpack:sifted_sand"],
            "produceItem": ["2x techpack:wrought_iron_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/copper", "#c:ingots/zinc"],
            "produceItem": ["2x create:brass_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:ingots/gold", "#c:ingots/silver"],
            "produceItem": ["2x techpack:electrum_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["3x #c:ingots/iron", "#c:ingots/nickel"],
            "produceItem": ["4x techpack:invar_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["minecraft:redstone", "#c:silicon"],
            "produceItem": ["enderio:redstone_alloy_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/copper", "#c:silicon"],
            "produceItem": ["enderio:copper_alloy_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 600,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:ingots/copper", "#c:ingots/nickel"],
            "produceItem": ["2x techpack:constantan_ingot"]
        },
        {
            "machineType": "techpack:basic_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 400,
            "requireEnergy": { perTick: 40 },
            "requireItem": ["#c:dusts/quartz", "techpack:sifted_sand"],
            "produceItem": ["2x ae2:silicon"]
        },
    ]
    const AdvancedRecipes = [
        {
            "machineType": "techpack:advanced_alloy_foundry",
            "recipeTier": "advanced",
            "jeiDisplayPriority": 1,
            "processingTime": 1200,
            "requireEnergy": { perTick: 60 },
            "requireItem": ["#c:dusts/obsidian", "techpack:sifted_sand"],
            "produceItem": ["techpack:obsidian_glass"]
        },
        {
            "machineType": "techpack:advanced_alloy_foundry",
            "recipeTier": "advanced",
            "jeiDisplayPriority": 1,
            "processingTime": 1200,
            "requireEnergy": { perTick: 100 },
            "requireItem": ["8x techpack:hop_graphite_dust", "minecraft:blaze_rod"],
            "produceItem": ["techpack:incandescent_graphite_electrode"]
        },
        {
            "machineType": "techpack:advanced_alloy_foundry",
            "recipeTier": "advanced",
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:carbon_fiber", "techpack:aluminum_plate"],
            "produceItem": ["2x techpack:thermal_insulating_fabric"]
        },
    ]
  BasicRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
  AdvancedRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
  //SophisticatedRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});

  //Upper tier inherit recipes from lower tier
  const AdvancedToSophisticated = AdvancedRecipes.map((rec) => {
    const clone = JSON.parse(JSON.stringify(rec));
    clone.machineType = "techpack:sophisticated_alloy_foundry";
    return clone;
  });
  AdvancedToSophisticated.forEach((recipe) => { techpackMachineAPI(e,recipe)});
});