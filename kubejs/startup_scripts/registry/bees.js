import { beeSpecies } from "./bee_species";

StartupEvents.registry("item", (e) => {
  beeSpecies.forEach((registry) => {
    e.create(`techpack:${registry.species}_bee_drone`).texture(`techpack:item/bees/${registry.species}_bee_drone`).unstackable().maxDamage(registry.droneHealth).tooltip(`This bee is active during ${registry.periodOfActivity}`).tag("techpack:bees").tag("techpack:bees/drones");
    e.create(`techpack:${registry.species}_bee_queen`).texture(`techpack:item/bees/${registry.species}_bee_queen`).unstackable().maxDamage(registry.queenHealth).tooltip(`This bee is active during ${registry.periodOfActivity}`).tag("techpack:bees").tag("techpack:bees/queens");
  });
  beeSpecies.forEach((registry) => {
    e.create(`techpack:${registry.comb}_comb`).texture(`techpack:item/combs/${registry.comb}_comb`).tag("techpack:combs");
  });
});