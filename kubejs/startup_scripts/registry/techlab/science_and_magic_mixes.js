StartupEvents.registry("item", (e) => {
  
  let item = [
    "overworld_science_mix",
    "nether_science_mix",
    "the_end_science_mix"
  ];
  
  item.forEach((registry) => {
    e.create(registry);
  });
});
