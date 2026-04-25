//priority: 98
import { blockBuilderAPI } from "builderAPI";
StartupEvents.registry("block", (e) => {
  const entries = [
    {
      id: "techpack:stick_bundle",
      requiresTool: true,
      soundType: "wood",
      mapColor: 13,
      tags: {
        both: ["minecraft:mineable/axe", "c:storage_blocks", "c:storage_blocks/stick"]
      }
    },
    {
      id: "techpack:mortar",
      requiresTool: true,
      mapColor: 45,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:fireclay",
      soundType: "mud",
      mapColor: 34,
      tags: {
        both: ["minecraft:mineable/shovel"]
      }
    },
    {
      id: "techpack:fireproof_bricks",
      requiresTool: true,
      mapColor: 23,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:bronze_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 15,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:steel_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 11,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:steel_scaffolding",
      soundType: "metal",
      requiresTool: true,
      suffocating: false,
      renderType: "cutout",
      fullBlock: false,
      notSolid: true,
      mapColor: 11,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool", "minecraft:climbable"]
      }
    },
    {
      id: "techpack:heatproof_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 61,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:cleanroom_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 14,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:aluminum_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 23,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:chemical_inert_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 21,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:thermal_evaporation_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 37,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:invar_frame",
      soundType: "metal",
      requiresTool: true,
      mapColor: 61,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:bronze_machine_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 15,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:basic_machine_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 9,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:advanced_machine_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 9,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:sophisticated_machine_casing",
      soundType: "metal",
      requiresTool: true,
      mapColor: 9,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:constantan_coil",
      soundType: "metal",
      requiresTool: true,
      mapColor: 37,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:kanthal_coil",
      soundType: "metal",
      requiresTool: true,
      mapColor: 45,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool"]
      }
    },
    {
      id: "techpack:wild_forest_nest",
      soundType: "wood",
      mapColor: 40,
      tags: {
        both: ["techpack:bee_nests"]
      }
    },
    {
      id: "techpack:wild_boreal_nest",
      soundType: "wood",
      mapColor: 26,
      tags: {
        both: ["techpack:bee_nests"]
      }
    },
    {
      id: "techpack:wild_warm_nest",
      soundType: "wood",
      mapColor: 54,
      tags: {
        both: ["techpack:bee_nests"]
      }
    },
    {
      id: "techpack:wild_chorus_nest",
      soundType: "wood",
      mapColor: 47,
      tags: {
        both: ["techpack:bee_nests"]
      }
    },
    {
      id: "techpack:reinforced_concrete",
      hardness: 3.0,
      mapColor: 22,
      requiresTool: true,
      resistance: 600,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_wooden_tool", "c:concretes"]
      }
    },
    {
      id: "techpack:reinforced_concrete_bricks",
      hardness: 3.0,
      mapColor: 22,
      requiresTool: true,
      resistance: 600,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_wooden_tool", "c:concretes"]
      }
    },
    {
      id: "techpack:obsidian_glass",
      soundType: "glass",
      hardness: 10.0,
      notSolid: true,
      mapColor: 47,
      opaque: true,
      defaultCutout: true,
      requiresTool: true,
      renderType: "translucent",
      suffocating: false,
      noValidSpawns: true,
      resistance: 1200,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_tool", "c:glass_blocks"]
      }
    },
    {
      id: "techpack:strange_dirt",
      requiresTool: true,
      soundType: "mud",
      hardness: 0.5,
      mapColor: 34,
      tags: {
        both: ["minecraft:mineable/shovel"]
      }
    },
    {
      id: "techpack:silite",
      soundType: "basalt",
      mapColor: 59,
      hardness: 3.0,
      requiresTool: true,
      tags: {
        both: ["minecraft:mineable/pickaxe"]
      }
    },
    {
      id: "techpack:warden_totem",
      notSolid: true,
      fullBlock: false,
      renderType: "cutout",
      requiresTool: true,
      mapColor: 31,
      tags: {
        both: ["mineable/pickaxe", "minecraft:needs_iron_diamond"]
      }
    }
  ]
  const palletes = [
    {
      id: "techpack:panel_block",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/panel_block",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 9,
    },
    {
      id: "techpack:squared_panel_block",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/squared_panel_block",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 9,
    },
    {
      id: "techpack:tiled_panel_block",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/tiled_panel_block",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 9,
    },
    {
      id: "techpack:floor_panel_block",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/floor_panel_block",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 51,
    },
    {
      id: "techpack:foiled_panel_block",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/foiled_panel_block",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 47,
    },
    {
      id: "techpack:chiseled_foiled_panel_block",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/chiseled_foiled_panel_block",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 47,
    },
    {
      id: "techpack:white_laboratory_block_panel",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/white_laboratory_block_panel",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 14,
    },
    {
      id: "techpack:white_laboratory_block_tiles",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/white_laboratory_block_tiles",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 14,
    },
    {
      id: "techpack:white_laboratory_block_squared_tiles",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/white_laboratory_block_squared_tiles",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 14,
    },
    {
      id: "techpack:white_laboratory_block_zig_zag_tiles",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/white_laboratory_block_zig_zag_tiles",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 14,
    },
    {
      id: "techpack:gray_laboratory_block_panel",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/gray_laboratory_block_panel",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 22,
    },
    {
      id: "techpack:gray_laboratory_block_tiles",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/gray_laboratory_block_tiles",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 22,
    },
    {
      id: "techpack:gray_laboratory_block_squared_tiles",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/gray_laboratory_block_squared_tiles",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 22,
    },
    {
      id: "techpack:gray_laboratory_block_zig_zag_tiles",
      soundType: "stone",
      requiresTool: true,
      texture: "techpack:block/pallete/gray_laboratory_block_zig_zag_tiles",
      tags: { 
        both: [
          "mineable/pickaxe", 
          "techlab:pallete_blocks"
        ] 
      },
      mapColor: 22,
    },
    {
      id: "techpack:polished_oak_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_oak_planks",
      mapColor: 13,
    },
    {
      id: "techpack:polished_spruce_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_spruce_planks",
      mapColor: 34,
    },
    {
      id: "techpack:polished_birch_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_birch_planks",
      mapColor: 34,
    },
    {
      id: "techpack:polished_jungle_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_jungle_planks",
      mapColor: 10,
    },
    {
      id: "techpack:polished_acacia_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_acacia_planks",
      mapColor: 15,
    },
    {
      id: "techpack:polished_dark_oak_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_dark_oak_planks",
      mapColor: 26,
    },
    {
      id: "techpack:polished_mangrove_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_mangrove_planks",
      mapColor: 28,
    },
    {
      id: "techpack:polished_crimson_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_crimson_planks",
      mapColor: 53,
    },
    {
      id: "techpack:polished_warped_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_warped_planks",
      mapColor: 56,
    },
    {
      id: "techpack:polished_cherry_planks",
      soundType: "wood",
      tags: {
        both: [
          "mineable/axe",
          "minecraft:planks",
          "techpack:polished_planks",
          "techlab:pallete_blocks",
        ],
      },
      texture: "techpack:block/pallete/polished_cherry_planks",
      mapColor: 36,
    },
    {
      id: "techpack:classic_glass",
      soundType: "glass",
      hardness: 0.3,
      notSolid: true,
      transparent: true,
      defaultCutout: true,
      suffocating: false,
      noValidSpawns: true,
      texture: "techpack:block/pallete/classic_glass",
      tags: { 
        both: [
          "c:glass_blocks",
          "techlab:pallete_blocks"
        ] 
      },
    },
  ];
  entries.forEach((entry) => { 
    blockBuilderAPI(e,entry)
  });
  palletes.forEach((entry) => { 
    blockBuilderAPI(e,entry)
  });
})