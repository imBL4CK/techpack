ItemEvents.modification((e) => {
  let material = ["golden", "iron", "diamond", "caverns_and_chasms:silver"];
  
  const DisableVanillaTools = true;
  const MalignantFortressArmorBuff = true;
  const FluxArmorBuff = true;

  if (DisableVanillaTools === true) {
    material.forEach((registry) => {
      e.modify(registry + "_axe", (item) => {
        item.maxDamage = 1;
      });
      e.modify(registry + "_pickaxe", (item) => {
        item.maxDamage = 1;
      });
      e.modify(registry + "_shovel", (item) => {
        item.maxDamage = 1;
      });
    });
  }
  else {}
  if (MalignantFortressArmorBuff === true) {
    e.modify("malum:malignant_stronghold_helmet", (item) => {
      item.armorProtection = 4;
      item.armorToughness = 3;
    });
    e.modify("malum:malignant_stronghold_chestplate", (item) => {
      item.armorProtection = 10;
      item.armorToughness = 3;
    });
    e.modify("malum:malignant_stronghold_leggings", (item) => {
      item.armorProtection = 8;
      item.armorToughness = 3;
    });
    e.modify("malum:malignant_stronghold_boots", (item) => {
      item.armorProtection = 4;
      item.armorToughness = 3;
    });
  }
  else {}
  if (FluxArmorBuff === true) {
    e.modify("redstone_arsenal:flux_helmet", (item) => {
      item.armorProtection = 8;
      item.armorToughness = 3;
    });
    e.modify("redstone_arsenal:flux_chestplate", (item) => {
      item.armorProtection = 12;
      item.armorToughness = 3;
    });
    e.modify("redstone_arsenal:flux_leggings", (item) => {
      item.armorProtection = 12;
      item.armorToughness = 3;
    });
    e.modify("redstone_arsenal:flux_boots", (item) => {
      item.armorProtection = 8;
      item.armorToughness = 3;
    });
  }
  else {}
});
