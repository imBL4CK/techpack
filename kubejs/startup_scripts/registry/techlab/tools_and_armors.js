StartupEvents.registry("item", (e) => {
  //Wrench
  {
    e.create("wrench", "pickaxe")
      .tier("wrench")
      .maxStackSize(1);
  }
  //Elder Miner's Pickaxe
  {
    e.create("elder_miners_pickaxe", "pickaxe")
      .maxStackSize(1)
      .tier("elder_miners_pickaxe")
      .displayName("Elder Miner's Pickaxe");
  }
  //Primitive Fishing Net
  {
    e.create("primitive_fishing_net")
      .maxStackSize(1)
      .maxDamage(256);
  }
  //Primitive Saw
  {
    e.create("primitive_saw", "axe")
      .maxStackSize(1)
      .tier("primitive_tier")
      .tag("forge:tools/saw");
  }
  //Primitive Hammer
  {
    e.create("primitive_hammer", "pickaxe")
      .maxStackSize(1)
      .tier("primitive_tier")
      .tag("forge:tools/hammer");
  }
  //Primitive Wirecutter
  {
    e.create("primitive_wirecutter", "shears")
      .maxStackSize(1)
      .maxDamage(128)
      .tag("forge:tools/wirecutter");
  }
  //Rustic Saw
  {
    e.create("rustic_saw", "axe")
      .maxStackSize(1)
      .tier("rustic_tier")
      .tag("forge:tools/saw");
  }
  //Rustic Hammer
  {
    e.create("rustic_hammer", "pickaxe")
      .maxStackSize(1)
      .tier("rustic_tier")
      .tag("forge:tools/hammer");
  }
  //Rustic Wirecutter
  {
    e.create("rustic_wirecutter", "shears")
    .maxStackSize(1)
    .maxDamage(312)
    .tag("forge:tools/wirecutter");
  }
  //Basic Saw
  {
    e.create("basic_saw", "axe")
      .maxStackSize(1)
      .tier("basic_tier")
      .tag("forge:tools/saw");
  }
  //Basic Hammer
  {
    e.create("basic_hammer", "pickaxe")
      .maxStackSize(1)
      .tier("basic_tier")
      .tag("forge:tools/hammer");
  }
  //Basic Wirecutter
  {
    e.create("basic_wirecutter", "shears")
      .maxStackSize(1)
      .maxDamage(312)
      .tag("forge:tools/wirecutter");
  }
  //Reinforced Armor
  {
  e.create("reinforced_armor_helmet", "helmet")
  .tier("reinforced_armor");

  e.create("reinforced_armor_chestplate", "chestplate")
  .tier("reinforced_armor");

  e.create("reinforced_armor_leggings", "leggings")
  .tier("reinforced_armor");

  e.create("reinforced_armor_boots", "boots")
  .tier("reinforced_armor");
  }
  //Boots of the traveller
  {
    e.create("boots_of_the_traveller", "boots")
      .tier("boots_of_the_traveller");
  }
  //Bronze Drill
  {
    e.create("bronze_drill")
      .maxStackSize(1)
      .maxDamage(512)
      .tag("techpack:miners_drill");
  }
  //Steel Drill
  {
    e.create("steel_drill")
      .maxStackSize(1)
      .maxDamage(1024)
      .tag("techpack:miners_drill");
  }
  //Magic Mirror
  {
    e.create("magic_mirror")
      .maxStackSize(1)
      .maxDamage(3)
  }
});
