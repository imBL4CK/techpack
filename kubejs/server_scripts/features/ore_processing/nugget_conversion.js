ServerEvents.recipes((e) => {
  let ingotMaterials = [
    "tin",
    "silver",
    "nickel",
    "platinum",
    "aluminum",
    "chromium",
    "uranium",
    "calorite",
    "steel",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "flux_infused_alloy",
    "kanthal",
    "advanced_alloy",
    "stainless_steel",
    "stellarithe",
    "lithium"
  ]
  ingotMaterials.forEach((craft) => {
    e.shapeless(`9x techpack:${craft}_nugget`,`techpack:${craft}_ingot`).id(`techpack:library/minecraft/shapeless/material_conversion/${craft}_nugget`);
  });
  ingotMaterials.forEach((craft) => {
    e.shaped(`techpack:${craft}_ingot`,['NNN','NNN', 'NNN'],{N: `techpack:${craft}_nugget`}).id(`techpack:library/minecraft/shaped/material_conversion/${craft}_ingot`);
  });

  e.shapeless(`9x techpack:diamond_nugget`,`minecraft:diamond`).id(`techpack:library/minecraft/shapeless/material_conversion/diamond_nugget`);
  e.shaped(`minecraft:diamond`,['NNN','NNN', 'NNN'],{N: `techpack:diamond_nugget`}).id(`techpack:library/minecraft/shaped/material_conversion/diamond_ingot`);
});