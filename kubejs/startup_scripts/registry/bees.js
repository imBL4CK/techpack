StartupEvents.registry("item", (e) => {
  let bees = [
    {
      species: "common",
      droneHealth: 10,
      queenHealth: 30,
      habit: "daytime",
      comb: "sweet"
    },
    {
      species: "boreal",
      droneHealth: 10,
      queenHealth: 30,
      habit: "daytime",
      comb: "sticky"
    },
  ];
  bees.forEach((registry) => {
    e.create(`techpack:${registry.species}_bee_drone`).texture(`techpack:item/bees/${registry.species}_bee_drone`).maxStackSize(1).maxDamage(registry.droneHealth).tooltip(`This bee only works during ${registry.habit}`).tag("techpack:bees").tag("techpack:bees/drones");
    e.create(`techpack:${registry.species}_bee_queen`).texture(`techpack:item/bees/${registry.species}_bee_queen`).maxStackSize(1).maxDamage(registry.queenHealth).tooltip(`This bee only works during ${registry.habit}`).tag("techpack:bees").tag("techpack:bees/queens");
  });
  bees.forEach((registry) => {
    e.create(`techpack:${registry.comb}_comb`).texture(`techpack:item/combs/${registry.comb}_comb`).tag("techpack:combs");
  });
});