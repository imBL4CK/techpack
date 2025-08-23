ServerEvents.recipes(event =>{
    //Research Table
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "RKG",
            "SAS",
            "WBW"
        ],
        reagents: "flel",
        key: {
            W: {item: "kubejs:wooden_board"},
            B: {item: "eidolon:worktable"},
            S: {item: "minecraft:bookshelf"},
            A: {item: "forbidden_arcanus:arcane_crystal"},
            K: {item: "minecraft:book"},
            R: {item: "forbidden_arcanus:ender_pearl_fragment"},
            G: {item: "ars_nouveau:source_gem"},
            l: {item: "kubejs:empty_arcane_runic_slate"},
            e: {item: "ars_nouveau:source_gem"},
            f: {item: "eidolon:magic_ink"}
        },
        result:{ item: 
            "eidolon:research_table"
        },
        id: 'eidolon_worktable:eidolon/research_table'
    })
    //Crucible
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "P P",
            "IGI",
            "PIP"
        ],
        reagents: " sas",
        key: {
            P: {tag: "forge:plates/pewter"},
            G: {item: "eidolon:soul_shard"},
            I: {item: "eidolon:pewter_inlay"},
            s: {item: "ars_nouveau:source_gem"},
            a: {tag: 'forge:dusts/arcane_crystal'}
        },
        result:{ item: 
            "eidolon:crucible"
        },
        id: 'eidolon_worktable:eidolon/crucible'
    })
    //Crude Scythe
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "FFI",
            "USF",
            "SGF"
        ],
        reagents: "sroi",
        key: {
            F: {tag: "forge:plates/ferrous_pewter"},
            G: {item: "eidolon:soul_shard"},
            S: {item: "minecraft:stick"},
            I: {item: "eidolon:pewter_inlay"},
            U: {item: "ars_nouveau:source_gem"},
            i: {item: "eidolon:pewter_inlay"},
            r: {item: "kubejs:empty_arcane_runic_slate"},
            a: {tag: 'forge:dusts/arcane_crystal'},
            o: {item: "malum:processed_soulstone"},
            s: {item: "forbidden_arcanus:soul"}
        },
        result:{ item: 
            "malum:crude_scythe"
        },
        id: 'eidolon_worktable:malum/crude_scythe'
    })
    //Arcane Chiseled Darkstone
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "DDD",
            "DED",
            "DDD"
        ],
        reagents: "rara",
        key: {
            D: {item: "forbidden_arcanus:darkstone"},
            E: {tag: "forge:ingots/deorum"},
            i: {item: "eidolon:pewter_inlay"},
            r: {item: "forbidden_arcanus:rune"},
            a: {tag: "forge:dusts/arcane_crystal"},
        },
        result:{ item: 
            "forbidden_arcanus:arcane_chiseled_darkstone"
        },
        id: 'eidolon_worktable:forbidden_arcanus/arcane_chiseled_darkstone'
    })
    //Sacrificial Bowl
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "P P",
            "OSO",
            "OOO"
        ],
        reagents: "apsp",
        key: {
            P: {tag: "forge:plates/ferrous_pewter"},
            O: {item: "occultism:otherstone"},
            S: {item: "occultism:spirit_attuned_gem"},
            a: {item: "forbidden_arcanus:rune"},
            p: {item: "eidolon:pewter_inlay"},
            s: {item: "eidolon:lesser_soul_gem"},
        },
        result:{ item: 
            "occultism:sacrificial_bowl"
        },
        id: 'eidolon_worktable:occultism/sacrificial_bowl'
    })
    //Impure White Chalk
    event.custom({
        type: "eidolon:worktable",
        pattern: [
            "   ",
            "BA ",
            "BA "
        ],
        reagents: "gsps",
        key: {
            B: {item: "occultism:burnt_otherstone"},
            A: {item: "occultism:otherworld_ashes"},
            p: {item: "eidolon:pewter_inlay"},
            s: {item: "eidolon:lesser_soul_gem"},
            g: {item: "eidolon:gold_inlay"},
        },
        result:{ item: 
            "occultism:chalk_white_impure"
        },
        id: 'eidolon_worktable:occultism/chalk_white_impure'
    })
})
ServerEvents.recipes(e => {
    let recipeId = ['eidolon:worktable/']
    const recipes = [
      //Imbuement Chamber
      {
        pattern: ["GTG", "PAP", "GLG"],
        reagents: "s   ",
        key: {
          G: { tag: "forge:plates/gold" },
          L: { tag: "forge:glass" },
          P: { item: "ars_nouveau:archwood_planks" },
          A: { tag: "forge:gems/amethyst" },
          T: { item: "occultism:spirit_attuned_gem" },
          s: { item: "ars_nouveau:source_gem" },
        },
        result: {
          item: "ars_nouveau:imbuement_chamber",
        },
        id: recipeId + "imbuement_chamber",
      },
      //Petal Apothecary Default
      {
        pattern: ["CRC", " C ", "CCC"],
        reagents: "p   ",
        key: {
          C: { tag: "forge:cobblestone" },
          R: { item: "kubejs:empty_arcane_runic_slate" },
          p: { tag: "botania:petals" },
        },
        result: {
          item: "botania:apothecary_default",
        },
        id: recipeId + "apothecary_default",
      },
      //Petal Apothecary Forest
      {
        pattern: ["SRS", " S ", "SSS"],
        reagents: "p   ",
        key: {
          S: { item: "botania:metamorphic_forest_cobblestone" },
          R: { item: "kubejs:empty_arcane_runic_slate" },
          p: { tag: "botania:petals" },
        },
        result: {
          item: "botania:apothecary_forest",
        },
        id: recipeId + "apothecary_forest",
      },
      //Petal Apothecary Plains
      {
        pattern: ["SRS", " S ", "SSS"],
        reagents: "p   ",
        key: {
          S: { item: "botania:metamorphic_plains_cobblestone" },
          R: { item: "kubejs:empty_arcane_runic_slate" },
          p: { tag: "botania:petals" },
        },
        result: {
          item: "botania:apothecary_plains",
        },
        id: recipeId + "apothecary_plains",
      },
      //Petal Apothecary Mountain
      {
        pattern: ["SRS", " S ", "SSS"],
        reagents: "p   ",
        key: {
          S: { item: "botania:metamorphic_mountain_cobblestone" },
          R: { item: "kubejs:empty_arcane_runic_slate" },
          p: { tag: "botania:petals" },
        },
        result: {
          item: "botania:apothecary_mountain",
        },
        id: recipeId + "apothecary_mountain",
      },
    ];
    recipes.forEach((recipe) => {
        e.custom({
        "type": "eidolon:worktable",
        "pattern": recipe.pattern,
        "reagents": recipe.reagents,
        "key": recipe.key,
        "result": recipe.result,
    }).id(recipe.id);
    });
})