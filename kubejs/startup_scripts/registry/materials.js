  let override = [
    "iron",
    "copper",
    "gold"
  ]
  let natural = [
    "tin",
    "silver",
    "nickel",
    "lead",
    "platinum",
  ];
  let alloy = [
    "steel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
  ];
StartupEvents.registry("item", (e) => {
  natural.forEach((registry) => {
    e.create(`techpack:raw_${registry}`).texture(`techpack:item/library/raw_${registry}`).tag("c:raw_materials").tag(`c:raw_materials/${registry}`);
    //e.create(`techpack:native_${registry}_cluster`).texture(`techpack:item/library/native_${registry}_cluster`).tag("c:native_clusters").tag(`c:native_clusters/${registry}`);
  });
  natural.forEach((registry) => {
    e.create(`techpack:${registry}_ingot`).texture(`techpack:item/library/${registry}_ingot`).tag("c:ingots").tag(`c:ingots/${registry}`);
    e.create(`techpack:${registry}_plate`).texture(`techpack:item/library/${registry}_plate`).tag("c:plates").tag(`c:plates/${registry}`);
    e.create(`techpack:${registry}_gear`).texture(`techpack:item/library/${registry}_gear`).tag("c:gears").tag(`c:gears/${registry}`);
  });
  alloy.forEach((registry) => {
    e.create(`techpack:${registry}_ingot`).texture(`techpack:item/library/${registry}_ingot`).tag("c:ingots").tag(`c:ingots/${registry}`).tag("techpack:alloy_ingots");
    e.create(`techpack:${registry}_plate`).texture(`techpack:item/library/${registry}_plate`).tag("c:plates").tag(`c:plates/${registry}`);
    e.create(`techpack:${registry}_gear`).texture(`techpack:item/library/${registry}_gear`).tag("c:gears").tag(`c:gears/${registry}`);  
  });
  override.forEach((registry) => {
    e.create(`techpack:${registry}_plate`).texture(`techpack:item/library/${registry}_plate`).tag("c:plates").tag(`c:plates/${registry}`);
    e.create(`techpack:${registry}_gear`).texture(`techpack:item/library/${registry}_gear`).tag("c:gears").tag(`c:gears/${registry}`);  
  });

  natural.forEach((registry) => {
    e.create(`techpack:${registry}_dust`).texture(`techpack:item/library/${registry}_dust`).tag("c:dusts").tag(`c:dusts/${registry}`);
  });
  alloy.forEach((registry) => {
    e.create(`techpack:${registry}_dust`).texture(`techpack:item/library/${registry}_dust`).tag("c:dusts").tag(`c:dusts/${registry}`);
  });
  override.forEach((registry) => {
    e.create(`techpack:${registry}_dust`).texture(`techpack:item/library/${registry}_dust`).tag("c:dusts").tag(`c:dusts/${registry}`);
  });
})
StartupEvents.registry("block", (e) => {
  natural.forEach((registry) => {
    e.create(`techpack:${registry}_ore`).texture(`techpack:block/library/${registry}_ore`).tag("c:ores").tag(`c:ores/${registry}`).soundType("stone").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool");
  });
  natural.forEach((registry) => {
    e.create(`techpack:deepslate_${registry}_ore`).texture(`techpack:block/library/deepslate_${registry}_ore`).tag("c:ores").tag(`c:ores/${registry}`).soundType("stone").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool");
  });
  e.create(`techpack:grimmrock_tin_ore`).texture(`techpack:block/library/grimmrock_tin_ore`).tag("c:ores").tag(`c:ores/tin`).soundType("stone").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool");
  e.create(`techpack:grimmrock_nickel_ore`).texture(`techpack:block/library/grimmrock_nickel_ore`).tag("c:ores").tag(`c:ores/nickel`).soundType("stone").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool");
  e.create(`techpack:grimmrock_lead_ore`).texture(`techpack:block/library/grimmrock_lead_ore`).tag("c:ores").tag(`c:ores/lead`).soundType("stone").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool");
  e.create(`techpack:grimmrock_silver_ore`).texture(`techpack:block/library/grimmrock_silver_ore`).tag("c:ores").tag(`c:ores/silver`).soundType("stone").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool");
});
