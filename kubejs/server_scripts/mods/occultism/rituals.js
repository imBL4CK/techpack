ServerEvents.recipes(event => {
    let id = 'occultism/rituals/';

    //Dusk World Crystal
    event.recipes.occultism.ritual(
    'kubejs:dusk_world_crystal',
    [
        "occultism:spirit_attuned_gem",
        "eidolon:lesser_soul_gem",
        'eidolon:pewter_inlay',
        'eidolon:gold_inlay',
        'eidolon:zombie_heart',
        'eidolon:tattered_cloth',
        'forbidden_arcanus:mundabitur_dust',
        'forbidden_arcanus:arcane_crystal_dust',
    ],
    'ars_nouveau:source_gem',
    'occultism:summon_foliot'
    ).dummy('occultism:craft_miner_spirit').duration(20).id(id+'dusk_world_gem')
    //Blaze Ritual
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": 'occultism:summon',
        "activation_item": {
        "item": "supplementaries:ash"
        },
        "pentacle_id": "occultism:possess_foliot",
        "duration": 10,
        "entity_to_summon": "minecraft:blaze",
        "ritual_dummy": {
        "item": "occultism:ritual_dummy/familiar_beaver"
        },
        "ingredients": [
        {
            "item": "minecraft:netherrack"
        },
        {
            "item": "minecraft:netherrack"
        },
        {
            "item": "minecraft:netherrack"
        },
        {
            "item": "minecraft:netherrack"
        },
        {
            "item": "minecraft:blaze_powder"
        },
        {
            "item": "ars_nouveau:fire_essence"
        },
        {
            "item": "ars_nouveau:fire_essence"
        },
        {
            "item": "ars_nouveau:fire_essence"
        },
        {
            "item": "ars_nouveau:fire_essence"
        },
        {
            "item": "kubejs:orichalcum_ingot"
        },
        {
            "item": "kubejs:orichalcum_ingot"
        },
        {
            "item": "enderio:grains_of_infinity"
        },
        ],
        "result": {
        "item": "minecraft:blaze_spawn_egg",
        }
    }).id(id+'summon/blaze')
})