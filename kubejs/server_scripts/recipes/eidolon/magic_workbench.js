ServerEvents.recipes((e) => {
  let recipeId = ["eidolon:worktable/"];

  const recipes = [
    //Research Table
    {
      pattern: [" M ", "CCC", "PPP"],
      reagents: "d   ",
      key: {
        d: { tag: "forge:gems/diamond" },
        M: { item: "eidolon:magic_candle" },
        C: { item: "minecraft:red_carpet" },
        P: { item: "malum:runewood_planks" },
      },
      result: { item: "eidolon:research_table" },
      id: "eidolon/research_table",
    },
    //Brazier
    {
      pattern: ["PPP", " C ", "R R"],
      reagents: "s   ",
      key: {
        s: { item: "malum:arcane_spirit" },
        P: { tag: "forge:ingots/pewter" },
        C: { tag: "forge:storage_blocks/coal" },
        R: { item: "malum:runewood_item_pedestal" },
      },
      result: { item: "eidolon:brazier" },
      id: "eidolon/brazier",
    },
    //Spirit Altar
    {
      type: "eidolon:worktable",
      pattern: [" O ", "GWG", "WMW"],
      reagents: "s   ",
      key: {
        s: { item: "malum:arcane_spirit" },
        O: { item: "malum:processed_soulstone" },
        G: { tag: "forge:plates/gold" },
        W: { item: "malum:runewood_planks" },
        M: { item: "kubejs:makeshift_mechanism" },
      },
      result: { item: "malum:spirit_altar" },
      id: "malum/spirit_altar",
    },
    //Pickaxe of Inversion
    {
      pattern: ["OCO", " S ", " I "],
      reagents: "pmtw",
      key: {
        p: { item: "malum:soul_stained_steel_pickaxe" },
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        t: { item: "malum:poppet" },
        w: { item: "malum:warp_flux" },
        O: { item: "forbidden_arcanus:obsidian_ingot" },
        C: { item: "minecraft:crying_obsidian" },
        S: { item: "malum:spectral_optic" },
        I: { item: "eidolon:pewter_inlay" },
      },
      result: { item: "eidolon:reversal_pick" },
      id: "eidolon/pickaxe_of_inversion",
    },
    //Petal Apothecary Default
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "minecraft:stone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_default" },
      id: "botania/apothecary_default",
    },
    //Petal Apothecary Forest
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_forest_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_forest" },
      id: "botania/apothecary_forest",
    },
    //Petal Apothecary Plains
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_plains_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_plains" },
      id: "botania/apothecary_plains",
    },
    //Petal Apothecary Mountain
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_mountain_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_mountain" },
      id: "botania/apothecary_mountain",
    },
    //Petal Apothecary Fungal
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_fungal_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_fungal" },
      id: "botania/apothecary_fungal",
    },
    //Petal Apothecary Swamp
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_swamp_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_swamp" },
      id: "botania/apothecary_swamp",
    },
    //Petal Apothecary Desert
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_desert_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_desert" },
      id: "botania/apothecary_desert",
    },
    //Petal Apothecary Taiga
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_taiga_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_taiga" },
      id: "botania/apothecary_taiga",
    },
    //Petal Apothecary Mesa
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:metamorphic_mesa_cobblestone" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_mesa" },
      id: "botania/apothecary_mesa",
    },
    //Petal Apothecary Mossy
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { tag: "forge:cobblestone/mossy" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_mossy" },
      id: "botania/apothecary_mossy",
    },
    //Petal Apothecary Livingrock
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "botania:livingrock" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_livingrock" },
      id: "botania/apothecary_livingrock",
    },
    //Petal Apothecary Deepslate
    {
      pattern: ["SPS", " S ", "SSS"],
      reagents: "mloc",
      key: {
        m: { item: "forbidden_arcanus:mundabitur_dust" },
        l: { item: "malum:malignant_lead" },
        o: { item: "eidolon:offering_incense" },
        c: { item: "create:chromatic_compound" },
        S: { item: "minecraft:deepslate" },
        P: { tag: "botania:petals" },
      },
      result: { item: "botania:apothecary_deepslate" },
      id: "botania/apothecary_deepslate",
    },
    //Brass Wand Cap
    {
      pattern: [" P ", "P P", " P "],
      reagents: "asss",
      key: {
        P: { tag: "forge:plates/brass" },
        a: { item: "eidolon:magicians_wax" },
        s: { item: "malum:arcane_spirit" },
      },
      result: { item: "kubejs:brass_wand_cap" },
      id: "techlab/brass_wand_cap",
    },
    //Brass Wand
    {
      pattern: ["  C", " W ", "C  "],
      reagents: "r   ",
      key: {
        C: { item: "kubejs:brass_wand_cap" },
        W: { item: "kubejs:runewood_wand" },
        r: { item: "kubejs:brass_wand_research_page" },
      },
      result: { item: "kubejs:brass_wand" },
      id: "techlab/brass_wand",
    },
    //Soul Stained Wand Cap
    {
      pattern: [" P ", "P P", " P "],
      reagents: "asss",
      key: {
        P: { item: "malum:soul_stained_steel_plating" },
        a: { item: "eidolon:magicians_wax" },
        s: { item: "malum:arcane_spirit" },
      },
      result: { item: "kubejs:soul_stained_steel_wand_cap" },
      id: "techlab/soul_stained_steel_wand_cap",
    },
    //Soul Stained Wand
    {
      pattern: ["  C", " W ", "C  "],
      reagents: "r   ",
      key: {
        C: { item: "kubejs:soul_stained_steel_wand_cap" },
        W: { item: "kubejs:brass_wand" },
        r: { item: "kubejs:magic_mirror_research_page" },
      },
      result: { item: "kubejs:soul_stained_steel_wand" },
      id: "techlab/soul_stained_steel_wand",
    },
    //Research Table
    {
      pattern: [" F ", " A ", "   "],
      reagents: "p   ",
      key: {
        F: { tag: "forge:feathers" },
        A: { item: "eidolon:wooden_altar" },
        p: { item: "eidolon:pewter_inlay" },
      },
      result: {
        item: "custommachinery:custom_machine_item",
        nbt: { machine: "custommachinery:industrialrevival/research_table" },
      },
      id: "techlab_machines/research_table",
    },
    //Divine Pact
    {
      pattern: ["   ", " H ", "   "],
      reagents: "im q",
      key: {
        H: { item: "eidolon:holy_symbol"},
        i: { item: "eidolon:gold_inlay" },
        m: { item: "eidolon:magicians_wax" },
        q: { tag: "forge:gems/quartz" },
      },
      result: {
        item: "forbidden_arcanus:divine_pact"
      },
      id: "forbidden_arcanus/divine_pact",
    },
    //Gravity Belt
    {
      pattern: [" E ", "FBF", " C "],
      reagents: "ripi",
      key: {
        E: { tag: "forge:ender_pearls" },
        F: { tag: "forge:feathers" },
        B: { item: "eidolon:basic_belt" },
        C: { item: "malum:complete_design" },
        r: { item: "kubejs:gravity_belt_research_page" },
        i: { item: "eidolon:pewter_inlay" },
        p: { item: "malum:poppet" }
      },
      result: {
        item: "eidolon:gravity_belt"
      },
      id: "eidolon/gravity_belt",
    },
  ];
  recipes.forEach((recipe) => {
    e.custom({
      type: "eidolon:worktable",
      pattern: recipe.pattern,
      reagents: recipe.reagents,
      key: recipe.key,
      result: recipe.result,
    }).id(`${recipeId}${recipe.id}`);
  });
});
