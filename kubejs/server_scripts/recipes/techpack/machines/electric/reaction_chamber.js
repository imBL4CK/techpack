import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
      //Electrolysis Water
      {
          "machineType": "techpack:basic_reaction_chamber",
          "processingTime": 300,  
          "requireEnergy": { perTick: 10 },
          "jeiDisplayPriority": 1,
          "requireFluid": ["200x techpack:ethylene", "400x techpack:fluorine"],
          "produceFluid": ["600x techpack:tetrafluoroethylene"]
      },
      //Fluorine
      {
          "machineType": "techpack:basic_reaction_chamber",
          "processingTime": 600,  
          "requireEnergy": { perTick: 50 },
          "jeiDisplayPriority": 2,
          "requireFluid": ["800x techpack:tetrafluoroethylene", "800x stellaris:oxygen"],
          "produceFluid": ["1600x techpack:polytetrafluoroethylene"]
      },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});