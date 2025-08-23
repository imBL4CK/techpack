ServerEvents.lowPriorityData(e => {
    //Elder Miner's Pickaxe
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/elder_miners_pickaxe', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 200,
            "blood": 0,
            "experience": 1000,
            "souls": 15
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:malignant_pewter_plating"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:warp_flux"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:astral_weave"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:infernal_spirit"
            }
        }
        ],
        "magic_circle": {
          "inner_texture": "forbidden_arcanus:textures/effect/magic_circle/inner/origin.png",
          "outer_texture": "forbidden_arcanus:textures/effect/magic_circle/outer/pure.png"
        },
        "main_ingredient": {
            "item": "eidolon:reversal_pick"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "kubejs:elder_miners_pickaxe"
            }
        }
    })
    //Edge of Deliverance
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/edge_of_deliverance', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:maledictus_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 200,
            "blood": 1500,
            "experience": 1000,
            "souls": 10
        },
        "inputs": [
            {
                "amount": 3,
                "ingredient": {
                    "item": "malum:malignant_pewter_plating"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "malum:complete_design"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "malum:poppet"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "malum:living_flesh"
                }
            }
        ],
        "main_ingredient": {
            "item": "eidolon:reaper_scythe"
        },
        "magic_circle": "forbidden_arcanus:malum_scary_ritual",
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:edge_of_deliverance"
            }
        }
    })
    //Weight of Worlds
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/weight_of_worlds', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:maledictus_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 200,
            "blood": 1000,
            "experience": 1000,
            "souls": 15
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:malignant_pewter_plating"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:complete_design"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:gold_inlay"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:magicians_wax"
            }
        }
    ],
        "main_ingredient": {
            "item": "eidolon:cleaving_axe"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:weight_of_worlds"
            }
        }
    })
    //Maligant Stronghold Helmet
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/maligant_stronghold_helmet', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 500,
            "blood": 0,
            "experience": 500,
            "souls": 5
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:malignant_pewter_plating"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:mnemonic_fragment"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:gold_inlay"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:shadow_gem"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:soul_stained_steel_helmet"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:malignant_stronghold_helmet"
            }
        }
    })
    //Maligant Stronghold Chestplate
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/maligant_stronghold_chestplate', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 500,
            "blood": 0,
            "experience": 500,
            "souls": 5
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:malignant_pewter_plating"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:mnemonic_fragment"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:gold_inlay"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:shadow_gem"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:soul_stained_steel_chestplate"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:malignant_stronghold_chestplate"
            }
        }
    })
    //Maligant Stronghold Leggings
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/maligant_stronghold_leggings', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 500,
            "blood": 0,
            "experience": 500,
            "souls": 5
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:malignant_pewter_plating"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:mnemonic_fragment"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:gold_inlay"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:shadow_gem"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:soul_stained_steel_leggings"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:malignant_stronghold_leggings"
            }
        }
    })
    //Maligant Stronghold Boots
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/maligant_stronghold_boots', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 3
        },
        "essences": {
            "aureal": 500,
            "blood": 0,
            "experience": 500,
            "souls": 5
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "malum:malignant_pewter_plating"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:mnemonic_fragment"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:gold_inlay"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:shadow_gem"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:soul_stained_steel_boots"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:malignant_stronghold_boots"
            }
        }
    })
    //Spirit Crucible
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/spirit_crucible', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:artisan_relic"
            ],
            "forge_tier": 2
        },
        "essences": {
            "aureal": 100,
            "blood": 0,
            "experience": 100,
            "souls": 0
        },
        "inputs": [
        {
            "amount": 2,
            "ingredient": {
                "item": "malum:twisted_rock"
            }
        },
        {
            "amount": 2,
            "ingredient": {
                "item": "malum:tainted_rock"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:ether"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:complete_design"
            }
        }
    ],
        "main_ingredient": {
            "item": "minecraft:blast_furnace"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:spirit_crucible"
            }
        }
    })
    //Spirit Catalyzer
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/spirit_catalyzer', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:artisan_relic"
            ],
            "forge_tier": 2
        },
        "essences": {
            "aureal": 100,
            "blood": 0,
            "experience": 100,
            "souls": 0
        },
        "inputs": [
        {
            "amount": 2,
            "ingredient": {
                "item": "malum:twisted_rock"
            }
        },
        {
            "amount": 2,
            "ingredient": {
                "item": "malum:tainted_rock"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:ether"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:twisted_rock_item_pedestal"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "malum:spirit_catalyzer"
            }
        }
    })
    //Eternal Stella
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/eternal_stella', {
        "additional_requirements": {
            "forge_tier": 4
        },
        "essences": {
            "aureal": 500,
            "blood": 1000,
            "experience": 1000,
            "souls": 20
        },
        "inputs": [
        {
            "amount": 3,
            "ingredient": {
                "item": "forbidden_arcanus:xpetrified_orb"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "forbidden_arcanus:stellarite_piece"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:malignant_lead"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:astral_weave"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:fused_consciousness"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "forbidden_arcanus:eternal_stella"
            }
        }
    })
    //Mana Tablet
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/mana_tablet', {
        "additional_requirements": {
            "forge_tier": 2
        },
        "essences": {
            "aureal": 500,
            "blood": 1000,
            "experience": 1000,
            "souls": 20
        },
        "inputs": [
        {
            "amount": 4,
            "ingredient": {
                "item": "botania:livingrock"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:complete_design"
            }
        }
    ],
        "main_ingredient": {
            "item": "botania:mana_diamond"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "botania:mana_tablet"
            }
        }
    })
    //upgrade altar to tier 2
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/upgrade_tier_2', {
        "essences": {
          "aureal": 500,
          "blood": 1000,
          "experience": 0,
          "souls": 5
        },
        "inputs": [
          {
            "amount": 4,
            "ingredient": {
              "item": "forbidden_arcanus:spawner_scrap"
            }
          },
          {
            "amount": 1,
            "ingredient": {
              "item": "malum:poppet"
            }
          },
          {
            "amount": 1,
            "ingredient": {
              "item": "malum:spectral_optic"
            }
          },
          {
            "amount": 2,
            "ingredient": {
              "tag": "hexerei:herbs"
            }
          }
        ],
        "magic_circle": {
          "inner_texture": "forbidden_arcanus:textures/effect/magic_circle/inner/origin.png",
          "outer_texture": "forbidden_arcanus:textures/effect/magic_circle/outer/pure.png"
        },
        "main_ingredient": {
          "item": "kubejs:basic_circuit"
        },
        "result": {
          "type": "forbidden_arcanus:upgrade_tier",
          "required_tier": 1,
          "upgraded_tier": 2
        }
    })
    //upgrade altar to tier 3
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/upgrade_tier_3', {
    "essences": {
        "aureal": 1000,
        "blood": 3000,
        "experience": 500,
        "souls": 10
    },
    "inputs": [
        {
        "amount": 1,
        "ingredient": {
            "item": "kubejs:magic_mirror_research_page"
        }
        },
        {
        "amount": 1,
        "ingredient": {
            "item": "malum:astral_weave"
        }
        },
        {
        "amount": 1,
        "ingredient": {
            "item": "malum:warp_flux"
        }
        },
        {
        "amount": 1,
        "ingredient": {
            "item": "malum:grim_talc"
        }
        },
        {
        "amount": 1,
        "ingredient": {
            "item": "malum:rotting_essence"
        }
        },
        {
        "amount": 1,
        "ingredient": {
            "item": "kubejs:overworld_science_mix"
        }
        },
    ],
    "magic_circle": {
        "inner_texture": "forbidden_arcanus:textures/effect/magic_circle/inner/origin.png",
        "outer_texture": "forbidden_arcanus:textures/effect/magic_circle/outer/pure.png"
    },
    "main_ingredient": {
        "item": "pneumaticcraft:printed_circuit_board"
    },
    "result": {
        "type": "forbidden_arcanus:upgrade_tier",
        "required_tier": 2,
        "upgraded_tier": 3
    }
    })
    //upgrade altar to tier 4
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/upgrade_tier_4', {
    "essences": {
        "aureal": 0,
        "blood": 0,
        "experience": 0,
        "souls": 0
    },
    "inputs": [
        {
        "amount": 8,
        "ingredient": {
            "item": "minecraft:barrier"
        }
        }
    ],
    "magic_circle": {
        "inner_texture": "forbidden_arcanus:textures/effect/magic_circle/inner/origin.png",
        "outer_texture": "forbidden_arcanus:textures/effect/magic_circle/outer/pure.png"
    },
    "main_ingredient": {
        "item": "minecraft:barrier"
    },
    "result": {
        "type": "forbidden_arcanus:upgrade_tier",
        "required_tier": 3,
        "upgraded_tier": 4
    }
    })
    //upgrade altar to tier 4
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/upgrade_tier_5', {
    "essences": {
        "aureal": 0,
        "blood": 0,
        "experience": 0,
        "souls": 0
    },
    "inputs": [
        {
        "amount": 8,
        "ingredient": {
            "item": "minecraft:barrier"
        }
        }
    ],
    "magic_circle": {
        "inner_texture": "forbidden_arcanus:textures/effect/magic_circle/inner/origin.png",
        "outer_texture": "forbidden_arcanus:textures/effect/magic_circle/outer/pure.png"
    },
    "main_ingredient": {
        "item": "minecraft:barrier"
    },
    "result": {
        "type": "forbidden_arcanus:upgrade_tier",
        "required_tier": 4,
        "upgraded_tier": 5
    }
    })
    //Spectral Eye Amulet
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/spectral_eye_amulet', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 4
        },
        "essences": {
            "aureal": 3000,
            "blood": 1000,
            "experience": 2000,
            "souls": 15
        },
        "inputs": [
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:spectral_optic"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "forbidden_arcanus:deorum_ingot"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "eidolon:holy_symbol"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "supplementaries:rope"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "malum:poppet"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "botania:life_essence"
            }
        }
        ],
        "magic_circle": {
          "inner_texture": "forbidden_arcanus:textures/effect/magic_circle/inner/origin.png",
          "outer_texture": "forbidden_arcanus:textures/effect/magic_circle/outer/pure.png"
        },
        "main_ingredient": {
            "item": "minecraft:nether_star"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "forbidden_arcanus:spectral_eye_amulet"
            }
        }
    })
    //Mana Pool
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/mana_pool', {
        "additional_requirements": {
            "forge_tier": 2
        },
        "essences": {
            "aureal": 500,
            "blood": 1000,
            "experience": 1000,
            "souls": 20
        },
        "inputs": [
        {
            "amount": 5,
            "ingredient": {
                "item": "botania:livingrock"
            }
        }
    ],
        "main_ingredient": {
            "item": "malum:complete_design"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "botania:mana_pool"
            }
        }
    })
    //Flugel Tiara
    e.addJson('forbidden_arcanus:forbidden_arcanus/hephaestus_forge/ritual/flugel_tiara', {
        "additional_requirements": {
            "enhancers": [
                "forbidden_arcanus:divine_pact"
            ],
            "forge_tier": 4
        },
        "essences": {
            "aureal": 1000,
            "blood": 0,
            "experience": 1000,
            "souls": 3
        },
        "inputs": [
        {
            "amount": 4,
            "ingredient": {
                "item": "botania:life_essence"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "botania:elementium_ingot"
            }
        },
        {
            "amount": 1,
            "ingredient": {
                "item": "botania:ender_air_bottle"
            }
        }
    ],
        "main_ingredient": {
            "item": "magicfeather:magic_feather"
        },
        "result": {
            "type": "forbidden_arcanus:create_item",
            "result_item": {
                "Count": 1,
                "id": "botania:flight_tiara"
            }
        }
    })
})