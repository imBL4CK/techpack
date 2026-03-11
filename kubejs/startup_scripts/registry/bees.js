import { beeSpecies } from "./bee_species";
import { combTypes } from "./bee_species";

StartupEvents.registry("item", (e) => {
  beeSpecies.forEach((registry) => {
    //Drones
    e.create(`techpack:${registry.species}_bee_drone`)
      .texture(`techpack:item/bees/${registry.species}_bee_drone`)
      .maxDamage(registry.droneHealth)
      .tooltip(`This bee is active during ${registry.periodOfActivity}`)
      .tag("techpack:bees")
      .tag("techpack:bees/drones")
      .unstackable();
    //Princesses
    e.create(`techpack:${registry.species}_bee_princess`)
      .texture(`techpack:item/bees/${registry.species}_bee_princess`)
      .maxDamage(registry.droneHealth)
      .tooltip(`This bee is active during ${registry.periodOfActivity}`)
      .tag("techpack:bees")
      .tag("techpack:bees/princesses")
      .unstackable();
    //Queens
    e.create(`techpack:${registry.species}_bee_queen`)
      .texture(`techpack:item/bees/${registry.species}_bee_queen`)
      .maxDamage(registry.queenHealth)
      .tooltip(`This bee is active during ${registry.periodOfActivity}`)
      .tag("techpack:bees")
      .tag("techpack:bees/queens")
      .unstackable();
  });
  combTypes.forEach((registry) => {
    e.create(`techpack:${registry}_comb`)
      .texture(`techpack:item/combs/${registry}_comb`)
      .tag("techpack:combs");
  });
});