import { steamGrinderFuncition } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
  const recipes = [
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:sulfur_cluster"],
      "produceItem": ["64x techpack:sulfur_dust"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["7x techpack:sulfur_block"],
      "produceItem": ["63x techpack:sulfur_dust"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:cinnabar_cluster"],
      "produceItem": ["64x techpack:cinnabar_shard"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:cinnabar_block"],
      "produceItem": ["64x techpack:cinnabar_shard"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["16x techpack:fireclay"],
      "produceItem": ["64x techpack:fireclay_ball"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:andesite"],
      "produceItem": ["8x techpack:mica"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:diorite"],
      "produceItem": ["8x techpack:mica"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:granite"],
      "produceItem": ["8x techpack:mica"]
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x techpack:slag"],
      "produceItem": ["8x techpack:mica"],
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x minecraft:lapis_lazuli"],
      "produceItem": ["32x techpack:lapis_dust"]
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x #c:raw_materials/uranium"],
      "produceItem": ["48x biggerreactors:uranium_dust"]
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x #c:ores/uranium"],
      "produceItem": ["48x biggerreactors:uranium_dust"]
    },
    {
      "processingTime": 200,
      "requireFluid": [{ perTick: "20x techpack:steam"}],
      "requireItem": ["32x #c:ingots/uranium"],
      "produceItem": ["32x biggerreactors:uranium_dust"]
    }
  ];
  recipes.forEach((recipe) => {
    steamGrinderFuncition(e,recipe)
  });
})