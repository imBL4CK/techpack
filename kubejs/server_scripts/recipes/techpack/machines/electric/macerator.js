import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const BasicRecipes = [
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:sulfur_block"],
            "produceItem": ["9x techpack:sulfur_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["techpack:sulfur_cluster"],
            "produceItem": ["4x techpack:sulfur_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 200,  
            "requireEnergy": { perTick: 20 },
            "requireItem": ["techpack:cinnabar_block"],
            "produceItem": ["4x techpack:cinnabar"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 2,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["techpack:cinnabar_cluster"],
            "produceItem": ["4x techpack:cinnabar"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["techpack:fireclay"],
            "produceItem": ["4x techpack:fireclay_ball"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:sand"],
            "produceItem": ["4x techpack:sifted_sand"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#techpack:seashells"],
            "produceItem": ["2x techpack:calcium_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:calcite"],
            "produceItem": ["4x techpack:calcium_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["#c:bones"],
            "produceItem": ["4x techpack:calcium_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:bone_meal"],
            "produceItem": ["techpack:calcium_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:coal"],
            "produceItem": ["techpack:coal_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 3,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:charcoal"],
            "produceItem": ["techpack:charcoal_dust"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:stone"],
            "produceItem": ["minecraft:cobblestone"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:cobblestone"],
            "produceItem": ["minecraft:gravel"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "jeiDisplayPriority": 4,
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:gravel"],
            "produceItem": ["minecraft:sand"]
        },
        {
            "machineType": "techpack:basic_macerator",
            "recipeTier": "basic",
            "processingTime": 200,  
            "requireEnergy": { perTick: 10 },
            "requireItem": ["minecraft:lapis_lazuli"],
            "produceItem": ["techpack:lapis_dust"]
        },
    ]
    const AdvancedRecipes = [
        {
            "machineType": "techpack:advanced_macerator",
            "recipeTier": "advanced",
            "jeiDisplayPriority": 1,
            "processingTime": 200,  
            "requireEnergy": { perTick: 100 },
            "requireItem": ["techpack:coal_coke"],
            "produceItem": ["techpack:hop_graphite_dust"]
        },
    ]

  BasicRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
  AdvancedRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
  //SophisticatedRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});

  //Upper tier inherit recipes from lower tier
  const AdvancedToSophisticated = AdvancedRecipes.map((rec) => {
    const clone = JSON.parse(JSON.stringify(rec));
    clone.machineType = "techpack:sophisticated_macerator";
    return clone;
  });
  AdvancedToSophisticated.forEach((recipe) => { techpackMachineAPI(e,recipe)});
});