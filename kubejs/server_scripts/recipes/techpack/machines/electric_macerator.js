import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:sulfur_block"],
            "produceItem": ["9x techpack:sulfur_dust"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["techpack:sulfur_cluster"],
            "produceItem": ["4x techpack:sulfur_dust"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:cinnabar_block"],
            "produceItem": ["4x techpack:cinnabar_shard"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["techpack:cinnabar_cluster"],
            "produceItem": ["4x techpack:cinnabar_shard"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["techpack:fireclay"],
            "produceItem": ["4x techpack:fireclay_ball"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:coal"],
            "produceItem": ["techpack:coal_dust"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:charcoal"],
            "produceItem": ["techpack:charcoal_dust"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:stone"],
            "produceItem": ["minecraft:cobblestone"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:cobblestone"],
            "produceItem": ["minecraft:gravel"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:gravel"],
            "produceItem": ["minecraft:sand"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:lapis_lazuli"],
            "produceItem": ["techpack:lapis_dust"]
        },
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:ingots/graphite"],
            "produceItem": ["biggerreactors:graphite_dust"]
        },
    //Advanced Recipes
        {
            "machineType": "techpack:electric_macerator",
            "recipeTier": "advanced",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 100 },
            "requireItem": ["techpack:coal_coke"],
            "produceItem": ["techpack:hop_graphite_dust"]
        },
    ]
    recipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
});