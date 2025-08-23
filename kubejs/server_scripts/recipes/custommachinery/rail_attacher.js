ServerEvents.recipes((e) => {
  //Vanilla Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/steel", 2)
      .requireItemTag("forge:rods/wooden")
      .produceItem(Item.of("minecraft:rail", 32))
      .requireEnergy(200);
  }
  //Vanilla Rail with copper
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/copper", 2)
      .requireItemTag("forge:rods/wooden")
      .produceItem(Item.of("minecraft:rail", 16))
      .requireEnergy(200);
  }
  //Powered Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/gold")
      .requireItemTag("forge:dusts/redstone")
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("minecraft:powered_rail", 4))
      .requireEnergy(200);
  }
  //Spiked Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/silver")
      .requireItemTag("forge:dusts/redstone")
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("caverns_and_chasms:spiked_rail", 4))
      .requireEnergy(200);
  }
  //Detector Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:stone_pressure_plate")
      .requireItemTag("forge:dusts/redstone")
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("minecraft:detector_rail", 4))
      .requireEnergy(200);
  }
  //Activator Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:redstone_torch")
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("minecraft:activator_rail", 4))
      .requireEnergy(200);
  }
  //Prismarine Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:dusts/prismarine")
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("thermal:prismarine_rail", 4))
      .requireEnergy(200);
  }
  //Prismarine Crossover Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("thermal:prismarine_rail", 2))
      .produceItem(Item.of("thermal:prismarine_crossover_rail", 2))
      .requireEnergy(200);
  }
  //Prismarine Powered Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:dusts/prismarine")
      .requireItem(Item.of("minecraft:powered_rail", 2))
      .produceItem(Item.of("thermal:prismarine_powered_rail", 4))
      .requireEnergy(200);
  }
  //Prismarine Activator Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:dusts/prismarine")
      .requireItem(Item.of("minecraft:activator_rail", 2))
      .produceItem(Item.of("thermal:prismarine_activator_rail", 4))
      .requireEnergy(200);
  }
  //Prismarine Detector Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:dusts/prismarine")
      .requireItem(Item.of("minecraft:detector_rail", 2))
      .produceItem(Item.of("thermal:prismarine_detector_rail", 4))
      .requireEnergy(200);
  }
  //Lumium Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/lumium")
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("thermal:lumium_rail", 4))
      .requireEnergy(200);
  }
  //Lumium Crossover Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("thermal:lumium_rail", 2))
      .produceItem(Item.of("thermal:lumium_crossover_rail", 2))
      .requireEnergy(200);
  }
  //Lumium Powered Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/lumium")
      .requireItem(Item.of("minecraft:powered_rail", 2))
      .produceItem(Item.of("thermal:lumium_powered_rail", 4))
      .requireEnergy(200);
  }
  //Lumium Activator Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/lumium")
      .requireItem(Item.of("minecraft:activator_rail", 2))
      .produceItem(Item.of("thermal:lumium_activator_rail", 4))
      .requireEnergy(200);
  }
  //Lumium Detector Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/lumium")
      .requireItem(Item.of("minecraft:detector_rail", 2))
      .produceItem(Item.of("thermal:lumium_detector_rail", 4))
      .requireEnergy(200);
  }
  //Rail Turn
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("minecraft:rail", 2))
      .requireItem("minecraft:lever")
      .produceItem(Item.of("moreminecarts:rail_turn", 4))
      .requireEnergy(200);
  }
  //Parallel Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("minecraft:rail", 2))
      .requireItemTag("minecraft:stone_tools_materials")
      .produceItem(Item.of("moreminecarts:parallel_rail", 4))
      .requireEnergy(200);
  }
  //Rail Crossing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("minecraft:rail", 2))
      .produceItem(Item.of("moreminecarts:cross_rail", 2))
      .requireEnergy(200);
  }
  //Holograph Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("minecraft:rail", 2))
      .requireItem("moreminecarts:hard_light_lens")
      .produceItem(Item.of("moreminecarts:projector_rail", 4))
      .requireEnergy(200);
  }
  //Wooden Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("minecraft:planks", 2)
      .requireItemTag("forge:rods/wooden")
      .produceItem(Item.of("moreminecarts:wooden_rail", 16))
      .requireEnergy(200);
  }
  //Wooden Rail Turn
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:wooden_rail", 2))
      .requireItem("minecraft:lever")
      .produceItem(Item.of("moreminecarts:wooden_rail_turn", 4))
      .requireEnergy(200);
  }
  //Wooden Parallel Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:wooden_rail", 2))
      .requireItemTag("minecraft:stone_tools_materials")
      .produceItem(Item.of("moreminecarts:wooden_parallel_rail", 4))
      .requireEnergy(200);
  }
  //Wooden Rail Crossing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:wooden_rail", 2))
      .produceItem(Item.of("moreminecarts:wooden_cross_rail", 2))
      .requireEnergy(200);
  }
  //Wooden Holograph Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:wooden_rail", 2))
      .requireItem("moreminecarts:hard_light_lens")
      .produceItem(Item.of("moreminecarts:wooden_projector_rail", 4))
      .requireEnergy(200);
  }
  //Maglev Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:silica_steel", 2))
      .requireItem("moreminecarts:levitation_powder")
      .requireItemTag("forge:rods/wooden")
      .produceItem(Item.of("moreminecarts:maglev_rail", 16))
      .requireEnergy(200);
  }
  //Maglev Rail Turn
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:maglev_rail", 2))
      .requireItem("minecraft:lever")
      .produceItem(Item.of("moreminecarts:maglev_rail_turn", 4))
      .requireEnergy(200);
  }
  //Maglev Parallel Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:maglev_rail", 2))
      .requireItemTag("minecraft:stone_tools_materials")
      .produceItem(Item.of("moreminecarts:maglev_parallel_rail", 4))
      .requireEnergy(200);
  }
  //Maglev Rail Crossing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:maglev_rail", 2))
      .produceItem(Item.of("moreminecarts:maglev_cross_rail", 2))
      .requireEnergy(200);
  }
  //Maglev Holograph Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:maglev_rail", 2))
      .requireItem("moreminecarts:hard_light_lens")
      .produceItem(Item.of("moreminecarts:maglev_projector_rail", 4))
      .requireEnergy(200);
  }
  //Maglev Powered Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:silica_steel", 2))
      .requireItem(Item.of("moreminecarts:levitation_powder", 1))
      .requireItemTag("forge:ingots/gold", 2)
      .requireItemTag("forge:dusts/redstone")
      .produceItem(Item.of("moreminecarts:maglev_powered_rail", 8))
      .requireEnergy(200);
  }
  //Lightspeed Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:maglev_rail", 2))
      .requireItem("minecraft:packed_ice")
      .requireItem("moreminecarts:hard_light_lens")
      .produceItem(Item.of("moreminecarts:lightspeed_rail", 8))
      .requireEnergy(200);
  }
  //Lightspeed Rail Crossing
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:lightspeed_rail", 2))
      .produceItem(Item.of("moreminecarts:lightspeed_cross_rail", 2))
      .requireEnergy(200);
  }
  //Turbo Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:maglev_powered_rail", 2))
      .requireItem("minecraft:packed_ice")
      .requireItem("moreminecarts:hard_light_lens")
      .produceItem(Item.of("moreminecarts:lightspeed_powered_rail", 4))
      .requireEnergy(200);
  }
  //Bioluminescent Rail with glowstone
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:wooden_rail", 4))
      .requireItemTag("minecraft:dusts/glowstone")
      .produceItem(Item.of("moreminecarts:bioluminescent_rail", 8))
      .requireEnergy(200);
  }
  //Bioluminescent Rail with glow berries
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem(Item.of("moreminecarts:wooden_rail", 4))
      .requireItem("minecraft:glow_berries")
      .produceItem(Item.of("moreminecarts:bioluminescent_rail", 8))
      .requireEnergy(200);
  }
  //Locking Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:rail")
      .requireItem("moreminecarts:silica_steel")
      .produceItem(Item.of("moreminecarts:locking_rail", 2))
      .requireEnergy(200);
  }
  //Powered Locking Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:powered_rail")
      .requireItem("moreminecarts:silica_steel")
      .produceItem(Item.of("moreminecarts:powered_locking_rail", 2))
      .requireEnergy(200);
  }
  //Piston Adjuster Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:activator_rail")
      .requireItemTag("forge:glass")
      .produceItem(Item.of("moreminecarts:piston_lifter_rail", 2))
      .requireEnergy(200);
  }
  //Signal Switch Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:rail")
      .requireItem("minecraft:comparator")
      .produceItem(Item.of("moreminecarts:arithmetic_rail", 2))
      .requireEnergy(200);
  }
  //Controller Rail
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItemTag("forge:ingots/gold", 3)
      .requireItem("create:electron_tube")
      .requireItemTag("forge:rods/wooden")
      .produceItem(Item.of("create:controller_rail", 2))
      .requireEnergy(200);
  }
  //Underwater Minecart
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:minecart")
      .requireItem("minecraft:prismarine")
      .requireItemTag("forge:glass", 2)
      .produceItem("thermal:underwater_minecart")
      .requireEnergy(200);
  }
  //Redstone Flux Minecart
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:minecart")
      .requireItem("thermal:energy_cell")
      .produceItem("thermal:energy_minecart")
      .requireEnergy(200);
  }
  //Fluid Tank Minecart
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("minecraft:minecart")
      .requireItem("thermal:fluid_cell")
      .produceItem("thermal:fluid_minecart")
      .requireEnergy(200);
  }
  //Aerodynamic Minecart Upgrade Kit
  {
    e.recipes.custommachinery
      .custom_machine("custommachinery:industrialrevival/rail_attacher", 300)
      .requireItem("moreminecarts:silica_steel")
      .requireItem(Item.of("moreminecarts:levitation_powder", 2))
      .requireItemTag("forge:gems/amethyst")
      .produceItem("moreminecarts:high_speed_upgrade")
      .requireEnergy(200);
  }
});
