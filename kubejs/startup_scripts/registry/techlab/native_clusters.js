StartupEvents.registry("item", (e) => {
  
  let native = [
    "copper",
    "iron",
    "gold",
    "tin",
    "nickel",
    "lead",
    "silver",
    "zinc",
    "redstone",
    "diamond",
    "cinnabar",
  ];

  native.forEach((registry) => {
    e.create(`native_${registry}_cluster`).texture(
      `kubejs:item/native_clusters/native_${registry}_cluster`
    );
  });
});
