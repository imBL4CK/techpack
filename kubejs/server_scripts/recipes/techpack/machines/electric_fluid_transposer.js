import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 2,
      "processingTime": 400,  
      "requireEnergy": { perTick: 10 },
      "requireFluid": ["1000x pneumaticcraft:plastic"],
      "requireItem": [{ item: "minecraft:glass_pane", chance: 0 }],
      "produceItem": ["pneumaticcraft:plastic"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 2,
      "processingTime": 400,  
      "requireEnergy": { perTick: 20 },
      "requireFluid": ["1000x techpack:polytetrafluoroethylene"],
      "requireItem": [{ item: "minecraft:glass_pane", chance: 0 }],
      "produceItem": ["techpack:ptfe_sheet"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 2,
      "processingTime": 100,  
      "requireEnergy": { perTick: 10 },
      "requireFluid": ["100x techpack:liquid_sugar"],
      "requireItem": [{ item: "minecraft:glass_pane", chance: 0 }],
      "produceItem": ["8x minecraft:sugar"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 3,
      "processingTime": 100,  
      "requireEnergy": { perTick: 20 },
      "requireFluid": ["100x minecraft:water"],
      "requireItem": ["minecraft:copper_block"],
      "produceItem": ["minecraft:exposed_copper"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 3,
      "processingTime": 100,  
      "requireEnergy": { perTick: 20 },
      "requireFluid": ["100x minecraft:water"],
      "requireItem": ["minecraft:exposed_copper"],
      "produceItem": ["minecraft:weathered_copper"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 3,
      "processingTime": 100,  
      "requireEnergy": { perTick: 20 },
      "requireFluid": ["100x minecraft:water"],
      "requireItem": ["minecraft:weathered_copper"],
      "produceItem": ["minecraft:oxidized_copper"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 4,
      "processingTime": 200,
      "requireEnergy": { perTick: 10 },
      "requireFluid": ["100x pneumaticcraft:etching_acid"],
      "requireItem": ["techpack:silicon_wafer"],
      "produceItem": ["techpack:polished_wafer"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 4,
      "processingTime": 200,
      "requireEnergy": { perTick: 10 },
      "requireFluid": ["200x #c:experience"],
      "produceFluid": ["200x enderio:fluid_xp_juice_still"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 4,
      "processingTime": 200,
      "requireEnergy": { perTick: 10 },
      "requireFluid": ["200x minecraft:water"],
      "requireItem": ["#c:flours/wheat"],
      "produceItem": ["farmersdelight:wheat_dough"]
    },
    {
      "machineType": "techpack:electric_fluid_transposer",
      "jeiDisplayPriority": 4,
      "processingTime": 100,  
      "requireEnergy": { perTick: 20 },
      "requireFluid": ["100x minecraft:water"],
      "requireItem": ["create:rose_quartz"],
      "produceItem": ["create:polished_rose_quartz"]
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});