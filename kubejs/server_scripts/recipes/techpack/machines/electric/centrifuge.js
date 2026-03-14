import { techpackMachineAPI } from "./techpack_machineAPI";

ServerEvents.recipes((e) => {
  const recipes = [
      {
        "machineType": "techpack:basic_centrifuge",
        "jeiDisplayPriority": 3,
        "processingTime": 600,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:bronze_dust"],
        "produceItem": [{ item: "3x techpack:copper_dust", chance: 0.5 }, { item: "techpack:tin_dust", chance: 0.5 }],
      },
      {
        "machineType": "techpack:basic_centrifuge",
        "jeiDisplayPriority": 3,
        "processingTime": 600,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:steel_dust"],
        "produceItem": [{ item: "techpack:iron_dust", chance: 0.5 }, { item: "techpack:hop_graphite_dust", chance: 0.5 }],
      },
      {
        "machineType": "techpack:basic_centrifuge",
        "jeiDisplayPriority": 3,
        "processingTime": 600,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:constantan_dust"],
        "produceItem": [{ item: "techpack:copper_dust", chance: 0.5 }, { item: "techpack:nickel_dust", chance: 0.5 }],
      },
      {
        "machineType": "techpack:basic_centrifuge",
        "jeiDisplayPriority": 3,
        "processingTime": 600,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:invar_dust"],
        "produceItem": [{ item: "3x techpack:iron_dust", chance: 0.5 }, { item: "techpack:nickel_dust", chance: 0.5 }],
      },
      {
        "machineType": "techpack:basic_centrifuge",
        "jeiDisplayPriority": 3,
        "processingTime": 600,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:electrum_dust"],
        "produceItem": [{ item: "techpack:gold_dust", chance: 0.5 }, { item: "techpack:silver_dust", chance: 0.5 }],
      },
      {
        "machineType": "techpack:basic_centrifuge",
        "jeiDisplayPriority": 3,
        "processingTime": 600,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:kanthal_dust"],
        "produceItem": [
            { item: "techpack:iron_dust", chance: 0.5 }, 
            { item: "techpack:nickel_dust", chance: 0.5 }, 
            { item: "techpack:aluminum_dust", chance: 0.5 }
        ],
      },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});
