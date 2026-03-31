LootJS.modifiers(e => {
    e.addTableModifier("minecraft:chests/ancient_city")
    .addLoot(LootEntry.of("techpack:warden_totem").randomChance(0.1))
})