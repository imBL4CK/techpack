ServerEvents.recipes((e) => {
  const recipes = [
    //Basic Circuit Board
    {
        "machineType": "techpack:basic_metal_former",
        "jeiDisplayPriority": 3,
        "processingTime": 200,
        "requireEnergy": { perTick: 20 },
        "requireItem": ["techpack:electrum_gear", "techpack:steel_plate"],
        "produceItem": ["techpack:basic_circuit_board"]
    },
    //Carbon mesh
    {
        "machineType": "techpack:basic_metal_former",
        "jeiDisplayPriority": 3,
        "processingTime": 400,
        "requireEnergy": { perTick: 50 },
        "requireItem": ["techpack:graphite_ingot"],
        "produceItem": ["techpack:carbon_mesh"]
    },
    //Bearing
    {
        "machineType": "techpack:basic_metal_former",
        "jeiDisplayPriority": 3,
        "processingTime": 200,
        "requireEnergy": { perTick: 10 },
        "requireItem": ["3x create:copper_nugget"],
        "produceItem": ["techpack:bearing"]
    },
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
})
 
