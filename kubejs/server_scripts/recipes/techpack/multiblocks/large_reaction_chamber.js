import { largeReactionChamber } from "./techpack_multiblockAPI"; 

ServerEvents.recipes(e => {
    const recipes = [
        {
            "processingTime": 300,
            "requireEnergyPerTick": 5,
            "requireFluid": ["2000x techpack:ethylene", "4000x techpack:fluorine"],
            "produceFluid": ["6000x techpack:tetrafluoroethylene"]
        },
        {
            "processingTime": 600,
            "requireEnergyPerTick": 5,
            "requireFluid": ["8000x techpack:tetrafluoroethylene", "8000x stellaris:oxygen"],
            "produceFluid": ["16000x techpack:polytetrafluoroethylene"]
        },
    ]
    recipes.forEach((recipe) => {
       largeReactionChamber(e,recipe)
    });
});
