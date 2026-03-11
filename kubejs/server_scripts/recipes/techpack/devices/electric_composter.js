import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "machineType": "techpack:electric_composter",
      "processingTime": 400,
      "requireEnergy": { perTick: 5 },
      "jeiDisplayPriority": 1,
      "requireItem": ["#c:seeds"],
      "produceItem": ["techpack:organic_matter"],
      "produceFluid": ["1000x techpack:organic_oil"]
    },
    {
      "machineType": "techpack:electric_composter",
      "processingTime": 400,
      "requireEnergy": { perTick: 5 },
      "jeiDisplayPriority": 2,
      "requireItem": ["#c:crops"],
      "produceItem": ["techpack:organic_matter"],
      "produceFluid": ["1000x techpack:organic_oil"]
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});