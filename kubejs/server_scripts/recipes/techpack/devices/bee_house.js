 import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(0,11999)",
            "damageItem": [
                { item: "techpack:common_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:common_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:common_bee_drone", chance: 0.3 },
                { item: "techpack:common_bee_queen", chance: 0.1 }
            ],
            "needsSky": true
        },
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(0,11999)",
            "damageItem": [
                { item: "techpack:boreal_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:boreal_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:boreal_bee_drone", chance: 0.3 },
                { item: "techpack:boreal_bee_queen", chance: 0.1 }
            ],
            "needsSky": true
        },
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(0,23999)",
            "damageItem": [
                { item: "techpack:fossil_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:fossil_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:fossil_bee_drone", chance: 0.3 },
                { item: "techpack:fossil_bee_queen", chance: 0.1 }
            ],
            "requireDimension": "minecraft:the_nether",
            "needsSky": true
        },
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(0,23999)",
            "damageItem": [
                { item: "techpack:enigmatic_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:enigmatic_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:enigmatic_bee_drone", chance: 0.3 },
                { item: "techpack:enigmatic_bee_queen", chance: 0.1 }
            ],
            "requireDimension": "minecraft:the_end",
            "needsSky": true
        },
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(11999,23999)",
            "damageItem": [
                { item: "techpack:cavernous_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:cavernous_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:cavernous_bee_drone", chance: 0.3 },
                { item: "techpack:cavernous_bee_queen", chance: 0.1 }
            ],
            "requirePosition": {
                x: "", 
                y: "(-54,40)", 
                z: ""
            },
        },
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(11999,23999)",
            "damageItem": [
                { item: "techpack:magical_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:magical_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:magical_bee_drone", chance: 0.3 },
                { item: "techpack:magical_bee_queen", chance: 0.1 }
            ],
            "needsSky": true
        },
        {
            "machineType": "techpack:bee_house",
            "processingTime": 2400,
            "requireTime": "(0,11999)",
            "damageItem": [
                { item: "techpack:jewelry_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:jewelry_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:jewelry_bee_drone", chance: 0.3 },
                { item: "techpack:jewelry_bee_queen", chance: 0.1 }
            ],
            "needsSky": true
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});