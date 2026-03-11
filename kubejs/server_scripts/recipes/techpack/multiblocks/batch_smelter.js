import { batchSmelterFuncition } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
  const recipe = [
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:raw_materials/copper"],
      "produceItem": ["16x minecraft:copper_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:ores/copper"],
      "produceItem": ["16x minecraft:copper_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:dusts/copper"],
      "produceItem": ["16x minecraft:copper_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:plates/copper"],
      "produceItem": ["16x minecraft:copper_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["63x #c:nuggets/copper"],
      "produceItem": ["7x minecraft:copper_ingot", { item: "7x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:gears/copper"],
      "produceItem": ["32x minecraft:copper_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:raw_materials/iron"],
      "produceItem": ["16x minecraft:iron_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:ores/iron"],
      "produceItem": ["16x minecraft:iron_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:dusts/iron"],
      "produceItem": ["16x minecraft:iron_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:plates/iron"],
      "produceItem": ["16x minecraft:iron_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["63x #c:nuggets/iron"],
      "produceItem": ["7x minecraft:iron_ingot", { item: "7x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:gears/iron"],
      "produceItem": ["32x minecraft:iron_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:raw_materials/gold"],
      "produceItem": ["16x minecraft:gold_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:ores/gold"],
      "produceItem": ["16x minecraft:gold_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:dusts/gold"],
      "produceItem": ["16x minecraft:gold_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:plates/gold"],
      "produceItem": ["16x minecraft:gold_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["63x #c:nuggets/gold"],
      "produceItem": ["7x minecraft:gold_ingot", { item: "7x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:gears/gold"],
      "produceItem": ["32x minecraft:gold_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:raw_materials/zinc"],
      "produceItem": ["16x create:zinc_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:ores/zinc"],
      "produceItem": ["16x create:zinc_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:dusts/zinc"],
      "produceItem": ["16x create:zinc_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:plates/zinc"],
      "produceItem": ["16x create:zinc_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["63x #c:nuggets/zinc"],
      "produceItem": ["7x create:zinc_ingot", { item: "7x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:gears/zinc"],
      "produceItem": ["32x create:zinc_ingot", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:ores/diamond"],
      "produceItem": ["16x minecraft:diamond", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:dusts/diamond"],
      "produceItem": ["16x minecraft:diamond", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:plates/diamond"],
      "produceItem": ["16x minecraft:diamond", { item: "16x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["63x #c:nuggets/diamond"],
      "produceItem": ["7x minecraft:diamond", { item: "7x techpack:slag", chance: 0.5 }],
    },
    {
      "processingTime": 200,
      "requireEnergyPerTick": 20,
      "requireItem": ["16x #c:gears/diamond"],
      "produceItem": ["32x minecraft:diamond", { item: "16x techpack:slag", chance: 0.5 }],
    },
  ]
  recipe.forEach((recipe) => {
    batchSmelterFuncition(e,recipe)
  });
})