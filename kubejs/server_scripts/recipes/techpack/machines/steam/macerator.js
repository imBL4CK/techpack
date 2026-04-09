import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        //Sulfur crystal to dusts
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 1,
            "requireItem": ["techpack:sulfur_block"],
            "produceItem": ["9x techpack:sulfur_dust"]
        },
        //Sulfur cluster to dusts
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 1,
            "requireItem": ["techpack:sulfur_cluster"],
            "produceItem": ["4x techpack:sulfur_dust"]
        },
        //Cinnabar block to cinnabar
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 2,
            "requireItem": ["techpack:cinnabar_block"],
            "produceItem": ["4x techpack:cinnabar"]
        },
        //Cinnabar cluster to cinnabar
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 2,
            "requireItem": ["techpack:cinnabar_cluster"],
            "produceItem": ["4x techpack:cinnabar"]
        },
        //Fireclay Balls
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "requireItem": ["techpack:fireclay"],
            "produceItem": ["4x techpack:fireclay_ball"]
        },
        //Sifted sand
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "requireItem": ["minecraft:sand"],
            "produceItem": ["4x techpack:sifted_sand"]
        },
        //Calcium dust by seashells
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 3,
            "requireItem": ["#techpack:seashells"],
            "produceItem": ["2x techpack:calcium_dust"]
        },
        //Calcium dust by calcite
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 3,
            "requireItem": ["minecraft:calcite"],
            "produceItem": ["4x techpack:calcium_dust"]
        },
        //Calcium dust by bones
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 3,
            "requireItem": ["#c:bones"],
            "produceItem": ["4x techpack:calcium_dust"]
        },
        //Calcium dust by bone meal
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 3,
            "requireItem": ["minecraft:bone_meal"],
            "produceItem": ["techpack:calcium_dust"]
        },
        //Powdered Coal
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 3,
            "requireItem": ["minecraft:coal"],
            "produceItem": ["techpack:coal_dust"]
        },
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 3,
            "requireItem": ["minecraft:charcoal"],
            "produceItem": ["techpack:charcoal_dust"]
        },
        //Stone to Cobblestone
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 4,
            "requireItem": ["minecraft:stone"],
            "produceItem": ["minecraft:cobblestone"]
        },
        //Cobblestone to Gravel
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 4,
            "requireItem": ["minecraft:cobblestone"],
            "produceItem": ["minecraft:gravel"]
        },
        //Gravel to Sand
        {
            "machineType": "techpack:steam_macerator",
            "processingTime": 200,  
            "requireFluid": [{ perTick: "1x techpack:steam" }],
            "jeiDisplayPriority": 4,
            "requireItem": ["minecraft:gravel"],
            "produceItem": ["minecraft:sand"]
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});