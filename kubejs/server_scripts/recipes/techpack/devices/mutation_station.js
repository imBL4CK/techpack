import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:mutation_station",
            "processingTime": 1200,
            "damageItem": [
                { item: "techpack:cavernous_bee_princess", damage: 1, chance: 0.2 },
                { item: "techpack:magical_bee_drone", damage: 1, chance: 0.2 },
            ],
            "produceItem": [
                { item: "techpack:jewelry_bee_drone", chance: 0.3 },
                { item: "techpack:jewelry_bee_queen", chance: 0.1 },
            ],
            "needsSky": true
        }
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});