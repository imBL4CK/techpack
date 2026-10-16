PlayerEvents.loggedIn((e) => {

  if (!e.player.stages.has("diet_first_log")) {
    e.player.stages.add("diet_first_log");
    e.player.runCommandSilent("diet set @p fruits 0.5")
    e.player.runCommandSilent("diet set @p grains 0.5")
    e.player.runCommandSilent("diet set @p proteins 0.5")
    e.player.runCommandSilent("diet set @p vegetables 0.5")
    e.player.runCommandSilent("diet set @p dairy 0.5")
  }
});
