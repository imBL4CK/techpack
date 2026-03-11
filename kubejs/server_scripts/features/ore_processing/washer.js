import { techpackMachineAPI } from "././recipes/techpack/techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    let acid = "10x techpack:redstone_acid"
    const recipes = [
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_copper"],
            "produceItem": ["techpack:copper_dust", { item: "techpack:copper_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_iron"],
            "produceItem": ["techpack:iron_dust", { item: "techpack:iron_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_gold"],
            "produceItem": ["techpack:gold_dust", { item: "techpack:gold_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_zinc"],
            "produceItem": ["techpack:zinc_dust", { item: "techpack:zinc_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_tin"],
            "produceItem": ["techpack:tin_dust", { item: "techpack:tin_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_silver"],
            "produceItem": ["techpack:silver_dust", { item: "techpack:silver_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_nickel"],
            "produceItem": ["techpack:nickel_dust", { item: "techpack:nickel_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_platinum"],
            "produceItem": ["techpack:platinum_dust", { item: "techpack:platinum_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_aluminum"],
            "produceItem": ["techpack:aluminum_dust", { item: "techpack:aluminum_dust", chance: 0.5 }]
        },
        {
            "machineType": "techpack:basic_washer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["techpack:crushed_raw_chrome"],
            "produceItem": ["techpack:chrome_dust", { item: "techpack:chrome_dust", chance: 0.5 }]
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});