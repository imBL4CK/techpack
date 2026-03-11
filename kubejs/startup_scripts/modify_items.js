ItemEvents.modification((e) => {
  e.modify("techpack:coal_coke", item => {
    item.burnTime = 6400;
  });
  e.modify("techpack:hop_graphite_dust", item => {
    item.burnTime = 6400;
  });
  e.modify("techpack:graphite_ingot", item => {
    item.burnTime = 12800;
  });
  e.modify("create:sand_paper", item => {
    item.maxDamage  = 128;
  });
  e.modify("create:red_sand_paper", item => {
    item.maxDamage  = 128;
  });

  /*const armorDefs = [
    { id: 'malum:malignant_stronghold_helmet', slot: 'head', protection: 6, toughness: 3 },
    { id: 'malum:malignant_stronghold_chestplate', slot: 'chest', protection: 10, toughness: 3 },
    { id: 'malum:malignant_stronghold_leggings', slot: 'legs', protection: 10, toughness: 3 },
    { id: 'malum:malignant_stronghold_boots', slot: 'feet', protection: 6, toughness: 3 },
    { id: 'forbidden_arcanus:tyr_helmet', slot: 'head', protection: 10, toughness: 6 },
    { id: 'forbidden_arcanus:tyr_chestplate', slot: 'chest', protection: 15, toughness: 6 },
    { id: 'forbidden_arcanus:tyr_leggings', slot: 'legs', protection: 15, toughness: 6 },
    { id: 'forbidden_arcanus:tyr_boots', slot: 'feet', protection: 10, toughness: 6 },
    { id: 'stellaris:jet_suit_helmet', slot: 'head', protection: 6, toughness: 3 },
    { id: 'stellaris:jet_suit_chestplate', slot: 'chest', protection: 10, toughness: 3 },
    { id: 'stellaris:jet_suit_leggings', slot: 'legs', protection: 10, toughness: 3 },
    { id: 'stellaris:jet_suit_boots', slot: 'feet', protection: 6, toughness: 3 },
  ];
  const slotToId = {
    head: 'minecraft:armor.helmet',
    chest: 'minecraft:armor.chestplate',
    legs: 'minecraft:armor.leggings',
    feet: 'minecraft:armor.boots'
  };
  
  armorDefs.forEach(def => {
    e.modify(def.id, item => {
      const baseItem = Item.of(item.item().id).attributeModifiers;
      const protection = baseItem.withModifierAdded(
        "generic.armor",
        { amount: def.protection, id: slotToId[def.slot], operation: "add_value" },
        def.slot
      );
      const toughness = baseItem.withModifierAdded(
        "generic.armor_toughness",
        { amount: (def.toughness ?? 3), id: slotToId[def.slot], operation: "add_value" },
        def.slot
      );
      item.setAttributeModifiersWithTooltip(toughness.modifiers());
      item.setAttributeModifiersWithTooltip(protection.modifiers());
    });
  });*/
});