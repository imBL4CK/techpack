import { freezerFunction } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
        {
            "processingTime": 300,
            "requireEnergyPerTick": 5,
            "requireFluid": ["1000x #techpack:coolants"],
            "requireItem": ["techpack:hot_stainless_steel_ingot"],
            "produceItem": ["techpack:stainless_steel_ingot"]
        },
        {
            "processingTime": 300,
            "requireEnergyPerTick": 5,
            "requireFluid": ["1000x #techpack:coolants"],
            "requireItem": ["techpack:hot_kanthal_ingot"],
            "produceItem": ["techpack:kanthal_ingot"]
        },
    ]
    recipes.forEach((recipe) => {
       freezerFunction(e,recipe)
    });
});
