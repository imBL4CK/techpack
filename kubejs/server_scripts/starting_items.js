PlayerEvents.loggedIn((e) => {

  if (!e.player.stages.has("first_login")) {
    e.player.stages.add("first_login");
    e.player.give('ftbquests:book');
    e.player.give('guideme:guide[guideme:guide_id="techpack:moddedpedia"]');
    e.player.give('4x minecraft:bread');
  }
});
