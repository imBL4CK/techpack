EntityEvents.afterHurt((e) => {
  // thx liopyu in latvian.dev discord for this code
  const { entity, source } = e;
  let attackingEntity = source.actual;
  if (!attackingEntity) return;
  if (attackingEntity.mainHandItem.id != "techpack:suffering_ending") return;
  entity.potionEffects.add("eidolon_repraised:vulnerable", 300, 0, false, true);
});
LootJS.modifiers((e) => {
  e.addTableModifier("minecraft:entities/wither_skeleton")
    .addLoot(LootEntry.of("minecraft:wither_skeleton_skull")
      .randomChance(0.5)
      .when(c => c.matchMainHand("techpack:suffering_ending")
  ))
  e.addTableModifier("minecraft:entities/skeleton")
    .addLoot(LootEntry.of("minecraft:skeleton_skull")
      .randomChance(0.5)
      .when(c => c.matchMainHand("techpack:suffering_ending")
  ))
  e.addTableModifier("minecraft:entities/zombie")
    .addLoot(LootEntry.of("minecraft:zombie_head")
      .randomChance(0.5)
      .when(c => c.matchMainHand("techpack:suffering_ending")
  ))
  e.addTableModifier("minecraft:entities/piglin")
    .addLoot(LootEntry.of("minecraft:piglin_head")
      .randomChance(0.5)
      .when(c => c.matchMainHand("techpack:suffering_ending")
  ))
  e.addTableModifier("minecraft:entities/creeper")
    .addLoot(LootEntry.of("minecraft:creeper_head")
      .randomChance(0.5)
      .when(c => c.matchMainHand("techpack:suffering_ending")
  ))
  e.addTableModifier("minecraft:entities/warden")
    .addLoot(LootEntry.of("techpack:warden_totem")
      .randomChance(0.5)
      .when(c => c.matchMainHand("techpack:suffering_ending")
  ))
});
