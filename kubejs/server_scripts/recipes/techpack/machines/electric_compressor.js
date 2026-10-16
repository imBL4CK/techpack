import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["4x minecraft:snow_block"],
            "produceItem": ["minecraft:ice"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["4x minecraft:sand"],
            "produceItem": ["minecraft:sandstone"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "processingTime": 200,
            "requireEnergy": { perTick: 50 },
            "requireItem": ["2x techpack:mixed_metal_ingot"],
            "produceItem": ["techpack:heavy_duty_plate"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "processingTime": 400,
            "requireEnergy": { perTick: 50 },
            "requireItem": ["8x #c:dusts/coal"],
            "produceItem": ["techpack:graphite_ingot"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "processingTime": 100,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["8x techpack:slag"],
            "produceItem": ["techpack:mica"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:plates/copper"],
            "produceItem": ["techpack:curved_copper_plate"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:plates/iron"],
            "produceItem": ["techpack:curved_iron_plate"]
        },
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 40 },
            "requireItem": ["#c:plates/diamond"],
            "produceItem": ["techpack:curved_diamond_plate"]
        },
        //Advanced Recipes
        {
            "machineType": "techpack:electric_compressor",
            "recipeTier": "advanced",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 40 },
            "requireItem": ["4x techpack:heavy_duty_plate"],
            "produceItem": ["ad_astra:rocket_nose_cone"]
        }
    ]
    recipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
});