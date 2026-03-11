import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
  let recipeFormat = e.recipes.custommachinery
  //Logs into Planks 
  {
    e.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    recipeFormat.custom_machine("techpack:basic_sawmill", 200)
      .requireEnergyPerTick(10)
      .requireItem(ingredients[0])
      .produceItem(Item.of(output.id, 6))
      .produceItem("farmersdelight:tree_bark").chance(0.5)
      .produceItem("techpack:sawdust").chance(0.5)
      .info(info => info.tooltip("Minimum Tier Required: Basic").item("techpack:basic_circuit"))
      .jei()
      .priority(1);
  })
  }
  const BasicRecipes = [
    {
      "machineType": "techpack:basic_sawmill",
      "jeiDisplayPriority": 2,
      "processingTime": 200,  
      "requireEnergy": { perTick: 10 },
      "requireItem": ["techpack:copper_plate"],
      "produceItem": ["4x create_new_age:copper_wire"],
      "recipeTier": "basic",
    },
    {
      "machineType": "techpack:basic_sawmill",
      "jeiDisplayPriority": 2,
      "processingTime": 200,  
      "requireEnergy": { perTick: 10 },
      "requireItem": ["create_new_age:overcharged_iron_sheet"],
      "produceItem": ["4x create_new_age:overcharged_iron_wire"],
      "recipeTier": "basic",
    },
    {
      "machineType": "techpack:basic_sawmill",
      "jeiDisplayPriority": 3,
      "processingTime": 200,  
      "requireEnergy": { perTick: 10 },
      "requireItem": ["4x ae2:silicon"],
      "produceItem": ["techpack:silicon_wafer"],
      "recipeTier": "basic",
    },
    {
      "machineType": "techpack:basic_sawmill",
      "jeiDisplayPriority": 4,
      "processingTime": 200,  
      "requireEnergy": { perTick: 50 },
      "requireItem": ["4x techpack:graphite_ingot"],
      "produceItem": ["techpack:graphite_electrode[damage=512]"],
      "recipeTier": "basic",
    }
  ]
  const AdvancedRecipes = [
    {
      "machineType": "techpack:advanced_sawmill",
      "recipeTier": "advanced",
      "jeiDisplayPriority": 1,
      "processingTime": 200,  
      "requireEnergy": { perTick: 20 },
      "requireItem": ["create_new_age:overcharged_golden_sheet"],
      "produceItem": ["4x create_new_age:overcharged_golden_wire"],
    },
    {
      "machineType": "techpack:advanced_sawmill",
      "recipeTier": "advanced",
      "jeiDisplayPriority": 1,
      "processingTime": 200,  
      "requireEnergy": { perTick: 50 },
      "requireItem": ["create_new_age:overcharged_diamond"],
      "produceItem": ["4x create_new_age:overcharged_diamond_wire"],
    },
    {
      "machineType": "techpack:advanced_sawmill",
      "recipeTier": "advanced",
      "processingTime": 200,  
      "requireEnergy": { perTick: 100 },
      "requireItem": ["techpack:carbon_fiber"],
      "produceItem": ["techpack:graphite_electrode"],
    }
  ]
  BasicRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
  AdvancedRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});
  //SophisticatedRecipes.forEach((recipe) => { techpackMachineAPI(e,recipe)});

  //Upper tier inherit recipes from lower tier
  const AdvancedToSophisticated = AdvancedRecipes.map((rec) => {
    const clone = JSON.parse(JSON.stringify(rec));
    clone.machineType = "techpack:sophisticated_sawmill";
    return clone;
  });
  AdvancedToSophisticated.forEach((recipe) => { techpackMachineAPI(e,recipe)});
});