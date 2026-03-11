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
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});