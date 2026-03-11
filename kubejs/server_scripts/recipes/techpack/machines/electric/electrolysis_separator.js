import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
      //Electrolysis Water
      {
          "machineType": "techpack:basic_electrolysis_separator",
          "jeiDisplayPriority": 1,
          "processingTime": 200,  
          "requireEnergy": { perTick: 30 },
          "requireFluid": [{perTick: "2x minecraft:water"}],
          "produceFluid": [{perTick: "1x stellaris:hydrogen"}, {perTick: "1x stellaris:oxygen"}]
      },
      //Fluorine
      {
          "machineType": "techpack:basic_electrolysis_separator",
          "jeiDisplayPriority": 2,
          "processingTime": 200,  
          "requireEnergy": { perTick: 50 },
          "requireItem": ["4x malum:large_strange_crystal"],
          "produceFluid": ["500x techpack:fluorine"]
      }
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});