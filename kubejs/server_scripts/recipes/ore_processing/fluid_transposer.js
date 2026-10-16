import { techpackMachineAPI } from "././recipes/techpack/techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    let acid = "10x techpack:ore_washing_acid"
    const recipes = [
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_copper"],
            "produceItem": ["2x techpack:copper_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_iron"],
            "produceItem": ["2x techpack:iron_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_gold"],
            "produceItem": ["2x techpack:gold_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_zinc"],
            "produceItem": ["2x techpack:zinc_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_tin"],
            "produceItem": ["2x techpack:tin_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_silver"],
            "produceItem": ["2x techpack:silver_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_nickel"],
            "produceItem": ["2x techpack:nickel_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_aluminum"],
            "produceItem": ["2x techpack:aluminum_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["techpack:crushed_raw_chromium"],
            "produceItem": ["2x techpack:chromium_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["create:crushed_raw_uranium"],
            "produceItem": ["2x biggerreactors:uranium_dust"]
        },
        {
            "machineType": "techpack:electric_fluid_transposer",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 40 },
            "requireFluid": [acid],
            "requireItem": ["techpack:crushed_raw_lithium"],
            "produceItem": ["2x techpack:lithium_dust"]
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});