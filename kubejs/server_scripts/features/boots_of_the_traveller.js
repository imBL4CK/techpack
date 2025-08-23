let enabled = true;

if (enabled === true) {
  PlayerEvents.tick((e) => {

    const { player } = e;

    if(player.feetArmorItem.id == "kubejs:boots_of_the_traveller") {
        player.runCommandSilent("effect give @p minecraft:speed 1 0 true")
    }
  }); 
}