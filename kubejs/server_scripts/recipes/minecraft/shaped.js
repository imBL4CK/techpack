ServerEvents.recipes((e) => {
  let recipeId = ["minecraft:shaped/"];

  const recipes = [
    //Wooden Gear
    {
      result: "4x #forge:gears/wood",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#forge:plates/wood",
      },
      id: recipeId + "wood_gear",
    },
    //Wooden Gear by Planks
    {
      result: "#forge:gears/wood",
      pattern: [" W ", "W W", " W "],
      key: {
        W: "#minecraft:planks",
      },
      id: recipeId + "wood_gear_by_planks",
    },
    //Crafting Table
    {
      result: "minecraft:crafting_table",
      pattern: ["FF ", "WW ", "   "],
      key: {
        W: "#minecraft:logs",
        F: "minecraft:flint",
      },
      id: recipeId + "crafting_table",
    },
    //Furnace
    {
      result: "minecraft:furnace",
      pattern: ["CCC", "CGC", "COC"],
      key: {
        C: "#forge:cobblestone",
        G: "#forge:gears/wood",
        O: "#minecraft:coals",
      },
      id: recipeId + "furnace",
    },
    //Primitive Hammer
    {
      result: "kubejs:primitive_hammer",
      pattern: [" IS", " SI", "S  "],
      key: {
        S: "minecraft:stick",
        I: "#forge:ingots/iron",
      },
      id: recipeId + "primitive_hammer",
    },
    //Oak chest
    {
      result: "woodworks:oak_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:oak_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "oak_chest",
    },
    //Spruce chest
    {
      result: "woodworks:spruce_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:spruce_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "spruce_chest",
    },
    //Birch chest
    {
      result: "woodworks:birch_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:birch_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "birch_chest",
    },
    //Acacia chest
    {
      result: "woodworks:acacia_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:acacia_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "acacia_chest",
    },
    //Jungle chest
    {
      result: "woodworks:jungle_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:jungle_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "jungle_chest",
    },
    //Dark Oak chest
    {
      result: "woodworks:dark_oak_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:dark_oak_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "dark_oak_chest",
    },
    //Mangrove chest
    {
      result: "woodworks:mangrove_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:mangrove_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "mangrove_chest",
    },
    //Crimson chest
    {
      result: "woodworks:crimson_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:crimson_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "crimson_chest",
    },
    //Warped chest
    {
      result: "woodworks:warped_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:warped_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "warped_chest",
    },
    //Cherry chest
    {
      result: "woodworks:cherry_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "minecraft:cherry_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "cherry_chest",
    },
    //Drifwood chest
    {
      result: "upgrade_aquatic:driftwood_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "upgrade_aquatic:driftwood_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "driftwood_chest",
    },
    //River chest
    {
      result: "upgrade_aquatic:river_chest",
      pattern: ["GWG", "WBW", "GWG"],
      key: {
        W: "upgrade_aquatic:river_planks",
        G: "#forge:gears/wood",
        B: "minecraft:stone_button",
      },
      id: recipeId + "river_chest",
    },
    //Redstone Flux Coil
    {
      result: "thermal:rf_coil",
      pattern: ["GR ", " E ", " RG"],
      key: {
        E: "create:electron_tube",
        G: "#forge:plates/gold",
        R: "#forge:ingots/red_alloy",
      },
      id: recipeId + "rf_coil",
    },
    //Servo attachment
    {
      result: Item.of("thermal:servo_attachment", 2),
      pattern: ["GRG", "SIS", "PMP"],
      key: {
        G: "#forge:gears/tin",
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        I: "#forge:ingots/red_alloy",
        P: "#forge:plates/iron",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "servo_attachment",
    },
    //Electric Casing
    {
      result: "tfmg:electric_casing",
      pattern: ["CCC", "AHA", "RSR"],
      key: {
        C: "tfmg:copper_cable",
        A: "createaddition:capacitor",
        H: "tfmg:heavy_machinery_casing",
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
      },
      id: recipeId + "electric_casing",
    },
    //Electric Motor (TFMG)
    {
      result: "tfmg:electric_motor",
      pattern: ["ICP", "MES", "ICP"],
      key: {
        I: "create:industrial_iron_block",
        M: "tfmg:steel_mechanism",
        C: "tfmg:copper_cable",
        E: "tfmg:electric_casing",
        S: "create:shaft",
        P: "#forge:plates/copper",
      },
      id: recipeId + "electric_motor",
    },
    //Resistor (TFMG)
    {
      result: "tfmg:resistor",
      pattern: ["PGP", "MES", "PGP"],
      key: {
        P: "#forge:plates/lead",
        G: "#forge:gears/lead",
        M: "tfmg:steel_mechanism",
        E: "tfmg:electric_casing",
        S: "create:shaft",
      },
      id: recipeId + "resistor",
    },
    //Charger
    {
      result: "ae2:charger",
      pattern: ["FCI", "FGP", "FCI"],
      key: {
        F: "#forge:plates/iron",
        I: "#forge:plates/invar",
        C: "tfmg:electric_casing",
        G: "#forge:glass",
        P: "#forge:plates/copper",
      },
      id: recipeId + "charger",
    },
    //Copper Coil
    {
      result: "tfmg:copper_coil",
      pattern: ["WWW", "WSW", "WWW"],
      key: {
        W: "#forge:wires/copper",
        S: "#forge:ingots/steel",
      },
      id: recipeId + "copper_coil",
    },
    //Actually Casing
    {
      result: "actuallyadditions:iron_casing",
      pattern: ["HVH", "TET", "HVH"],
      key: {
        H: "tfmg:heavy_machinery_casing",
        T: "create:electron_tube",
        V: "kubejs:vaccum_tube",
        E: "tfmg:electric_casing",
      },
      id: recipeId + "iron_casing",
    },
    //Inscriber
    {
      result: "ae2:inscriber",
      pattern: ["IPI", "GCG", "EPE"],
      key: {
        I: "#forge:plates/invar",
        P: "minecraft:sticky_piston",
        G: "#forge:gears/invar",
        C: "tfmg:electric_casing",
        E: "kubejs:energized_steel_ingot",
      },
      id: recipeId + "inscriber",
    },
    //Atomic Reconstructor
    {
      result: "actuallyadditions:atomic_reconstructor",
      pattern: ["PPP", "MCL", "PGP"],
      key: {
        P: "#forge:plates/steel",
        G: "#forge:gears/steel",
        M: "tfmg:electric_motor",
        C: "actuallyadditions:iron_casing",
        L: "actuallyadditions:lens",
      },
      id: recipeId + "atomic_reconstructor",
    },
    //Basic Circuit
    {
      result: "kubejs:basic_circuit",
      pattern: ["BIC", "RSR", "VMV"],
      key: {
        B: "actuallyadditions:black_quartz",
        I: "moreminecarts:silica_steel",
        C: "actuallyadditions:basic_coil",
        R: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        V: "kubejs:vaccum_tube",
        M: "tfmg:steel_mechanism",
      },
      id: recipeId + "basic_circuit",
    },
    //iR Basic Casing
    {
      result: "kubejs:basic_machine_casing",
      pattern: ["PGP", "GVG", "PIP"],
      key: {
        P: "#forge:plates/steel",
        G: "#forge:gears/energized_steel",
        V: "kubejs:vaccum_tube",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "basic_machine_casing",
    },
    //iR Macerator
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/macerator"}'
      ),
      pattern: ["WPD", "FCF", "GBG"],
      key: {
        W: "create:crushing_wheel",
        P: "minecraft:piston",
        D: "thermal:drill_head",
        F: "minecraft:flint",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/steel",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/macerator",
    },
    //iR Compressor
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/compressor"}'
      ),
      pattern: [" M ", "PCP", "GBG"],
      key: {
        M: "create:mechanical_press",
        P: "minecraft:piston",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/compressed_iron",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/compressor",
    },
    //Lens
    {
      result: "actuallyadditions:lens",
      pattern: ["PGP", "GGG", "PGP"],
      key: {
        P: "#forge:plates/energized_steel",
        G: "#forge:glass_panes",
      },
      id: recipeId + "lens",
    },
    //Air Compressor
    {
      result: "pneumaticcraft:air_compressor",
      pattern: [" C ", "GPG", "IEI"],
      key: {
        C: "kubejs:basic_circuit",
        G: "#forge:gears/compressed_iron",
        P: "pneumaticcraft:pressure_tube",
        I: "#forge:ingots/compressed_iron",
        E: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/generator"}'
        ).weakNBT(),
      },
      id: recipeId + "air_compressor",
    },
    //iR Combustion Generator
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/generator"}'
      ),
      pattern: ["GFS", "RDR", "PBP"],
      key: {
        G: "kubejs:energized_steel_gear",
        S: "thermal:redstone_servo",
        F: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        D: "thermal:dynamo_stirling",
        P: "kubejs:energized_steel_plate",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/generator",
    },
    //Stirling Dynamo
    {
      result: "thermal:dynamo_stirling",
      pattern: [" C ", "SGS", "RBR"],
      key: {
        C: "thermal:rf_coil",
        S: "thermal:redstone_servo",
        G: "kubejs:energized_steel_gear",
        R: "pneumaticcraft:reinforced_stone",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "stirling_dynamo",
    },
    //iR Alloy Foundry
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
      ),
      pattern: ["AIA", "PCB", "RMR"],
      key: {
        A: "kubejs:advanced_alloy_plate",
        I: "tfmg:capacitor_",
        P: "actuallyadditions:powered_furnace",
        C: "kubejs:basic_circuit",
        B: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/alloy_foundry",
    },
    //AA Crusher
    {
      result: "actuallyadditions:crusher",
      pattern: ["GBG", "FCF", "GIG"],
      key: {
        G: "kubejs:energized_steel_gear",
        B: "actuallyadditions:basic_coil",
        F: "minecraft:flint",
        C: "kubejs:basic_circuit",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "actuallysubstractions/crusher",
    },
    //AA Double Crusher
    {
      result: "actuallyadditions:crusher_double",
      pattern: ["GBG", "RCR", "GIG"],
      key: {
        G: "kubejs:energized_steel_gear",
        B: "actuallyadditions:advanced_coil",
        R: "actuallyadditions:crusher",
        C: "kubejs:basic_circuit",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "actuallysubstractions/double_crusher",
    },
    //AA Powered Furnace
    {
      result: "actuallyadditions:powered_furnace",
      pattern: ["EBE", "FCF", "GIG"],
      key: {
        B: "actuallyadditions:basic_coil",
        E: "actuallyadditions:enori_crystal",
        F: "minecraft:furnace",
        C: "kubejs:basic_circuit",
        G: "kubejs:energized_steel_gear",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "actuallysubstractions/powered_furnace",
    },
    //Leather Backpack
    {
      result: "sophisticatedbackpacks:backpack",
      pattern: ["SIS", "LCL", "III"],
      key: {
        S: "#forge:string",
        I: "kubejs:industrial_leather",
        L: "minecraft:lead",
        C: "#forge:chests",
      },
      id: recipeId + "leather_backpack",
    },
    //TFMG Copper Cable wRubber
    {
      result: "tfmg:copper_cable",
      pattern: [" C ", "CSC", "RC "],
      key: {
        C: "#forge:wires/copper",
        S: "createaddition:spool",
        R: "thermal:cured_rubber",
      },
      id: recipeId + "tfmg/copper_cable_with_rubber",
    },
    //TFMG Copper Cable wPlastic
    {
      result: "tfmg:copper_cable",
      pattern: [" C ", "CSC", "RC "],
      key: {
        C: "#forge:wires/copper",
        S: "createaddition:spool",
        R: "#forge:plastic",
      },
      id: recipeId + "tfmg/copper_cable_with_plastic",
    },
    //Golden Hand
    {
      result: "kubejs:golden_hand",
      pattern: [" A ", "PPP", " P "],
      key: {
        A: "create:andesite_alloy",
        P: "#forge:plates/gold",
      },
      id: recipeId + "golden_hand",
    },
    //Fishing Basin
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/fishing_basin"}'
      ),
      pattern: ["PSP", "SFS", "PSP"],
      key: {
        P: "#minecraft:planks",
        S: "#forge:string",
        F: "minecraft:fishing_rod",
      },
      id: recipeId + "industrialrevival/fishing_basin",
    },
    //iR Metal Former
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/metal_former"}'
      ),
      pattern: ["PMP", "RCR", "OBO"],
      key: {
        P: "minecraft:piston",
        M: "create:mechanical_press",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        O: "actuallyadditions:basic_coil",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/metal_former",
    },
    //Magic Workbench
    {
      result: "eidolon:worktable",
      pattern: [" D ", "CCC", "PPP"],
      key: {
        D: "#forge:gems/diamond",
        C: "minecraft:purple_carpet",
        P: "malum:runewood_planks",
      },
      id: recipeId + "magic_workbench",
    },
    //Item Conduit
    {
      result: Item.of("enderio:item_conduit", 8),
      pattern: ["BNB", "BNB", "DCD"],
      key: {
        B: "enderio:conduit_binder",
        N: "#forge:nuggets/pulsating_alloy",
        D: "#forge:ingots/dark_steel",
        C: "integrateddynamics:cable",
      },
      id: recipeId + "item_conduit",
    },
    //Oil Generator
    {
      result: "actuallyadditions:oil_generator",
      pattern: ["PBP", "PCP", "PIP"],
      key: {
        P: "kubejs:energized_steel_plate",
        B: "actuallyadditions:basic_coil",
        C: "actuallyadditions:canola",
        I: "actuallyadditions:iron_casing",
      },
      id: recipeId + "oil_generator",
    },
    //Piston
    {
      result: "minecraft:piston",
      pattern: ["PPP", "CRC", "CIC"],
      key: {
        P: "#minecraft:planks",
        C: "#forge:cobblestone",
        R: "#forge:rods/copper",
        I: "#forge:plates/iron",
      },
      id: recipeId + "piston",
    },
    //Pity Machine Frame
    {
      result: "industrialforegoing:machine_frame_pity",
      pattern: ["PIP", "ICI", "PIP"],
      key: {
        P: "#minecraft:planks",
        C: "kubejs:basic_machine_casing",
        I: "#forge:plates/iron",
      },
      id: recipeId + "pity_machine_frame",
    },
    //Fluid Extractor
    {
      result: "industrialforegoing:fluid_extractor",
      pattern: ["PAP", "PCP", "PMP"],
      key: {
        P: "kubejs:hdpe_sheet",
        A: "thermal:device_tree_extractor",
        C: "kubejs:basic_circuit",
        M: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "fluid_extractor",
    },
    //Latex Processing Unit
    {
      result: "industrialforegoing:latex_processing_unit",
      pattern: ["PFP", "TCT", "PMP"],
      key: {
        P: "kubejs:hdpe_sheet",
        F: "minecraft:furnace",
        T: "create:fluid_tank",
        C: "kubejs:basic_circuit",
        M: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "latex_processing_unit",
    },
    //Tinker Bench
    {
      result: "thermal:tinker_bench",
      pattern: ["III", "HCH", "PPP"],
      key: {
        I: "#forge:plates/iron",
        H: "#thermal:glass/hardened",
        C: "kubejs:basic_circuit",
        P: "#minecraft:planks",
      },
      id: recipeId + "tinker_bench",
    },
    //Energetic Infuser
    {
      result: "thermal:charge_bench",
      pattern: ["EEE", "ACA", "EBE"],
      key: {
        E: "#forge:plates/electrum",
        A: "tfmg:capacitor",
        C: "thermal:energy_cell_frame",
        B: "kubejs:basic_circuit",
      },
      id: recipeId + "energetic_infuser",
    },
    //Thermal Redstone Furnace
    {
      result: "thermal:machine_furnace",
      pattern: ["IFI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        F: "minecraft:furnace",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/redstone_furnace",
    },
    //Thermal Sawmill
    {
      result: "thermal:machine_sawmill",
      pattern: ["ISI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        S: "thermal:saw_blade",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/sawmill",
    },
    //Thermal Pulverizer
    {
      result: "thermal:machine_pulverizer",
      pattern: ["IDI", "WCW", "GAG"],
      key: {
        I: "#forge:plates/invar",
        D: "thermal:drill_head",
        W: "create:crushing_wheel",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/pulverizer",
    },
    //Thermal Induction Smelter
    {
      result: "thermal:machine_smelter",
      pattern: ["BBB", "RCR", "GAG"],
      key: {
        B: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/induction_smelter",
    },
    //Thermal Centrifugal Separator
    {
      result: "thermal:machine_centrifuge",
      pattern: ["IPI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        P: "minecraft:compass",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/centrifuge",
    },
    //Thermal Multiservo Press
    {
      result: "thermal:machine_press",
      pattern: ["IPI", "RCR", "GAG"],
      key: {
        I: "#forge:plates/invar",
        P: "create:mechanical_press",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/multiservo_press",
    },
    //Thermal Magma Crucible
    {
      result: "thermal:machine_crucible",
      pattern: ["IHI", "NPN", "GAG"],
      key: {
        I: "#forge:plates/invar",
        H: "#thermal:glass/hardened",
        N: "minecraft:nether_bricks",
        P: "pneumaticcraft:printed_circuit_board",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/magma_crucible",
    },
    //Thermal Blast Chiller
    {
      result: "thermal:machine_chiller",
      pattern: ["IHI", "BPB", "GAG"],
      key: {
        I: "#forge:plates/invar",
        H: "#thermal:glass/hardened",
        B: "thermal:blizz_rod",
        P: "pneumaticcraft:printed_circuit_board",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/blast_chiller",
    },
    //Thermal Fractionating Still
    {
      result: "thermal:machine_refinery",
      pattern: ["IHI", "OPT", "GAG"],
      key: {
        I: "#forge:plates/invar",
        H: "#thermal:glass/hardened",
        O: "tfmg:steel_distillation_output",
        T: "tfmg:steel_distillation_controller",
        P: "pneumaticcraft:printed_circuit_board",
        G: "#forge:gears/invar",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/fractionating_still",
    },
    //Thermal Pyrolyzer
    {
      result: "thermal:machine_pyrolyzer",
      pattern: ["IBI", "NPN", "GAG"],
      key: {
        I: "#forge:plates/invar",
        B: "create:blaze_cake",
        N: "minecraft:nether_bricks",
        P: "pneumaticcraft:printed_circuit_board",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/pyrolyzer",
    },
    //Thermal Fluid Encapsulator
    {
      result: "thermal:machine_bottler",
      pattern: ["ISI", "HCH", "GAG"],
      key: {
        I: "#forge:plates/invar",
        S: "create:spout",
        H: "#thermal:glass/hardened",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/fluid_encapsulator",
    },
    //Thermal Alchemical Imbuer
    {
      result: "thermal:machine_brewer",
      pattern: ["IBI", "HPH", "GAG"],
      key: {
        I: "#forge:plates/invar",
        B: "minecraft:brewing_stand",
        H: "#thermal:glass/hardened",
        P: "pneumaticcraft:printed_circuit_board",
        G: "#forge:gears/constantan",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/alchemical_imbuer",
    },
    //Thermal Sequential Fabricator
    {
      result: Item.of("thermal:machine_crafter", 2),
      pattern: ["IRI", "TCT", "GAG"],
      key: {
        I: "#forge:plates/invar",
        R: "thermal:rf_coil",
        T: "minecraft:crafting_table",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/bronze",
        A: "thermal:machine_frame",
      },
      id: recipeId + "thermal/sequential_fabricator",
    },
    //Compression Dynamo
    {
      result: "thermal:dynamo_compression",
      pattern: [" C ", "TGT", "PBP"],
      key: {
        C: "thermal:rf_coil",
        T: "create:fluid_tank",
        G: "#forge:gears/bronze",
        P: "#forge:plates/bronze",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "compression_dynamo",
    },
    //Magmatic Dynamo
    {
      result: "thermal:dynamo_magmatic",
      pattern: [" C ", "TGT", "PSP"],
      key: {
        C: "thermal:rf_coil",
        T: "tfmg:steel_fluid_tank",
        G: "#forge:gears/invar",
        P: "#forge:plates/invar",
        S: "thermal:dynamo_stirling",
      },
      id: recipeId + "magmatic_dynamo",
    },
    //Disenchantment Dynamo
    {
      result: "thermal:dynamo_disenchantment",
      pattern: [" C ", "PTP", "EBE"],
      key: {
        C: "thermal:rf_coil",
        P: "#forge:plates/iron",
        T: "minecraft:enchanting_table",
        E: "minecraft:experience_bottle",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "disenchantment_dynamo",
    },
    //Gourmand Dynamo
    {
      result: "thermal:dynamo_gourmand",
      pattern: [" C ", "RGR", "PBP"],
      key: {
        C: "thermal:rf_coil",
        R: "pneumaticcraft:printed_circuit_board",
        G: "#forge:gears/copper",
        P: "#forge:plates/tin",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "gourmand_dynamo",
    },
    //Energy Cell Frame
    {
      result: "thermal:energy_cell_frame",
      pattern: ["PHP", "HCH", "PHP"],
      key: {
        P: "#forge:plates/lead",
        H: "#thermal:glass/hardened",
        C: "tfmg:capacitor",
      },
      id: recipeId + "energy_cell_frame",
    },
    //Energy Cell
    {
      result: "thermal:energy_cell",
      pattern: ["PAP", "RCR", "PAP"],
      key: {
        P: "#forge:plastic",
        A: "#forge:ingots/red_alloy",
        R: "thermal:rf_coil",
        C: "thermal:energy_cell_frame",
      },
      id: recipeId + "energy_cell",
    },
    //Fluid Cell Frame
    {
      result: "thermal:fluid_cell_frame",
      pattern: ["PHP", "HCH", "PHP"],
      key: {
        P: "#forge:plates/bronze",
        H: "#thermal:glass/hardened",
        C: "create:fluid_tank",
      },
      id: recipeId + "fluid_cell_frame",
    },
    //Fluid Cell
    {
      result: "thermal:fluid_cell",
      pattern: ["BGB", "RCR", "BGB"],
      key: {
        B: "thermal:cured_rubber",
        G: "#forge:gears/iron",
        R: "thermal:redstone_servo",
        C: "thermal:fluid_cell_frame",
      },
      id: recipeId + "fluid_cell",
    },
    //Aqueos Accumulator
    {
      result: "thermal:device_water_gen",
      pattern: ["PRP", "HBH", "PCP"],
      key: {
        P: "#forge:plates/copper",
        R: "thermal:redstone_servo",
        B: "minecraft:bucket",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "aqueous_accumulator",
    },
    //Igeneous Extruder
    {
      result: "thermal:device_rock_gen",
      pattern: ["PGP", "HBH", "PCP"],
      key: {
        P: "#forge:plates/invar",
        G: "#forge:gears/constantan",
        B: "minecraft:bucket",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "igneous_extruder",
    },
    //Vaccumulator
    {
      result: "thermal:device_collector",
      pattern: ["PEP", "HOH", "PCP"],
      key: {
        P: "#forge:plates/tin",
        E: "minecraft:ender_pearl",
        O: "minecraft:hopper",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "vaccumulator",
    },
    //Insighful Condenser
    {
      result: "thermal:device_xp_condenser",
      pattern: ["PGP", "HIH", "PCP"],
      key: {
        P: "#forge:plates/silver",
        G: "#forge:gears/lapis",
        I: "thermal:xp_crystal",
        H: "#thermal:glass/hardened",
        C: "thermal:machine_frame",
      },
      id: recipeId + "insighful_condenser",
    },
    //Nullifier
    {
      result: "thermal:device_nullifier",
      pattern: ["PRP", "HLH", "PSP"],
      key: {
        P: "#forge:plates/tin",
        R: "#forge:ingots/red_alloy",
        L: "minecraft:lava_bucket",
        H: "#thermal:glass/hardened",
        S: "thermal:redstone_servo",
      },
      id: recipeId + "nullifier",
    },
    //Decoctive Diffuser
    {
      result: "thermal:device_potion_diffuser",
      pattern: ["PGP", "HBH", "PSP"],
      key: {
        P: "#forge:plates/silver",
        G: "#forge:gears/constantan",
        B: "minecraft:glass_bottle",
        H: "#thermal:glass/hardened",
        S: "thermal:redstone_servo",
      },
      id: recipeId + "decoctive_diffuser",
    },
    //Energy Laser Relay
    {
      result: Item.of("actuallyadditions:laser_relay", 4),
      pattern: [" C ", "RAR", " O "],
      key: {
        C: "tfmg:copper_cable",
        R: "actuallyadditions:restonia_crystal",
        A: "actuallyadditions:advanced_coil",
        O: "minecraft:obsidian",
      },
      id: recipeId + "laser_relay",
    },
    //Satchel
    {
      result: "thermal:satchel",
      pattern: ["STS", "IWI", "S S"],
      key: {
        S: "minecraft:string",
        T: "#forge:ingots/tin",
        I: "kubejs:industrial_leather",
        W: "#minecraft:wool",
      },
      id: recipeId + "satchel",
    },
    //Steel Item Port Input
    {
      result: "mm:steel_item_port_input",
      pattern: ["S S", " C ", "SHS"],
      key: {
        S: "#forge:plates/steel",
        C: "minecraft:chest",
        H: "minecraft:hopper",
      },
      id: recipeId + "steel_item_port_input",
    },
    //Steel Fluid Port Input
    {
      result: "mm:steel_fluid_port_input",
      pattern: ["S S", " T ", "SHS"],
      key: {
        S: "#forge:plates/steel",
        T: "create:fluid_tank",
        H: "minecraft:hopper",
      },
      id: recipeId + "steel_fluid_port_input",
    },
    //Steel Energy Port Input
    {
      result: "mm:steel_energy_port_input",
      pattern: ["S S", " A ", "SHS"],
      key: {
        S: "#forge:plates/steel",
        A: "createaddition:modular_accumulator",
        H: "minecraft:hopper",
      },
      id: recipeId + "steel_energy_port_input",
    },
    //iR Energetic Smelter
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/energetic_smelter"}'
      ),
      pattern: [" F ", "RCR", "SMS"],
      key: {
        F: "minecraft:furnace",
        C: "kubejs:basic_circuit",
        R: "thermal:rf_coil",
        S: "#forge:gears/steel",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/energetic_smelter",
    },
    //iR Assembler
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/assembler"}'
      ),
      pattern: ["HIH", "RCR", "GMG"],
      key: {
        H: "kubejs:hdpe_sheet",
        I: "tfmg:capacitor_",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        G: "#forge:gears/energized_steel",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/assembler",
    },
    //Bronze Casing
    {
      result: Item.of("kubejs:bronze_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "#forge:plates/bronze",
        G: "#forge:gears/bronze",
      },
      id: recipeId + "techlab/bronze_casing",
    },
    //Steel Casing
    {
      result: Item.of("kubejs:steel_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "#forge:plates/steel",
        G: "#forge:gears/steel",
      },
      id: recipeId + "techlab/steel_casing",
    },
    //Heatproof Casing
    {
      result: Item.of("kubejs:heatproof_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "#forge:plates/invar",
        G: "#forge:gears/invar",
      },
      id: recipeId + "techlab/heatproof_casing",
    },
    //Advanced Thermal Alloy Casing
    {
      result: Item.of("kubejs:advanced_thermal_alloy_casing", 4),
      pattern: ["PPP", "PGP", "PPP"],
      key: {
        P: "kubejs:advanced_thermal_alloy_plating",
        G: "#forge:gears/steel",
      },
      id: recipeId + "techlab/advanced_thermal_alloy_casing",
    },
    //Arc Furnace Controller
    {
      result: "mm:arc_furnace_controller",
      pattern: ["PMP", "CAC", "PCP"],
      key: {
        P: "#forge:plates/steel",
        M: "kubejs:steel_casing",
        C: "kubejs:basic_circuit",
        A: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
        ).strongNBT(),
      },
      id: recipeId + "techlab_multiblocks/arc_furnace_controller",
    },
    //Steam Macerator Controller
    {
      result: "mm:steam_macerator_controller",
      pattern: ["WMW", "PAP", "WPW"],
      key: {
        W: "create:crushing_wheel",
        P: "#forge:plates/bronze",
        M: "kubejs:bronze_casing",
        A: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/macerator"}'
        ).strongNBT(),
      },
      id: recipeId + "techlab_multiblocks/steam_macerator_controller",
    },
    //Constantan Coil
    {
      result: "kubejs:constantan_coil",
      pattern: ["SSS", "CCC", "SSS"],
      key: {
        S: "#forge:plates/steel",
        C: "#forge:plates/constantan",
      },
      id: recipeId + "constantan_coil",
    },
    //Shadow Bronze Coil
    {
      result: "kubejs:shadow_bronze_coil",
      pattern: ["SSS", "CCC", "SSS"],
      key: {
        S: "#forge:plates/steel",
        C: "kubejs:shadow_bronze_plate",
      },
      id: recipeId + "shadow_bronze_coil",
    },
    //Techpack Wrench
    {
      result: "kubejs:wrench",
      pattern: ["S S", " G ", " S "],
      key: {
        S: "#forge:plates/steel",
        G: "#forge:gears/steel",
      },
      id: recipeId + "techpack_wrench",
    },
    //iR BatBox
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/batbox"}'
      ),
      pattern: ["PSP", "SBS", "PPP"],
      key: {
        P: "#minecraft:planks",
        S: "createaddition:copper_spool",
        B: "moreminecarts:transport_battery",
      },
      id: recipeId + "industrial_revival/batbox",
    },

    ///DAMADADADA

    // Coal Generator
    {
      result: Item.of("ad_astra:coal_generator", 2),
      pattern: ["SRS", "CDC", "SRS"],
      key: {
        S: "thermal:steel_plate",
        R: "thermal:redstone_servo",
        C: "thermal:rf_coil",
        D: "thermal:dynamo_stirling",
      },
      id: recipeId + "ad_astra/coal_generator",
    },
    // Compressor
    {
      result: "ad_astra:compressor",
      pattern: [" M ", "RCR", " P "],
      key: {
        M: "create:mechanical_press",
        R: "thermal:rf_coil",
        C: "actuallyadditions:iron_casing",
        P: "minecraft:piston",
      },
      id: recipeId + "ad_astra/compressor",
    },
    // Etrionic Blast Furnace
    {
      result: "ad_astra:etrionic_blast_furnace",
      pattern: [" A ", "RBR", "SCS"],
      key: {
        A: "kubejs:advanced_alloy_plate",
        R: "thermal:rf_coil",
        B: "minecraft:blast_furnace",
        S: "thermal:steel_plate",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "ad_astra/etrionic_blast_furnace",
    },
    // Fuel Refinery
    {
      result: "ad_astra:fuel_refinery",
      pattern: [" O ", "SRS", "PCP"],
      key: {
        O: "pneumaticcraft:refinery_output",
        S: "tfmg:steel_fluid_tank",
        R: "pneumaticcraft:refinery",
        P: "#forge:plates/steel",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "ad_astra/fuel_refinery",
    },
    // Oxygen Loader
    {
      result: "ad_astra:oxygen_loader",
      pattern: ["SFS", "GRG", "SCS"],
      key: {
        S: "thermal:steel_plate",
        F: "ad_astra:fan",
        G: "ad_astra:gas_tank",
        R: "thermal:rf_coil",
        S: "#forge:plates/steel",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "ad_astra/oxygen_loader",
    },
    // Water Pump
    {
      result: "ad_astra:water_pump",
      pattern: ["DDD", "TGT", "SCS"],
      key: {
        D: "#forge:plates/desh",
        T: "create:fluid_tank",
        G: "ad_astra:gas_tank",
        S: "#forge:plates/steel",
        C: "actuallyadditions:iron_casing",
      },
      id: recipeId + "ad_astra/water_pump",
    },
    // Gravity Normalizer
    {
      result: "ad_astra:gravity_normalizer",
      pattern: ["CEC", "GBG", "DDD"],
      key: {
        C: "ad_astra:etrionic_capacitor",
        E: "eidolon:ender_calx",
        G: "eidolon:gold_inlay",
        B: "eidolon:gravity_belt",
        D: "#forge:plates/desh",
      },
      id: recipeId + "ad_astra/gravity_normalizer",
    },
    // Energizer
    {
      result: "ad_astra:energizer",
      pattern: [" C ", "RAR", "OBO"],
      key: {
        C: "ad_astra:etrionic_capacitor",
        R: "thermal:rf_coil",
        A: "tfmg:capacitor",
        O: "#forge:plates/ostrum",
        B: "kubejs:basic_machine_casing",
      },
      id: recipeId + "ad_astra/energizer",
    },
    // Cryo Freezer
    {
      result: "ad_astra:cryo_freezer",
      pattern: [" W ", "BGB", "OCO"],
      key: {
        W: "eidolon:wraith_heart",
        B: "thermal:blizz_rod",
        G: "ad_astra:large_gas_tank",
        O: "#forge:plates/ostrum",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "ad_astra/cryo_freezer",
    },
    // Oxygen Sensor
    {
      result: "ad_astra:oxygen_sensor",
      pattern: ["PKP", "SRT", "OCO"],
      key: {
        P: "pneumaticcraft:plastic",
        K: "minecraft:calibrated_sculk_sensor",
        S: "malum:spectral_optic",
        R: "thermal:redstone_servo",
        T: "malum:soul_stained_steel_plating",
        O: "#forge:plates/ostrum",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "ad_astra/oxygen_sensor",
    },
    //Refinery
    {
      result: "pneumaticcraft:refinery",
      pattern: [" C ", "GDG", "APE"],
      key: {
        C: "kubejs:basic_circuit",
        G: "thermal:obsidian_glass",
        D: "tfmg:steel_distillation_controller",
        A: "malum:auric_embers",
        P: "eidolon:pewter_inlay",
        E: "malum:ether",
      },
      id: recipeId + "pneumaticcraft/refinery",
    },
    //Refinery Output
    {
      result: "pneumaticcraft:refinery_output",
      pattern: [" G ", " O ", " A "],
      key: {
        G: "thermal:obsidian_glass",
        O: "tfmg:steel_distillation_output",
        A: "malum:auric_embers",
      },
      id: recipeId + "pneumaticcraft/refinery_output",
    },
    //Advanced Air Compressor
    {
      result: "pneumaticcraft:advanced_air_compressor",
      pattern: [" P ", " C ", "AMA"],
      key: {
        P: "pneumaticcraft:advanced_pressure_tube",
        C: "pneumaticcraft:air_compressor",
        A: "malum:auric_embers",
        M: "kubejs:advanced_machine_casing",
      },
      id: recipeId + "pneumaticcraft/advanced_air_compressor",
    },
    //Liquid Compressor
    {
      result: "pneumaticcraft:liquid_compressor",
      pattern: ["FGF", "TAT", " S "],
      key: {
        F: "thermal:fluid_duct_windowed",
        G: "#forge:glass",
        T: "pneumaticcraft:pressure_tube",
        A: "pneumaticcraft:air_compressor",
        S: "pneumaticcraft:small_tank",
      },
      id: recipeId + "pneumaticcraft/liquid_compressor",
    },
    //Pneumatic Dynamo
    {
      result: "pneumaticcraft:pneumatic_dynamo",
      pattern: [" A ", "SBS", "GEG"],
      key: {
        A: "pneumaticcraft:advanced_pressure_tube",
        S: "thermal:redstone_servo",
        B: "kubejs:basic_circuit",
        G: "pneumaticcraft:compressed_iron_gear",
        E: "malum:auric_embers",
      },
      id: recipeId + "pneumaticcraft/pneumatic_dynamo",
    },
    //Solar Compressor
    {
      result: "pneumaticcraft:solar_compressor",
      pattern: ["PSC", " B ", "AMA"],
      key: {
        P: "enderio:photovoltaic_plate",
        S: "malum:spectral_optic",
        C: "pneumaticcraft:solar_cell",
        B: "kubejs:basic_circuit",
        A: "pneumaticcraft:advanced_pressure_tube",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "pneumaticcraft/solar_compressor",
    },
    //Thermal Compressor
    {
      result: "pneumaticcraft:thermal_compressor",
      pattern: [" G ", "SAC", "PMP"],
      key: {
        G: "pneumaticcraft:compressed_iron_gear",
        S: "#forge:plates/silver",
        A: "pneumaticcraft:air_compressor",
        C: "#forge:plates/copper",
        P: "pneumaticcraft:pressure_tube",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "pneumaticcraft/thermal_compressor",
    },
    //Vortex Tube
    {
      result: "pneumaticcraft:vortex_tube",
      pattern: ["AIA", "CPC", "BIZ"],
      key: {
        A: "malum:astral_weave",
        I: "pneumaticcraft:ingot_iron_compressed",
        C: "#forge:gears/copper",
        P: "pneumaticcraft:pressure_tube",
        B: "thermal:blizz_rod",
        Z: "create:blaze_cake",
      },
      id: recipeId + "pneumaticcraft/vortex_tube",
    },
    //Integrated Dynamics Cable
    {
      result: Item.of("integrateddynamics:cable", 4),
      pattern: ["   ", "CME", "   "],
      key: {
        C: "integrateddynamics:crystalized_menril_chunk",
        M: "tfmg:steel_mechanism",
        E: "create:electron_tube",
      },
      id: recipeId + "integrateddynamics/cable",
    },
    //Energy Battery
    {
      result: "integrateddynamics:energy_battery",
      pattern: [" E ", " M ", " C "],
      key: {
        E: "create:electron_tube",
        M: "createaddition:modular_accumulator",
        C: "integrateddynamics:crystalized_menril_chunk",
      },
      id: recipeId + "integrateddynamics/energy_battery",
    },
    //Integrated Terminal Storage
    {
      result: "integratedterminals:part_terminal_storage",
      pattern: ["ODI", "CVC", "RSR"],
      key: {
        O: "integrateddynamics:variable_transformer_output",
        D: "integrateddynamics:part_display_panel",
        I: "integrateddynamics:variable_transformer_input",
        C: "integrateddynamics:cable",
        V: "create:item_vault",
        R: "thermal:rf_coil",
        S: "tfmg:steel_mechanism",
      },
      id: recipeId + "integratedterminals/part_terminal_storage",
    },
    //Steam Dynamo
    {
      result: "systeams:steam_dynamo",
      pattern: [" B ", "IMI", "SCS"],
      key: {
        B: "systeams:boiler_pipe",
        I: "thermal:invar_plate",
        M: "kubejs:bio_plastic_mesh",
        S: "tfmg:steel_fluid_tank",
        C: "kubejs:basic_machine_casing",
      },
      id: recipeId + "systeams/steam_dynamo",
    },
    //Thermopneumatic Processing Plant
    {
      result: "pneumaticcraft:thermopneumatic_processing_plant",
      pattern: ["IBI", "GSG", "ECE"],
      key: {
        I: "pneumaticcraft:ingot_iron_compressed",
        B: "kubejs:basic_circuit",
        G: "thermal:obsidian_glass",
        S: "pneumaticcraft:small_tank",
        E: "malum:ether",
        C: "pneumaticcraft:compressed_iron_gear",
      },
      id: recipeId + "pneumaticcraft/thermopneumatic_processing_plant",
    },
    //Pestle And Mortar
    {
      result: "hexerei:pestle_and_mortar",
      pattern: ["   ", "C C", " C "],
      key: {
        C: "#forge:cobblestone",
      },
      id: recipeId + "hexerei/pestle_and_mortar",
    },
    //Ender IO Alloy Smelter
    {
      result: "enderio:alloy_smelter",
      pattern: ["BBB", "RCR", "DVD"],
      key: {
        B: "minecraft:blast_furnace",
        R: "thermal:rf_coil",
        C: "kubejs:basic_circuit",
        D: "enderio:dark_bimetal_gear",
        V: "enderio:void_chassis",
      },
      id: recipeId + "enderio/alloy_smelter",
    },
    //Tconstruct Smeltery Controller
    {
      result: "tconstruct:smeltery_controller",
      pattern: [" P ", "CSC", " B "],
      key: {
        P: "create:precision_mechanism",
        C: "#forge:plates/copper",
        S: "tconstruct:seared_melter",
        B: "create:blaze_burner",
      },
      id: recipeId + "tconstruct/smeltery_controller",
    },
    //Primitive Fishing Net
    {
      result: "kubejs:primitive_fishing_net",
      pattern: [" S ", "SRS", " S "],
      key: {
        S: "#forge:rods/wooden",
        R: "#forge:rope",
      },
      id: recipeId + "kubejs/primitive_fishing_net",
    },
    //Iron Chest
    {
      result: "ironchest:iron_chest",
      pattern: ["PPP", "PCP", "PPP"],
      key: {
        P: "#forge:plates/iron",
        C: "ironchest:copper_chest",
      },
      id: recipeId + "ironchest/iron_chest",
    },
    //Gold Chest
    {
      result: "ironchest:gold_chest",
      pattern: ["BGB", "GCG", "BGB"],
      key: {
        B: "#forge:plates/brass",
        G: "#forge:plates/gold",
        C: "ironchest:iron_chest",
      },
      id: recipeId + "ironchest/gold_chest",
    },
    //Diamond Chest
    {
      result: "ironchest:diamond_chest",
      pattern: [" M ", "GCG", " G "],
      key: {
        M: "botania:mana_diamond",
        G: "#thermal:glass/hardened",
        C: "ironchest:gold_chest",
      },
      id: recipeId + "ironchest/diamond_chest",
    },
    //Modifier Base
    {
      result: Item.of("kubejs:modifier_base", 2),
      pattern: [" V ", " P ", " C "],
      key: {
        V: "kubejs:vaccum_tube",
        P: "#forge:plates/steel",
        C: "kubejs:basic_circuit",
      },
      id: recipeId + "kubejs/modifier_base",
    },
    //Mob Slaughter Factory
    {
      result: "industrialforegoing:mob_slaughter_factory",
      pattern: ["HBH", "SCA", "HFH"],
      key: {
        H: "kubejs:hdpe_sheet",
        B: "supplementaries:bamboo_spikes",
        S: "minecraft:iron_sword",
        C: "pneumaticcraft:printed_circuit_board",
        A: "minecraft:iron_axe",
        F: "industrialforegoing:machine_frame_simple",
      },
      id: recipeId + "industrialforegoing/mob_slaughter_factory",
    },
    //Plant Gatherer
    {
      result: "industrialforegoing:plant_gatherer",
      pattern: ["PDP", "MCS", "PFP"],
      key: {
        P: "#forge:plastic",
        D: "create:deployer",
        M: "create:mechanical_harvester",
        C: "kubejs:basic_circuit",
        S: "create:mechanical_saw",
        F: "industrialforegoing:machine_frame_simple",
      },
      id: recipeId + "industrialforegoing/plant_gatherer",
    },
    //Plant Sower
    {
      result: "industrialforegoing:plant_sower",
      pattern: ["PWP", "ICI", "PFP"],
      key: {
        P: "#forge:plastic",
        W: "minecraft:flower_pot",
        I: "minecraft:piston",
        C: "kubejs:basic_circuit",
        F: "industrialforegoing:machine_frame_simple",
      },
      id: recipeId + "industrialforegoing/plant_sower",
    },
    //Plant Fertilizer
    {
      result: "industrialforegoing:plant_fertilizer",
      pattern: ["PFP", "FCF", "PMP"],
      key: {
        P: "#forge:plastic",
        F: ["thermal:phytogro", "create:tree_fertilizer", "thermal:compost"],
        C: "kubejs:basic_circuit",
        M: "industrialforegoing:machine_frame_simple",
      },
      id: recipeId + "industrialforegoing/plant_fertilizer",
    },
    //Animal Rancher
    {
      result: "industrialforegoing:animal_rancher",
      pattern: ["HJH", "SCB", "HFH"],
      key: {
        H: "kubejs:hdpe_sheet",
        J: "supplementaries:jar",
        S: "minecraft:shears",
        C: "kubejs:basic_circuit",
        B: "minecraft:bucket",
        F: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "industrialforegoing/animal_rancher",
    },
    //Animal Feeder
    {
      result: "industrialforegoing:animal_feeder",
      pattern: ["HGH", "CBC", "HFH"],
      key: {
        H: "kubejs:hdpe_sheet",
        G: "minecraft:golden_apple",
        C: "minecraft:golden_carrot",
        B: "kubejs:basic_circuit",
        F: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "industrialforegoing/animal_feeder",
    },
    //Animal Baby Separator
    {
      result: "industrialforegoing:animal_baby_separator",
      pattern: ["HGH", "NCB", "HFH"],
      key: {
        H: "kubejs:hdpe_sheet",
        G: "minecraft:golden_carrot",
        N: "incubation:hay_nest",
        C: "kubejs:basic_circuit",
        B: "minecraft:hay_block",
        F: "industrialforegoing:machine_frame_pity",
      },
      id: recipeId + "industrialforegoing/animal_baby_separator",
    },
    //Bronze Drill
    {
      result: "kubejs:bronze_drill",
      pattern: ["  P", "PD ", "PP "],
      key: {
        P: "#forge:plates/bronze",
        D: "thermal:drill_head",
      },
      id: recipeId + "kubejs/bronze_drill",
    },
    //Steel Drill
    {
      result: "kubejs:steel_drill",
      pattern: ["  P", "PD ", "PP "],
      key: {
        P: "#forge:plates/steel",
        D: "thermal:drill_head",
      },
      id: recipeId + "kubejs/steel_drill",
    },
    //iR Basic Miner
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/basic_miner"}'
      ),
      pattern: ["RDR", "CBC", "TAT"],
      key: {
        R: "thermal:rf_coil",
        D: "create:mechanical_drill",
        C: "kubejs:basic_circuit",
        B: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/batbox"}'
        ).strongNBT(),
        T: "tfmg:capacitor_",
        A: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/basic_miner",
    },
    //iR Steam Turbine
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/steam_turbine"}'
      ),
      pattern: [" F ", "TGT", " R "],
      key: {
        F: "ad_astra:fan",
        T: "create:fluid_tank",
        G: Item.of(
          "custommachinery:custom_machine_item",
          '{machine:"custommachinery:industrialrevival/generator"}'
        ).strongNBT(),
        R: "thermal:rf_coil",
      },
      id: recipeId + "industrial_revival/steam_turbine",
    },
    //iR Cesu
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/cesu"}'
      ),
      pattern: ["PRP", "GAG", "PPP"],
      key: {
        P: "#forge:plates/bronze",
        R: "thermal:rf_coil",
        G: "createaddition:gold_spool",
        A: "tfmg:capacitor",
      },
      id: recipeId + "industrial_revival/cesu",
    },
    //iR Basic Storage Computer
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/basic_storage_computer"}'
      ),
      pattern: ["PPP", "FMF", "PPP"],
      key: {
        P: "#forge:plates/copper",
        F: "create:andesite_funnel",
        M: "kubejs:makeshift_mechanism",
      },
      id: recipeId + "industrial_revival/basic_storage_computer",
    },
    //mm Freezer
    {
      result: "mm:freezer_controller",
      pattern: ["CGC", "ZBZ", "TMT"],
      key: {
        C: "tfmg:capacitor_",
        G: "#thermal:glass/hardened",
        Z: "thermal:blizz_rod",
        B: "kubejs:basic_circuit",
        T: "ad_astra:large_gas_tank",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "mm/freezer_controller",
    },
    //mm Pyrolyses Oven
    {
      result: "mm:pyrolyse_oven_controller",
      pattern: ["SHS", "CBC", "AME"],
      key: {
        S: "#forge:plates/shadow_bronze",
        H: "kubejs:heatproof_casing",
        C: "tfmg:capacitor_",
        B: "kubejs:basic_circuit",
        A: "malum:auric_embers",
        E: "malum:ether",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "mm/pyrolyse_oven_controller",
    },
    //iR MFE
    {
      result: Item.of(
        "custommachinery:custom_machine_item",
        '{machine:"custommachinery:industrialrevival/mfe"}'
      ),
      pattern: ["PGP", "CMC", "PGP"],
      key: {
        P: "#forge:plastic",
        G: "#thermal:glass/hardened",
        C: "actuallyadditions:basic_coil",
        M: "kubejs:basic_machine_casing",
      },
      id: recipeId + "industrial_revival/mfe",
    },
    //Chemically Resistant Casing
    {
      result: Item.of("kubejs:chemically_resistant_casing", 4),
      pattern: ["HHH", "HGH", "HHH"],
      key: {
        H: "kubejs:hdpe_sheet",
        G: "#forge:gears/silver",
      },
      id: recipeId + "techlab/chemically_resistant_casing",
    },
    //Panel Block
    {
      result: Item.of("kubejs:panel_block", 8),
      pattern: ["CCC", "CSC", "CCC"],
      key: {
        C: "#forge:cobblestone",
        S: "#forge:stone",
      },
      id: recipeId + "techlab/panel_block",
    },
    //Foiled Panel Block
    {
      result: Item.of("kubejs:foiled_panel_block", 8),
      pattern: ["PPP", "PTP", "PPP"],
      key: {
        P: "kubejs:panel_block",
        T: "#forge:plates/tin",
      },
      id: recipeId + "techlab/foiled_panel_block",
    },
    //Themal Phytogenic Insolator
    {
      result: "thermal:machine_insolator",
      pattern: ["FST", "HPH", "LML"],
      key: {
        F: "thermal:phytogro",
        S: "industrialforegoing:fertilizer",
        T: "create:tree_fertilizer",
        H: "#thermal:glass/hardened",
        P: "pneumaticcraft:printed_circuit_board",
        L: "#forge:gears/lumium",
        M: "thermal:machine_frame",
      },
      id: recipeId + "thermal/phytogenic_insolator",
    },
  ];
  recipes.forEach((recipe) => {
    e.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
  });
});
/*
    //
    {
      result: "",
      pattern: ["P", "", ""],
      key: {
        P: "#forge:plates/silver",
      },
      id: recipeId + "",
    },
*/
