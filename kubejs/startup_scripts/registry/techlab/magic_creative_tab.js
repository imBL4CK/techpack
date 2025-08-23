StartupEvents.registry("creative_mode_tab", (e) => {
  
  e.create("techlab_magic").icon(() => "kubejs:runewood_wand")
    .content(() => [
      "kubejs:arcane_spirit_node",
      "kubejs:eldritch_spirit_node",
      "kubejs:wicked_spirit_node",
      "kubejs:sacred_spirit_node",
      "kubejs:aerial_spirit_node",
      "kubejs:earthen_spirit_node",
      "kubejs:aqueous_spirit_node",
      "kubejs:infernal_spirit_node",
      "kubejs:runewood_wand",
      "kubejs:brass_wand",
      "kubejs:ender_essence",
    ]);
});