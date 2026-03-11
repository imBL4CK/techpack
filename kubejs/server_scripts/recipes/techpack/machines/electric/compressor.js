import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["4x minecraft:snow_block"],
            "produceItem": ["minecraft:ice"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 200,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["4x minecraft:sand"],
            "produceItem": ["minecraft:sandstone"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 200,
            "requireEnergy": { perTick: 50 },
            "requireItem": ["2x techpack:mixed_metal_ingot"],
            "produceItem": ["techpack:heavy_duty_plate"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 400,
            "requireEnergy": { perTick: 50 },
            "requireItem": ["8x enderio:powdered_coal"],
            "produceItem": ["techpack:graphite_ingot"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 300,
            "requireEnergy": { perTick: 50 },
            "requireItem": ["4x techpack:steel_ingot"],
            "produceItem": ["techpack:heavy_steel_plate"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 100,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["8x techpack:slag"],
            "produceItem": ["techpack:mica"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "processingTime": 100,
            "requireEnergy": { perTick: 10 },
            "requireItem": ["nomansland:resin"],
            "produceItem": ["techpack:latex"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:plates/copper"],
            "produceItem": ["techpack:curved_copper_plate"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 20 },
            "requireItem": ["#c:plates/iron"],
            "produceItem": ["techpack:curved_iron_plate"]
        },
        {
            "machineType": "techpack:basic_compressor",
            "jeiDisplayPriority": 1,
            "processingTime": 100,
            "requireEnergy": { perTick: 40 },
            "requireItem": ["#c:plates/diamond"],
            "produceItem": ["techpack:curved_diamond_plate"]
        },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});