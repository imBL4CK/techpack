import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireFluid": ["1000x minecraft:water"],
            "requireItem": ["minecraft:leather"],
            "produceItem": ["techpack:washed_leather"]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireFluid": ["1000x minecraft:water"],
            "requireItem": ["techpack:washed_leather"],
            "produceItem": ["techpack:tanned_leather"]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireFluid": ["100x pneumaticcraft:etching_acid"],
            "requireItem": ["techpack:silicon_wafer"],
            "produceItem": ["techpack:polished_wafer"]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireFluid": ["200x #c:experience"],
            "produceFluid": ["200x enderio:fluid_xp_juice_still"]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireFluid": ["200x minecraft:water"],
            "requireItem": ["#c:flours/wheat"],
            "produceItem": ["farmersdelight:wheat_dough"]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 100,  
            "requireEnergy": { perTick: 20 },
            "requireFluid": ["100x minecraft:water"],
            "requireItem": ["create:rose_quartz"],
            "produceItem": ["create:polished_rose_quartz"]
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});