import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "machineType": "techpack:basic_solidifier",
      "processingTime": 400,  
      "requireEnergy": { perTick: 10 },
      "jeiDisplayPriority": 1,
      "requireFluid": ["1000x pneumaticcraft:plastic"],
      "produceItem": ["pneumaticcraft:plastic"]
    },
    {
      "machineType": "techpack:basic_solidifier",
      "processingTime": 400,  
      "requireEnergy": { perTick: 20 },
      "jeiDisplayPriority": 1,
      "requireFluid": ["1000x techpack:polytetrafluoroethylene"],
      "produceItem": ["techpack:ptfe_sheet"]
    },
    {
      "machineType": "techpack:basic_solidifier",
      "processingTime": 100,  
      "requireEnergy": { perTick: 20 },
      "jeiDisplayPriority": 2,
      "requireFluid": ["100x techpack:ice_coolant"],
      "requireItem": [
        { item: "minecraft:glass_pane", chance: 0 }
      ],
      "produceItem": ["techpack:ice_coolant_ball"]
    },
    {
      "machineType": "techpack:basic_solidifier",
      "processingTime": 200,  
      "requireEnergy": { perTick: 20 },
      "jeiDisplayPriority": 2,
      "requireFluid": ["500x techpack:ice_coolant"],
      "requireItem": ["minecraft:glass_bottle"],
      "produceItem": ["techpack:ice_coolant_paste"]
    },
    {
      "machineType": "techpack:basic_solidifier",
      "processingTime": 100,  
      "requireEnergy": { perTick: 10 },
      "requireFluid": ["100x techpack:liquid_sugar"],
      "requireItem": [
        { item: "minecraft:glass_pane", chance: 0 }
      ],
      "produceItem": ["8x minecraft:sugar"]
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});