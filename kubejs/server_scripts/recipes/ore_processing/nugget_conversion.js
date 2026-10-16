ServerEvents.recipes((e) => {
  let ingotMaterials = [
    "tin",
    "nickel",
    "aluminum",
    "chromium",
    "bronze",
    "electrum",
    "invar",
    "constantan",
    "flux_infused_alloy",
    "kanthal",
    "advanced_alloy",
    "stainless_steel",
    "lithium",
    "annealed_copper"
  ]
  ingotMaterials.forEach((craft) => {
    e.shapeless(`9x techpack:${craft}_nugget`,`techpack:${craft}_ingot`).id(`techpack:library/minecraft/shapeless/material_conversion/${craft}_nugget`);
  });
  ingotMaterials.forEach((craft) => {
    e.shaped(`techpack:${craft}_ingot`,['NNN','NNN', 'NNN'],{N: `techpack:${craft}_nugget`}).id(`techpack:library/minecraft/shaped/material_conversion/${craft}_ingot`);
  });
});