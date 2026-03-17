import { freezerFunction } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
        {
            "processingTime": 300,
            "requireEnergyPerTick": 100,
            "requireFluid": ["1000x #techpack:coolants"],
            "requireItem": ["techpack:hot_stainless_steel_ingot"],
            "produceItem": ["techpack:stainless_steel_ingot"]
        },
        {
            "processingTime": 300,
            "requireEnergyPerTick": 100,
            "requireFluid": ["1000x #techpack:coolants"],
            "requireItem": ["techpack:hot_kanthal_ingot"],
            "produceItem": ["techpack:kanthal_ingot"]
        },
        {
            "processingTime": 300,
            "requireEnergyPerTick": 500,
            "requireFluid": ["100x techpack:below_zero_coolant"],
            "requireItem": ["techpack:hot_uranium_ingot"],
            "produceItem": ["techpack:uranium_ingot"]
        },
        {
            "processingTime": 300,
            "requireEnergyPerTick": 500,
            "requireFluid": ["100x techpack:below_zero_coolant"],
            "requireItem": ["techpack:hot_calorite_ingot"],
            "produceItem": ["techpack:calorite_ingot"]
        },
        {
            "processingTime": 300,
            "requireEnergyPerTick": 500,
            "requireFluid": ["100x techpack:below_zero_coolant"],
            "requireItem": ["techpack:hot_flux_infused_alloy_ingot"],
            "produceItem": ["techpack:flux_infused_alloy_ingot"]
        },
        {
            "processingTime": 300,
            "requireEnergyPerTick": 1000,
            "requireFluid": ["100x techpack:below_zero_coolant"],
            "requireItem": ["techpack:hot_stellarithe_ingot"],
            "produceItem": ["techpack:stellarithe_ingot"]
        }
    ]
    recipes.forEach((recipe) => {
       freezerFunction(e,recipe)
    });
});
