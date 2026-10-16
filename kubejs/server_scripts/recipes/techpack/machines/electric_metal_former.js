ServerEvents.recipes((e) => {
  const recipes = [
    //Basic Recipes
    {
        "machineType": "techpack:electric_metal_former",
        "recipeTier": "basic",
        "jeiDisplayPriority": 3,
        "processingTime": 200,
        "requireEnergy": { perTick: 20 },
        "requireItem": ["create_new_age:copper_wire", "techpack:steel_plate"],
        "produceItem": ["techpack:basic_circuit_board"]
    },
    {
        "machineType": "techpack:electric_metal_former",
        "recipeTier": "basic",
        "jeiDisplayPriority": 3,
        "processingTime": 400,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:graphite_ingot"],
        "produceItem": ["techpack:carbon_mesh"]
    },
    {
        "machineType": "techpack:electric_metal_former",
        "recipeTier": "basic",
        "jeiDisplayPriority": 3,
        "processingTime": 200,
        "requireEnergy": { perTick: 10 },
        "requireItem": ["3x create:copper_nugget"],
        "produceItem": ["techpack:bearing"]
    },
    {
        "machineType": "techpack:electric_metal_former",
        "jeiDisplayPriority": 1,
        "recipeTier": "basic",
        "jeiDisplayPriority": 3,
        "processingTime": 200,
        "requireEnergy": { perTick: 10 },
        "requireItem": ["ad_astra:etrium_ingot"],
        "produceItem": ["ad_astra:etrium_plate"]
    },
    {
        "machineType": "techpack:electric_metal_former",
        "jeiDisplayPriority": 1,
        "recipeTier": "basic",
        "processingTime": 200,
        "requireEnergy": { perTick: 10 },
        "requireItem": ["minecraft:diamond"],
        "produceItem": ["techpack:diamond_plate"]
    },
    {
        "machineType": "techpack:electric_metal_former",
        "jeiDisplayPriority": 2,
        "recipeTier": "basic",
        "processingTime": 200,
        "requireEnergy": { perTick: 10 },
        "requireItem": ["techpack:bearing", "2x minecraft:diamond"],
        "produceItem": ["techpack:diamond_gear"]
    },
    //Advanced Recipes
    {
        "machineType": "techpack:electric_metal_former",
        "recipeTier": "advanced",
        "processingTime": 200,
        "requireEnergy": { perTick: 20 },
        "requireItem": ["techpack:ptfe_sheet", "techpack:stainless_steel_plate"],
        "produceItem": ["techpack:sophisticated_circuit_board"]
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
})
 
