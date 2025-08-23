ServerEvents.recipes(event =>{
    let id = 'eidolon:crucible/';
    //Empty Arcane Runic Slate
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "minecraft:obsidian"},
                ],
            },
            {items:[
                {item: "forbidden_arcanus:rune"},
                ],
                stirs: 1
            },
            {items:[
                {item: "forbidden_arcanus:mundabitur_dust"},
                ],
                stirs: 2
            },
        ],
        result:{
            item: "kubejs:empty_arcane_runic_slate"
        },
        id: 'kubejs:empty_arcane_runic_slate'
    }).id(id+'empty_arcane_runic_slate')
    //Mundabitur Dust
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:dusts/arcane_crystal"}
                ],
            }, 
            {items:[
                {tag: "forge:dusts/redstone"},
                {item: "minecraft:blaze_powder"}
                ],
                stirs: 1
            },
            {items:[
                {item: "minecraft:bone_meal"},
                {item: "minecraft:phantom_membrane"},
                {tag: "forge:gunpowder"}
                ],
                stirs: 1
            },
        ],
        result: {
            item: "forbidden_arcanus:mundabitur_dust",
            count: 4
        },
        id: 'forbidden_arcanus:mundabitur_dust'
    }).id(id+'mundabitur_dust')
    //Deorum Dust
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:dusts/gold"}
                ],
            }, 
            {items:[
                {item: "minecraft:charcoal"},
                {item: "minecraft:charcoal"}
                ],
                stirs: 1
            }, 
            {items:[
                {tag: "forge:dusts/arcane_crystal"},
                {tag: "forge:dusts/arcane_crystal"}
                ],
                stirs: 1
            }, 
            {items:[
                {tag: "forge:dusts/mundabitur"},
                {tag: "forge:dusts/mundabitur"}
                ],
                stirs: 1
            },
        ],
        result: {
            item: "kubejs:deorum_dust",
            count: 4
        },
        id: 'forbidden_arcanus:deorum_dust'
    }).id(id+'deorum_dust')
    //Golden Sacrificial Bowl
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "occultism:sacrificial_bowl"},
                ],
            },
            {items:[
                {tag: "forge:dusts/gold"},
                ],
                stirs: 1
            }
        ],
        result:{
            item: "occultism:golden_sacrificial_bowl"
        },
        id: 'occultism:golden_sacrificial_bowl'
    }).id(id+'golden_sacrificial_bowl')
    //Aluminum Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:ingots/aluminum"},
                {tag: "forge:ingots/aluminum"},
                {tag: "forge:ingots/aluminum"}
                ],
            },
            {items:[
                {item: "kubejs:empty_alchemy_jar"},
                ],
                stirs: 1
            }
        ],
        result:{
            item: "kubejs:aluminum_reagent"
        },
    }).id(id+'aluminum_reagent')
    //Copper Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "forge:ingots/copper"},
                {tag: "forge:ingots/copper"},
                {tag: "forge:ingots/copper"}
                ],
            },
            {items:[
                {item: "kubejs:empty_alchemy_jar"},
                ],
                stirs: 1
            }
        ],
        result:{
            item: "kubejs:copper_reagent"
        },
    }).id(id+'copper_reagent')
    //Aluminum Brass Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "kubejs:aluminum_reagent"},
                {item: "kubejs:aluminum_reagent"},
                {item: "kubejs:aluminum_reagent"}
                ],
            },
            {items:[
                {item: "kubejs:copper_reagent"}
                ],
                stirs: 1
            }
        ],
        result:{
            item: "kubejs:aluminum_brass_reagent"
        },
    }).id(id+'aluminum_brass_reagent')
    //Arcanite alloy Reagent
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {item: "kubejs:aluminum_brass_reagent"},
                {item: "kubejs:ferrous_pewter_reagent"},
                {item: "kubejs:deorum_reagent"},
                {item: "kubejs:amethyst_reagent"}
                ],
            }
        ],
        result:{
            item: "kubejs:arcanite_alloy_reagent"
        },
    }).id(id+'arcanite_alloy_reagent')
    //Blue Archwood Sapling
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "minecraft:saplings"},
                {item: "ars_nouveau:water_essence"}
                ],
            }
        ],
        result:{
            item: "ars_nouveau:blue_archwood_sapling"
        },
    }).id(id+'blue_archwood_sapling')
    //Red Archwood
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "minecraft:saplings"},
                {item: "ars_nouveau:fire_essence"}
                ],
            }
        ],
        result:{
            item: "ars_nouveau:red_archwood_sapling"
        },
    }).id(id+'red_archwood_sapling')
    //Purple Archwood
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "minecraft:saplings"},
                {item: "ars_nouveau:air_essence"}
                ],
            }
        ],
        result:{
            item: "ars_nouveau:purple_archwood_sapling"
        },
    }).id(id+'purple_archwood_sapling')
    //Green Archwood
    event.custom({
        type: "eidolon:crucible",
        steps: [
            {items:[
                {tag: "minecraft:saplings"},
                {item: "ars_nouveau:earth_essence"}
                ],
            }
        ],
        result:{
            item: "ars_nouveau:green_archwood_sapling"
        },
    }).id(id+'green_archwood_sapling')
})