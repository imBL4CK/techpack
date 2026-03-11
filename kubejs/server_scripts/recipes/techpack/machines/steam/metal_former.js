ServerEvents.recipes((e) => {
  const recipes = [
    //Basic Circuit Board
    {
        "machineType": "techpack:steam_metal_former",
        "processingTime": 300,
        "requireFluid": [{ perTick: "4x techpack:steam" }],
        "requireItem": ["techpack:electrum_gear", "techpack:steel_plate"],
        "produceItem": ["techpack:basic_circuit_board"]
    },
    //Bearing
    {
        "machineType": "techpack:steam_metal_former",
        "processingTime": 300,
        "requireFluid": [{ perTick: "1x techpack:steam" }],
        "requireItem": ["3x create:copper_nugget"],
        "produceItem": ["techpack:bearing"]
    }
  ]
  recipes.forEach((recipe) => {
    techpackMachineAPI(e,recipe)
  });
})
 
