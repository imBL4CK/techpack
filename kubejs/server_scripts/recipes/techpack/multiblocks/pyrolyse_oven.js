import { techpackMultiblockApi } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
    {
        "machineType": "techpack:pyrolyse_oven",
        "processingTime": 100,
        "requireEnergy": 20,
        "requireItem": ["#minecraft:logs"],
        "produceItem": ["minecraft:charcoal", { item:"minecraft:charcoal", chance: 0.5 }],
        "produceFluid": ["25x techpack:wood_tar"]
    },
    {
        "machineType": "techpack:pyrolyse_oven",
        "processingTime": 300,
        "requireEnergy": 25,
        "requireItem": ["minecraft:coal"],
        "produceItem": ["techpack:coal_coke"]
    },
    {
        "machineType": "techpack:pyrolyse_oven",
        "processingTime": 300,
        "requireEnergy": 10,
        "requireItem": ["20x minecraft:sugar"],
        "produceItem": ["12x malum:charcoal_fragment"]
    }
]
    recipes.forEach((recipe) => {
       techpackMultiblockApi(e,recipe)
    });
});
