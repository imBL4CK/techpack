import { techpackMultiblockApi } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
    {
        "machineType": "techpack:recycler",
        "processingTime": 100,
        "requireEnergy": 2,
        "requireItem": ["techpack:basic_smelter"],
        "produceItem": ["techpack:basic_machine_casing", "techpack:slag"]
    }
]
    recipes.forEach((recipe) => {
       techpackMultiblockApi(e,recipe)
    });
});
