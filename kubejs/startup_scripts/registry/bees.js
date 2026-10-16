StartupEvents.registry("item", (e) => {
  global.beeSpecies.forEach((registry) => {
    //Drones
    e.create(`techpack:${registry.species}_bee_drone`)
      .texture(`techpack:item/bees/${registry.species}_bee_drone`)
      .maxDamage(registry.health)
      .tag("techpack:bees")
      .tag("techpack:bees/drones")
      .unstackable();
    //Queens
    e.create(`techpack:${registry.species}_bee_queen`)
      .texture(`techpack:item/bees/${registry.species}_bee_queen`)
      .maxDamage(registry.health*2)
      .tag("techpack:bees")
      .tag("techpack:bees/queens")
      .unstackable();
  });
  global.combTypes.forEach((registry) => {
    e.create(`techpack:${registry.id}_comb`)
      .texture("layer0", "techpack:item/comb_layer_0")
      .texture("layer1", "techpack:item/comb_layer_1")
      .color(0, registry.color[0])
      .color(1, registry.color[1])
      .tag("techpack:combs");
  });
});