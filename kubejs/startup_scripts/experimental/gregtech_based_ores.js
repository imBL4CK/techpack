let enabled = false;

if (enabled === true) {
  let minerals = [
    "chalcopyrite",
    "magnetite",
    "calaverite",
    "cassiterite",
    "galena",
    "argentite",
    "pentlandite",
    "spodumene",
    "cobaltoite",
    "kimberlite",
    "emerald",
  ];
  StartupEvents.registry("item", (e) => {
    minerals.forEach((registry) => {
      e.create("raw_" + registry).texture(
        "kubejs:item/minerals/raw_" + registry
      );
    });
  });
  StartupEvents.registry("block", (e) => {
    minerals.forEach((registry) => {
      e.create(registry + "_ore")
        .textureAll("kubejs:block/minerals/" + registry + "_ore")
        .soundType("stone")
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_iron_tool");
    });
  });
} else {
}
