import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "machineType": "techpack:electric_composter",
      "processingTime": 400,
      "requireEnergy": { perTick: 5 },
      "jeiDisplayPriority": 1,
      "requireItem": ["#c:seeds"],
      "produceItem": ["techpack:biomass"],
      "produceFluid": ["1000x pneumaticcraft:vegetable_oil"]
    },
    {
      "machineType": "techpack:electric_composter",
      "processingTime": 400,
      "requireEnergy": { perTick: 5 },
      "jeiDisplayPriority": 2,
      "requireItem": ["#c:crops"],
      "produceItem": ["techpack:biomass"],
      "produceFluid": ["1000x pneumaticcraft:vegetable_oil"]
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});