import { pyrolyseOvenFunction } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
    {
        "processingTime": 100,
        "requireEnergyPerTick": 20,
        "requireItem": ["#minecraft:logs"],
        "produceItem": ["minecraft:charcoal", { item:"minecraft:charcoal", chance: 0.5 }],
        "produceFluid": ["25x techpack:wood_tar"]
    },
    {
        "processingTime": 300,
        "requireEnergyPerTick": 25,
        "requireItem": ["minecraft:coal"],
        "produceItem": ["techpack:coal_coke"]
    },
    {
        "processingTime": 300,
        "requireEnergyPerTick": 10,
        "requireItem": ["20x minecraft:sugar"],
        "produceItem": ["12x malum:charcoal_fragment"]
    }
]
    recipes.forEach((recipe) => {
       pyrolyseOvenFunction(e,recipe)
    });
});
