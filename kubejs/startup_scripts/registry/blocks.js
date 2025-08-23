StartupEvents.registry("block", (e) => {

  let block = [
    "mortar",
    "fireproof_bricks",
  ];
  let casing = [
    "constantan_coil",
    "heatproof_casing",
    "steel_casing",
    "bronze_casing",
    "bronze_machine_casing",
    "basic_machine_casing"
  ];
  let scaffolding = [
    "steel",
  ];
  block.forEach((registry) => {
    e.create(`techpack:${registry}`);
  });
  casing.forEach((registry) => {
    e.create(`techpack:${registry}`).soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool")
  });
  scaffolding.forEach((registry) => {
    e.create(`techpack:${registry}_scaffolding`).soundType("metal").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").suffocating(false).tagBoth("minecraft:climbable")
    .renderType("cutout").fullBlock(false).notSolid()
  });

  e.create("techpack:stick_bundle").requiresTool(true).soundType("wood").tagBoth("minecraft:mineable/axe")
  e.create("techpack:fireclay").requiresTool(true).soundType("mud").tagBoth("minecraft:mineable/shovel")
});