import { techpackMachineAPI } from "././recipes/techpack/techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    let acid = "10x techpack:ore_washing_acid"
    const recipes = [
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_copper"],
            "produceItem": ["techpack:purified_copper_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_iron"],
            "produceItem": ["techpack:purified_iron_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_gold"],
            "produceItem": ["techpack:purified_gold_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_zinc"],
            "produceItem": ["techpack:purified_zinc_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_tin"],
            "produceItem": ["techpack:purified_tin_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_silver"],
            "produceItem": ["techpack:purified_silver_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_nickel"],
            "produceItem": ["techpack:purified_nickel_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_platinum"],
            "produceItem": ["techpack:purified_platinum_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_aluminum"],
            "produceItem": ["techpack:purified_aluminum_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["techpack:crushed_raw_chromium"],
            "produceItem": ["techpack:purified_chromium_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_uranium"],
            "produceItem": ["techpack:purified_uranium_dust",]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["techpack:crushed_raw_lithium"],
            "produceItem": ["techpack:purified_lithium_dust",]
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});