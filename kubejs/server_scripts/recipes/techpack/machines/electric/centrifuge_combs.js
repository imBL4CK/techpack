import { techpackMachineAPI } from "./techpack_machineAPI";

ServerEvents.recipes((e) => {
  const recipes = [
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 20 },
      "requireItem": ["techpack:sweet_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
        { item: "minecraft:sugar", chance: 0.5 },
        { item: "minecraft:sugar", chance: 0.5 },
        { item: "minecraft:sugar", chance: 0.5 },
      ],
    },
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 20 },
      "requireItem": ["techpack:sticky_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
        { item: "nomansland:resin", chance: 0.5 },
        { item: "nomansland:resin", chance: 0.5 },
        { item: "nomansland:resin", chance: 0.5 },
      ],
    },
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 20 },
      "requireItem": ["techpack:oscillanting_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
        { item: "minecraft:ender_pearl", chance: 0.5 },
        { item: "minecraft:chorus_fruit", chance: 0.5 },
        { item: "malum:warp_flux", chance: 0.5 },
      ],
    },
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 20 },
      "requireItem": ["techpack:warm_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
        { item: "minecraft:nether_wart", chance: 0.5 },
        { item: "techpack:calcium_dust", chance: 0.5 },
        { item: "malum:grim_talc", chance: 0.5 },
      ],
    },
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 30 },
      "requireItem": ["techpack:depth_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
      ],
      "produceLootTable": "techpack:combs/depth_comb"
    },
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 20 },
      "requireItem": ["techpack:arcane_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
        { item: "malum:hex_ash", chance: 0.5 },
        { item: "minecraft:lapis_lazuli", chance: 0.5 },
        { item: "eidolon_repraised:ender_calx", chance: 0.5 },
      ],
    },
    {
      "machineType": "techpack:basic_centrifuge",
      "jeiDisplayPriority": 2,
      "processingTime": 600,
      "requireEnergy": { perTick: 50 },
      "requireItem": ["techpack:precious_comb"],
      "produceFluid": [
        "100x create:honey"
      ],
      "produceItem": [
        { item: "techpack:beewax", chance: 0.5 },
      ],
      "produceLootTable": "techpack:combs/precious_comb"
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
});
