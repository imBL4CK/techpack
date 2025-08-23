StartupEvents.registry("item", (e) => {
  var enabled = true;

  if (enabled === true) {
    //Runewood Wand
    {
      e.create("runewood_wand")
        .maxStackSize(1)
        .maxDamage(150)
        .tag("techpack:wands");
    }
    //Brass Wand
    {
      e.create("brass_wand")
        .maxStackSize(1)
        .maxDamage(300)
        .tag("techpack:wands");
    }
    //Soulstained Wand
    {
      e.create("soul_stained_steel_wand")
        .maxStackSize(1)
        .maxDamage(700)
        .tag("techpack:wands");
    }
  } 
  else {}
});
