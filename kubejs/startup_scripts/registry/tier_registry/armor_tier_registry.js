ItemEvents.armorTierRegistry((e) => {
  e.add("reinforced_armor", (tier) => {
    tier.durabilityMultiplier = 15; 
    tier.slotProtections = [3, 8, 6, 3];
    tier.enchantmentValue = 11;
    tier.equipSound = "minecraft:item.armor.equip_iron";
    tier.repairIngredient = "kubejs:advanced_alloy_ingot";
    tier.toughness = 2.0; 
    tier.knockbackResistance = 0.5;
  });
  e.add("boots_of_the_traveller", (tier =>{
    tier.durabilityMultiplier = 10; 
    tier.slotProtections = [2];
    tier.enchantmentValue = 9;
    tier.equipSound = "minecraft:item.armor.equip_iron";
    tier.repairIngredient = "#forge:leather";
    tier.toughness = 1.0; 
    tier.knockbackResistance = 0.0;
  }))
});
