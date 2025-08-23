ServerEvents.lowPriorityData(event => {
    //Mana Pool
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/mana_pool', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 100,
            "blood": 0,
            "experience": 1000,
            "souls": 3
        },
        "inputs": [
            {
                "amount": 3,
                "ingredient": {
                    "item": "botania:livingrock"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "forbidden_arcanus:carved_edelwood_log"
                }
            }
        ],
        "main_ingredient": {
            "item": "eidolon:holy_symbol"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "botania:mana_pool"
            }
        }
    })
    //Enchanting Apparatus
    event.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/enchanting_apparatus', {
        "additional_requirements": {
            "forge_tier": 1
        },
        "essences": {
            "aureal": 100,
            "blood": 0,
            "experience": 50,
            "souls": 0
        },
        "inputs": [
            {
                "amount": 2,
                "ingredient": {
                    "tag": "forge:plates/gold",
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:sourcestone",
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ars_nouveau:archwood_planks",
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "forge:plates/aluminum_brass",
                }
            },
        ],
        "main_ingredient": {
            "item": "thermal:diamond_gear"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "ars_nouveau:enchanting_apparatus"
            }
        }
    })
})