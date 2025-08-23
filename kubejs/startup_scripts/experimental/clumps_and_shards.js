let enabled = false;

if (enabled === true) {
  StartupEvents.registry("item", (e) => {
    let shardsandclumps = [
      "iron",
      "copper",
      "gold",
      "tin",
      "lead",
      "silver",
      "nickel",
      "zinc",
      "lithium",
      "cobalt",
    ];
    shardsandclumps.forEach((registry) => {
      e.create(`${registry}_shard`);
      e.create(`${registry}_clump`);
    });
  });
} else {
}
