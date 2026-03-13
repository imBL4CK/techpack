import { steamGrinderFuncition } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
  const recipes = [
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x minecraft:sand"],
      "produceItem": ["64x techpack:sifted_sand"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x minecraft:red_sand"],
      "produceItem": ["64x techpack:sifted_sand"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x minecraft:calcite"],
      "produceItem": ["64x techpack:calcium_dust"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:sulfur_cluster"],
      "produceItem": ["64x techpack:sulfur_dust"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["7x techpack:sulfur_block"],
      "produceItem": ["63x techpack:sulfur_dust"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:cinnabar_cluster"],
      "produceItem": ["64x techpack:cinnabar"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:cinnabar_block"],
      "produceItem": ["64x techpack:cinnabar"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:fireclay"],
      "produceItem": ["64x techpack:fireclay_ball"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:andesite"],
      "produceItem": ["8x techpack:mica"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:diorite"],
      "produceItem": ["8x techpack:mica"],
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:granite"],
      "produceItem": ["8x techpack:mica"]
    },
    {
      "processingTime": 300,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x techpack:slag"],
      "produceItem": ["8x techpack:mica"],
    }
  ];
  recipes.forEach((recipe) => {
    steamGrinderFuncition(e,recipe)
  });
})