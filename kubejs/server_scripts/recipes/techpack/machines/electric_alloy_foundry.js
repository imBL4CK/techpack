    import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 50 },
            "requireItem": ["4x #c:ingots/gold", "4x minecraft:netherite_scrap"],
            "produceItem": ["minecraft:netherite_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["3x #c:ingots/copper", "#c:ingots/tin"],
            "produceItem": ["4x techpack:bronze_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/iron", "#c:sands"],
            "produceItem": ["2x techpack:wrought_iron_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/copper", "#c:ingots/zinc"],
            "produceItem": ["2x create:brass_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:ingots/gold", "#c:ingots/silver"],
            "produceItem": ["2x techpack:electrum_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["3x #c:ingots/iron", "#c:ingots/nickel"],
            "produceItem": ["4x techpack:invar_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["minecraft:redstone", "#c:silicon"],
            "produceItem": ["enderio:redstone_alloy_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 400,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/copper", "#c:silicon"],
            "produceItem": ["enderio:copper_alloy_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 600,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:ingots/copper", "#c:ingots/nickel"],
            "produceItem": ["2x techpack:constantan_ingot"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 400,
            "requireEnergy": { perTick: 40 },
            "requireItem": ["#c:dusts/quartz", "#c:sands"],
            "produceItem": ["2x ae2:silicon"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["industrialforegoing:dryrubber", "#c:dusts/sulfur"],
            "produceItem": ["techpack:rubber"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["minecraft:cactus", "#c:dusts/sulfur"],
            "produceItem": ["techpack:rubber"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["nomansland:resin", "#c:dusts/sulfur"],
            "produceItem": ["techpack:rubber"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:slimeballs", "#c:dusts/sulfur"],
            "produceItem": ["techpack:rubber"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 5,
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:nuggets/iron", "minecraft:andesite"],
            "produceItem": ["2x create:andesite_alloy"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "basic",
            "jeiDisplayPriority": 5,
            "processingTime": 200,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:nuggets/zinc", "minecraft:andesite"],
            "produceItem": ["2x create:andesite_alloy"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "advanced",
            "jeiDisplayPriority": 1,
            "processingTime": 1200,
            "requireEnergy": { perTick: 60 },
            "requireItem": ["#c:dusts/obsidian", "#c:sands"],
            "produceItem": ["techpack:obsidian_glass"]
        },
        {
            "machineType": "techpack:electric_alloy_foundry",
            "recipeTier": "advanced",
            "processingTime": 600,
            "requireEnergy": { perTick: 100 },
            "requireItem": ["2x minecraft:iron_ingot", "2x minecraft:netherite_scrap"],
            "produceItem": ["2x tempad:time_steel"]
        },
    ]
    recipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
});