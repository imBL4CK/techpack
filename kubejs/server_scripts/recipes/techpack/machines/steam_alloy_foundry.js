import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
    //Bronze Ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 1,
        "requireItem": ["3x #c:ingots/copper", "#c:ingots/tin"],
        "produceItem": ["4x techpack:bronze_ingot"]
    },
    //Wrought iron ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 1,
        "requireItem": ["#c:ingots/iron", "#c:sands"],
        "produceItem": ["2x techpack:wrought_iron_ingot"]
    },
    //Brass ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 1,
        "requireItem": ["#c:ingots/copper", "#c:ingots/zinc"],
        "produceItem": ["2x create:brass_ingot"]
    },
    //Electrum ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 2,
        "requireItem": ["#c:ingots/gold", "#c:ingots/silver"],
        "produceItem": ["2x techpack:electrum_ingot"]
    },
    //Invar ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 2,
        "requireItem": ["3x #c:ingots/iron", "#c:ingots/nickel"],
        "produceItem": ["4x techpack:invar_ingot"]
    },
    //Redstone alloy ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 2,
        "requireItem": ["minecraft:redstone", "#c:silicon"],
        "produceItem": ["enderio:redstone_alloy_ingot"]
    },
    //Copper alloy ingot
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 2,
        "requireItem": ["#c:ingots/copper", "#c:silicon"],
        "produceItem": ["enderio:copper_alloy_ingot"]
    },
    //Andesite Alloy
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 3,
        "requireItem": ["#c:nuggets/iron", "minecraft:andesite"],
        "produceItem": ["2x create:andesite_alloy"]
    },
    {
        "machineType": "techpack:steam_alloy_foundry",
        "processingTime": 200,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "jeiDisplayPriority": 3,
        "requireItem": ["#c:nuggets/zinc", "minecraft:andesite"],
        "produceItem": ["2x create:andesite_alloy"]
    },
]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});