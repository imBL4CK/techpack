import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  const recipes = [
    /*{
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireItem": ["techpack:biomass_pallet"],
      "produceFluid": [{ perTick: "20x techpack:organic_gas"}]
    },*/
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "requireItem": ["techpack:cinnabar"],
      "produceItem": ["techpack:quicksilver"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "requireItem": ["eidolon_repraised:pewter_blend"],
      "produceItem": ["eidolon_repraised:pewter_ingot"],
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});