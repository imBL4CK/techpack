import { techpackMachineAPI } from "./techpack_machineAPI"; 

ServerEvents.recipes((e) => {
    const recipes = [
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "#minecraft:flowers",
            "requireTime": "(0,11999)",
            "damageItem": [
                { item: "techpack:common_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:common_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:sweet_comb", chance: 0.5 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "needsSky": true
        },
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "minecraft:sweet_berry_bush",
            "requireTime": "(0,11999)",
            "damageItem": [
                { item: "techpack:boreal_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:boreal_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:sticky_comb", chance: 0.5 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "needsSky": true
        },
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "minecraft:nether_wart",
            "requireTime": "(0,23999)",
            "damageItem": [
                { item: "techpack:fossil_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:fossil_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:warm_comb", chance: 0.5 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "requireDimension": "minecraft:the_nether",
            "needsSky": true
        },
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "enderscape:chorus_sprouts",
            "requireTime": "(0,23999)",
            "damageItem": [
                { item: "techpack:enigmatic_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:enigmatic_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:oscillanting_comb", chance: 0.5 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "requireDimension": "minecraft:the_end",
            "needsSky": true
        },
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "nomansland:cave_weeds",
            "requireTime": "(11999,23999)",
            "damageItem": [
                { item: "techpack:cavernous_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:cavernous_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:depth_comb", chance: 0.5 },
                { item: "techpack:precious_comb", chance: 0.25 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "requirePosition": {
                x: "", 
                y: "(-54,40)", 
                z: ""
            },
        },
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "malum:strange_crystal",
            "requireTime": "(11999,23999)",
            "damageItem": [
                { item: "techpack:magical_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:magical_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:arcane_comb", chance: 0.5 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "needsSky": true
        },
        {
            "machineType": "techpack:apiary",
            "processingTime": 1200,
            "pollinate": "minecraft:amethyst_cluster",
            "requireTime": "(0,11999)",
            "damageItem": [
                { item: "techpack:jewelry_bee_drone", damage: 1, chance: 0.2 },
                { item: "techpack:jewelry_bee_queen", damage: 1, chance: 0.2 }
            ],
            "produceItem": [
                { item: "techpack:precious_comb", chance: 0.5 },
                { item: "techpack:depth_comb", chance: 0.25 },
                { item: "techpack:beewax", chance: 0.5 }
            ],
            "needsSky": true
        },
    ]
    recipes.forEach((recipe) => {
        techpackMachineAPI(e,recipe)
    });
});