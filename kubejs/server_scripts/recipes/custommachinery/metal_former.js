ServerEvents.recipes((e) => {
  let materials = [
    "brass",
    "bronze",
    "constantan",
    "copper",
    "electrum",
    "energized_steel",
    "gold",
    "invar",
    "iron",
    "lead",
    "nickel",
    "netherite",
    "red_alloy",
    "silver",
    "steel",
    "tin",
    "zinc",
    "advanced_alloy",
    "stainless_steel",
    "shadow_bronze",
  ];
  materials.forEach((material) => {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/metal_former", 200)
      .requireEnergy(1000)
      .requireItemTag("#forge:ingots/" + material)
      .produceItem("#forge:plates/" + material);
  });
});
