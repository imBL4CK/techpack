import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
    //Vegetable Oil
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 1,
        "requireFluid": [{ perTick: "1x pneumaticcraft:vegetable_oil"}],
        "produceEnergy": { perTick: 200 },
        "resetOnError": true
    },
    //LPG
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 2,
        "requireFluid": [{ perTick: "1x pneumaticcraft:lpg"}],
        "produceEnergy": { perTick: 400 },
        "resetOnError": true
    },
    //Ethanol
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 3,
        "requireFluid": [{ perTick: "1x pneumaticcraft:ethanol"}],
        "produceEnergy": { perTick: 400 },
        "resetOnError": true
    },
    //Gasoline
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 4,
        "requireFluid": [{ perTick: "1x pneumaticcraft:gasoline"}],
        "produceEnergy": { perTick: 420 },
        "resetOnError": true
    },
    //Benzene
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 5,
        "requireFluid": [{ perTick: "1x techpack:benzene"}],
        "produceEnergy": { perTick: 460 },
        "resetOnError": true
    },
    //Kerosene
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 6,
        "requireFluid": [{ perTick: "1x pneumaticcraft:kerosene"}],
        "produceEnergy": { perTick: 480 },
        "resetOnError": true
    },
    //BioDiesel
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 7,
        "requireFluid": [{ perTick: "1x pneumaticcraft:biodiesel"}],
        "produceEnergy": { perTick: 480 },
        "resetOnError": true
    },
    //Diesel
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 8,
        "requireFluid": [{ perTick: "1x pneumaticcraft:diesel"}],
        "produceEnergy": { perTick: 500 },
        "resetOnError": true
    },
    //Organic Oil
    {
        "machineType": "techpack:basic_combustion_engine",
        "processingTime": 20,
        "jeiDisplayPriority": 10,
        "requireFluid": [{ perTick: "2x techpack:organic_oil"}],
        "produceEnergy": { perTick: 300 },
        "resetOnError": true
    },
]
recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});