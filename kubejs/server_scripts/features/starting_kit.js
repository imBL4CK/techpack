PlayerEvents.loggedIn((e) => {

  if (!e.player.stages.has("starting_kit")) {
    e.player.stages.add("starting_kit");

    e.player.give(Item.of("farmersdelight:bacon_sandwich", 8));
    e.player.give("supplementaries:sack");
    e.player.give("sophisticatedbackpacks:copper_backpack");
    e.player.give(Item.of('guideme:guide', '{guideId:"techpack:guide"}'));
  }
});
