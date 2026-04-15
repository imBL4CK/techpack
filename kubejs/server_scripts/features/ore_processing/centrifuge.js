import { techpackMachineAPI } from "././recipes/techpack/techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_copper_dust"],
            "produceItem": [
                "techpack:copper_dust", 
                { item: "techpack:copper_dust", chance: 0.5 },
                { item: "techpack:tin_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_tin_dust"],
            "produceItem": [
                "techpack:tin_dust", 
                { item: "techpack:tin_dust", chance: 0.5 },
                { item: "techpack:copper_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_iron_dust"],
            "produceItem": [
                "techpack:iron_dust", 
                { item: "techpack:iron_dust", chance: 0.5 },
                { item: "techpack:nickel_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_nickel_dust"],
            "produceItem": [
                "techpack:nickel_dust", 
                { item: "techpack:nickel_dust", chance: 0.5 },
                { item: "techpack:iron_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_gold_dust"],
            "produceItem": [
                "techpack:gold_dust", 
                { item: "techpack:gold_dust", chance: 0.5 },
                { item: "techpack:silver_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_silver_dust"],
            "produceItem": [
                "techpack:silver_dust", 
                { item: "techpack:silver_dust", chance: 0.5 },
                { item: "techpack:gold_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_zinc_dust"],
            "produceItem": [
                "techpack:zinc_dust", 
                { item: "techpack:zinc_dust", chance: 0.5 },
                { item: "techpack:lead_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_lead_dust"],
            "produceItem": [
                "techpack:lead_dust", 
                { item: "techpack:lead_dust", chance: 0.5 },
                { item: "techpack:zinc_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_platinum_dust"],
            "produceItem": [
                "techpack:platinum_dust", 
                { item: "techpack:platinum_dust", chance: 0.5 },
                { item: "techpack:gold_dust", chance: 0.25 }
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_aluminum_dust"],
            "produceItem": [
                "techpack:aluminum_dust", 
                { item: "techpack:aluminum_dust", chance: 0.5 },
            ]
        },
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_chromium_dust"],
            "produceItem": [
                "techpack:chromium_dust", 
                { item: "techpack:chromium_dust", chance: 0.5 },
            ]
        },
        //Uranium
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_uranium_dust"],
            "produceItem": [
                "techpack:uranium_dust", 
                { item: "techpack:uranium_dust", chance: 0.5 },
                { item: "techpack:fissile_uranium", chance: 0.05 }
            ]
        },
        //Calorite
        {
            "machineType": "techpack:basic_centrifuge",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:purified_calorite_dust"],
            "produceItem": [
                "techpack:calorite_dust", 
                { item: "techpack:calorite_dust", chance: 0.5 },
            ]
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});