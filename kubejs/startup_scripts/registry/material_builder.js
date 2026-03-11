//priority: 100
console.log("> materialBuilderAPI is running")
const entries = [
  {
    id: "copper",
    nativeRaw: true,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "iron",
    nativeRaw: true,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "gold",
    nativeRaw: true,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "diamond",
    nativeRaw: true,
    nugget: true,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "zinc",
    nativeRaw: true,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "tin",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_iron_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "silver",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_iron_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "nickel",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_iron_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "lead",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_iron_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "platinum",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_diamond_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "aluminum",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_diamond_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "chrome",
    raw: true,
    nativeRaw: true,
    stoneOre: true,
    deepslateOre: true,
    miningLevel: "minecraft:needs_diamond_tool",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "bronze",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "steel",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "electrum",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "invar",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "constantan",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "kanthal",
    ingot: true,
    nugget: true,
    hotIngot: true,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "advanced_alloy",
    ingot: true,
    nugget: true,
    hotIngot: false,
    plate: true,
    gear: true,
    dust: true,
  },
  {
    id: "stainless_steel",
    ingot: true,
    nugget: true,
    hotIngot: true,
    plate: true,
    gear: true,
    dust: true,
  },
];
StartupEvents.registry("item", (e) => {
  entries.forEach((entry) => {
    if (entry.raw) {
      console.log(`. raw ${entry.id} registered.`)
      e.create(`techpack:raw_${entry.id}`).tag(`c:raw_materials`).tag(`c:raw_materials/${entry.id}`).texture(`techpack:item/material_builder/raw_${entry.id}`);
    }
  });
  entries.forEach((entry) => {
    if (entry.nativeRaw) {
      console.log(`. native raw ${entry.id} registered.`)
      e.create(`techpack:native_raw_${entry.id}`).tag(`c:native_raw_materials`).tag(`c:native_raw_materials/${entry.id}`).texture(`techpack:item/material_builder/native_raw_${entry.id}`);
    }
  });
  entries.forEach((entry) => {
    if (entry.ingot) {
      console.log(`. ${entry.id} ingot registered.`)
      e.create(`techpack:${entry.id}_ingot`).tag(`c:ingots`).tag(`c:ingots/${entry.id}`).texture(`techpack:item/material_builder/${entry.id}_ingot`);
    }
  });
  entries.forEach((entry) => {
    if (entry.hotIngot) {
      console.log(`. hot ${entry.id} ingot registered.`)
      e.create(`techpack:hot_${entry.id}_ingot`).tag(`c:hot_ingots`).tag(`c:hot_ingots/${entry.id}`).texture(`techpack:item/material_builder/hot_${entry.id}_ingot`);
    }
  });
  entries.forEach((entry) => {
    if (entry.nugget) {
      console.log(`. ${entry.id} nugget registered.`)
      e.create(`techpack:${entry.id}_nugget`).tag(`c:nuggets`).tag(`c:nuggets/${entry.id}`).texture(`techpack:item/material_builder/${entry.id}_nugget`);
    }
  });
  entries.forEach((entry) => {
    if (entry.plate) {
      console.log(`. ${entry.id} plate registered.`)
      e.create(`techpack:${entry.id}_plate`).tag(`c:plates`).tag(`c:plates/${entry.id}`).texture(`techpack:item/material_builder/${entry.id}_plate`);
    }
  });
  entries.forEach((entry) => {
    if (entry.gear) {
      console.log(`. ${entry.id} gear registered.`)
      e.create(`techpack:${entry.id}_gear`).tag(`c:gears`).tag(`c:gears/${entry.id}`).texture(`techpack:item/material_builder/${entry.id}_gear`);
    }
  });
  entries.forEach((entry) => {
    if (entry.dust) {
      console.log(`. ${entry.id} dust registered.`)
      e.create(`techpack:${entry.id}_dust`).tag(`c:dusts`).tag(`c:dusts/${entry.id}`).texture(`techpack:item/material_builder/${entry.id}_dust`);
    }
  });
  e.create("techpack:crushed_raw_chrome").texture(`techpack:item/material_builder/crushed_raw_chrome`);
  e.create("techpack:crushed_raw_silicon").texture(`techpack:item/material_builder/crushed_raw_silicon`);
});
StartupEvents.registry("block", (e) => {
  function materialBuilderAPI(e, buildData) {
    const entry = buildData.id

    if (buildData.stoneOre && buildData.miningLevel) {
      console.log(`. ${entry} stone ore registered.`)
      e.create(`techpack:${entry}_ore`)
        .texture(`techpack:block/material_builder/${entry}_ore`)
        .tag("c:ores").tag(`c:ores/${entry}`)
        .soundType("stone")
        .requiresTool(true)
        .tagBoth("mineable/pickaxe")
        .tagBoth(buildData.miningLevel)
        .hardness(3.0)
        .mapColor(11);
    }
    if (buildData.deepslateOre && buildData.miningLevel) {
      console.log(`. ${entry} deepslate ore registered.`)
      e.create(`techpack:deepslate_${entry}_ore`)
        .texture(`techpack:block/material_builder/deepslate_${entry}_ore`)
        .tag("c:ores").tag(`c:ores/${entry}`)
        .soundType("stone")
        .requiresTool(true)
        .tagBoth("mineable/pickaxe")
        .tagBoth(buildData.miningLevel)
        .hardness(4.5)
        .mapColor(59);
    }
    else {
      console.log(`! [Block] materialBuilderAPI: ${entry} does not have any key to register.`);
    }
    console.log(`# ${entry} steps completed, moving to the next entry...`);
  }
  entries.forEach((entry) => {
    materialBuilderAPI(e,entry)
  });
});
console.log("> materialBuilderAPI successfully stopped running.")