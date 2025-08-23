ServerEvents.tags("item", (e) => {
  const ADDcustomtag = [
    //TFMG Plastic
    {
      tag: "forge:plastic",
      item: "tfmg:plastic_sheet",
    },
    //Pneumaticcraft Plastic
    {
      tag: "forge:plastic",
      item: "pneumaticcraft:plastic",
    },
    //Pneumaticcraft Plastic 2
    {
      tag: "forge:ingots/plastic",
      item: "pneumaticcraft:plastic",
    },
    //Wooden Board
    {
      tag: "forge:plates/wood",
      item: "kubejs:wooden_board",
    },
    //Wooden Gear
    {
      tag: "forge:gears/wood",
      item: "kubejs:wooden_gear",
    },
    //Techpack Crafting Tools
    {
      tag: "techpack:crafting_tools",
      item: [
        "kubejs:primitive_hammer",
        "kubejs:primitive_saw",
        "kubejs:primitive_wirecutter",
        "kubejs:rustic_hammer",
        "kubejs:rustic_saw",
        "kubejs:rustic_wirecutter",
        "kubejs:basic_hammer",
        "kubejs:basic_saw",
        "kubejs:basic_wirecutter",
      ],
    },
    //Techpack Blend Tags
    {
      tag: "techpack:blends",
      item: [
        "thermal:steel_dust",
        "thermal:rose_gold_dust",
        "thermal:bronze_dust",
        "thermal:electrum_dust",
        "thermal:invar_dust",
        "thermal:constantan_dust",
        "thermal:signalum_dust",
        "thermal:lumium_dust",
        "thermal:enderium_dust",
        "thermalendergy:prismalium_dust",
        "thermalendergy:stellarium_dust",
        "thermalendergy:melodium_dust",
      ],
    },
    //Techpack Catalysts
    {
      tag: "techpack:catalysts",
      item: ["minecraft:glowstone_dust", "minecraft:redstone"],
    },
    //Coal Coke
    {
      tag: "forge:coal_coke",
      item: "tfmg:coal_coke",
    },
    //Actually Goggles
    {
      tag: "curios:head",
      item: [
        "actuallyadditions:engineers_goggles",
        "actuallyadditions:engineers_goggles_advanced",
      ],
    },
    //Zinc Plate
    {
      tag: "forge:plates/zinc",
      item: "createdeco:zinc_sheet",
    },
    //Forge Wires
    {
      tag: "forge:wires",
      item: ["tfmg:copper_wire", "tfmg:aluminum_wire"],
    },
    //Charcoal Block
    {
      tag: "forge:storage_blocks",
      item: "architects_palette:charcoal_block",
    },
    //Charcoal Block 2
    {
      tag: "forge:storage_blocks/charcoal",
      item: "architects_palette:charcoal_block",
    },
    //Coal Coke Block
    {
      tag: "forge:storage_blocks",
      item: "tfmg:coal_coke_block",
    },
    //Coal Coke Block 2
    {
      tag: "forge:storage_blocks/coal_coke",
      item: "tfmg:coal_coke_block",
    },
    //Industrial Iron Ingot
    {
      tag: "forge:ingots",
      item: "createdeco:industrial_iron_ingot",
    },
    //Industrial Iron Ingot 2
    {
      tag: "forge:ingots/cast_iron",
      item: "createdeco:industrial_iron_ingot",
    },
    //Cast Iron
    {
      tag: "createdeco:internal/ingots/industrial_iron_ingots",
      item: "tfmg:cast_iron_ingot",
    },
    //Bio Plastic Mesh
    {
      tag: "forge:plastic",
      item: "kubejs:bio_plastic_mesh",
    },
    //Magnetic Ingot
    {
      tag: "forge:ingots/energized_steel",
      item: "tfmg:magnetic_ingot",
    },
    //Zinc Dust
    {
      tag: "forge:dusts/zinc",
      item: "kubejs:zinc_dust",
    },
    //Amethyst Dust
    {
      tag: "forge:dusts/amethyst",
      item: "kubejs:amethyst_dust",
    },
    //Forge Dusts
    {
      tag: "forge:dusts",
      item: ["kubejs:amethyst_dust", "kubejs:zinc_dust"],
    },
    //Forge Ingots
    {
      tag: "forge:ingots",
      item: ["kubejs:stainless_steel_ingot", "kubejs:shadow_bronze_ingot"],
    },
    //Forge Plates
    {
      tag: "forge:plates",
      item: ["kubejs:stainless_steel_plate", "kubejs:shadow_bronze_plate"],
    },
    //Forge Gear
    {
      tag: "forge:plates",
      item: ["kubejs:stainless_steel_gear", "kubejs:shadow_bronze_gear"],
    },
    //Forge Tools/Wrench
    {
      tag: "forge:tools/wrench",
      item: ["kubejs:wrench"],
    },
    //Slag
    {
      tag: "forge:slag",
      item: ["tfmg:slag"],
    },
    //Sulfur
    {
      tag: "forge:gems/sulfur",
      item: ["tfmg:sulfur_dust"],
    },
    //Bitumen
    {
      tag: "forge:bitumen",
      item: ["tfmg:bitumen"],
    },
    //Alchemical Brass Ingot compat w brass
    {
      tag: "forge:ingots/brass",
      item: "kubejs:alchemical_brass_ingot",
    },
    //Alchemical Brass Plate compat w brass
    {
      tag: "forge:plates/brass",
      item: "kubejs:alchemical_brass_plate",
    },
    //Alchemical Brasss Gear compat w brass
    {
      tag: "forge:gears/brass",
      item: "kubejs:alchemical_brass_gear",
    },
    //Advanced Alloy Ingot
    {
      tag: "forge:ingots/advanced_alloy",
      item: "kubejs:advanced_alloy_ingot",
    },
    //Advanced Alloy Plate
    {
      tag: "forge:plates/advanced_alloy",
      item: "kubejs:advanced_alloy_plate",
    },
  ];
  const REMOVEcustomtag = [];
  ADDcustomtag.forEach((custom) => {
    e.add(custom.tag, custom.item);
  });
  REMOVEcustomtag.forEach((custom) => {
    e.remove(custom.tag, custom.item);
  });
});
