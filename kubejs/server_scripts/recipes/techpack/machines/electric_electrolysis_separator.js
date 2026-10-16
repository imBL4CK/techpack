import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
      //Electrolysis Water
      {
          "machineType": "techpack:electric_electrolysis_separator",
          "jeiDisplayPriority": 1,
          "processingTime": 200,  
          "requireEnergy": { perTick: 30 },
          "requireFluid": [{perTick: "2x minecraft:water"}],
          "produceFluid": [{perTick: "1x ad_astra:hydrogen"}, {perTick: "1x ad_astra:oxygen"}]
      },
      //Fluorine
      {
          "machineType": "techpack:electric_electrolysis_separator",
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