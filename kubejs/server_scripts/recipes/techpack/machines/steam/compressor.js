import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
    //Snow to ice
    {
        "machineType": "techpack:steam_compressor",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "requireItem": ["4x minecraft:snow_block"],
        "produceItem": ["minecraft:ice"]
    },
    //Sands to Sandstone
    {
        "machineType": "techpack:steam_compressor",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "requireItem": ["4x minecraft:sand"],
        "produceItem": ["minecraft:sandstone"]
    },
    //Heavy Steel Plate
    {
        "machineType": "techpack:steam_compressor",
        "processingTime": 400,
        "requireFluid": [{ perTick: "4x techpack:steam" }],
        "requireItem": ["4x techpack:steel_ingot"],
        "produceItem": ["techpack:heavy_steel_plate"]
    },
    //Slag to mica
    {
        "machineType": "techpack:steam_compressor",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "requireItem": ["8x techpack:slag"],
        "produceItem": ["techpack:mica"]
    },
    //Latex
    {
        "machineType": "techpack:steam_compressor",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "requireItem": ["nomansland:resin"],
        "produceItem": ["techpack:latex"]
    },
    {
        "machineType": "techpack:steam_compressor",
        "jeiDisplayPriority": 1,
        "processingTime": 200,
        "requireFluid": [{ perTick: "2x techpack:steam" }],
        "requireItem": ["#c:plates/copper"],
        "produceItem": ["techpack:curved_copper_plate"]
    },
    {
        "machineType": "techpack:steam_compressor",
        "jeiDisplayPriority": 1,
        "processingTime": 200,
        "requireFluid": [{ perTick: "2x techpack:steam" }],
        "requireItem": ["#c:plates/iron"],
        "produceItem": ["techpack:curved_iron_plate"]
    },
]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});