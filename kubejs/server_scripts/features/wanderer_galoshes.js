PlayerEvents.tick((e) => {
  if (e.player.feetArmorItem.id !== "techpack:wanderer_galoshes") return;

  if (e.player.feetArmorItem.id === "techpack:wanderer_galoshes") {
    e.player.runCommandSilent("effect give @p minecraft:speed 1 0 true")
  }
  else {};
});