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
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_copper"],
      "produceItem": ["minecraft:copper_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_iron"],
      "produceItem": ["minecraft:iron_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_gold"],
      "produceItem": ["minecraft:gold_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_tin"],
      "produceItem": ["techpack:tin_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_silver"],
      "produceItem": ["techpack:silver_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_nickel"],
      "produceItem": ["techpack:nickel_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_lead"],
      "produceItem": ["techpack:lead_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_platinum"],
      "produceItem": ["techpack:platinum_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_aluminum"],
      "produceItem": ["techpack:aluminum_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_chrome"],
      "produceItem": ["techpack:chrome_ingot"],
    },
    {
      "machineType": "techpack:kiln",
      "processingTime": 200,
      "requireFuel": true,
      "jeiDisplayPriority": 1,
      "requireItem": ["techpack:native_raw_diamond"],
      "produceItem": ["minecraft:diamond"],
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});