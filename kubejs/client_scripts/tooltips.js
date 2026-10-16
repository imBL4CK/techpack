ItemEvents.modifyTooltips((e) => {
  const yellow = 0xffd200
  const red = 0xf44336
  const green = 0x1ef000
  const gold = 0xffaa00

  //Simple Tooltips
  e.add("supplementaries:wrench", "Rotate the faces of a block")

  //Advanced Tooltips
  e.modify("#techpack:coming_soon", (tooltip) => {
    tooltip.insert(1, Text.of("⚠ This item/block was disabled temporarily").color(red));
  });
  e.modify("#techpack:fast_remove", (tooltip) => {
    tooltip.insert(1, Text.of("⚠ This item/block was completely removed ").color(red));
  });
  e.modify(["malum:encyclopedia_esoterica", "malum:encyclopedia_arcana"], (tooltip) => {
    tooltip.insert(1, Text.of("⚠ The recipes may be incorrect; please verify them using EMI/JEI.").color(red));
  });
  e.modify("techpack:glitch_knife", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.glitch_knife.tooltip.1").color(0x7f3fb2));
  });
  e.modify("industrialforegoing:laser_drill", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.laser_drill.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:bioreactor", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.bioreactor.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:biofuel_generator", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.biofuel_generator.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:stasis_chamber", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.stasis_chamber.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:hydroponic_bed", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.hydroponic_bed.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:wither_builder", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.wither_builder.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:mob_duplicator", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.mob_duplicator.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:dissolution_chamber", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.dissolution_chamber.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:latex_processing_unit", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.latex_processing.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:plant_gatherer", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.plant_gatherer.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:plant_fertilizer", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.plant_fertilizer.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:plant_sower", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.plant_sower.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:sewer", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.sewer.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:sewage_composter", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.sewage_composter.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:mob_slaughter_factory", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.mob_slaughter_factory.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:mob_crusher", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.mob_crusher.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:animal_rancher", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.animal_rancher.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:animal_feeder", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.animal_feeder.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:animal_baby_separator", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.animal_baby_separator.tooltip.1").color(yellow));
  });
  e.modify("ftbquests:book", (tooltip) => {
    tooltip.insert(1, Text.of("by StarCorp").color(gold));
  });
  e.modify("pneumaticcraft:plastic", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.plastic_sheet.tooltip.1"));
  });
  e.modify("techpack:hdpe_sheet", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.hdpe_sheet.tooltip.1"));
  });
  e.modify("techpack:bio_plastic_sheet", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.bio_plastic_sheet.tooltip.1"));
  });
  e.modify("techpack:ptfe_sheet", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.ptfe_sheet.tooltip.1"));
  });
  e.modify("techpack:constantan_coil_block", (tooltip) => {
    tooltip.insert(1, Text.of("- Energy Input: 1.0").color(gold));
    tooltip.insert(1, Text.of("- Recipe Speed: 1.0").color(gold));
  });
  e.modify("techpack:kanthal_coil_block", (tooltip) => {
    tooltip.insert(1, Text.of("- Energy Input: 1.75").color(gold));
    tooltip.insert(1, Text.of("- Recipe Speed: 1.5").color(gold));
  });

  //Pipez Connectors
  e.modify("pipez:improved_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Incrases I/O of the Connections.").color(yellow));
    tooltip.insert(2, Text.of("- Enables Redstone and Distribution modes.").color(green));
    tooltip.insert(3, Text.of("- Redstone-Flux Cable > 16.000 RF/t"));
    tooltip.insert(4, Text.of("- Bronze Fluid Pipe > 4.000 mB/t"));
    tooltip.insert(5, Text.of("- Logistical Tube > 8 per Operation"));
  });
  e.modify("pipez:advanced_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Incrases I/O of the Connections.").color(yellow));
    tooltip.insert(2, Text.of("- Enables Redstone, Distribution and Filter modes.").color(green));
    tooltip.insert(3, Text.of("- Redstone-Flux Cable > 64.000 RF/t"));
    tooltip.insert(4, Text.of("- Bronze Fluid Pipe > 16.000 mB/t"));
    tooltip.insert(5, Text.of("- Logistical Tube > 16 per Operation"));
  });
  e.modify("pipez:ultimate_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Incrases I/O of the Connections.").color(yellow));
    tooltip.insert(2, Text.of("- Enables Redstone, Distribution and Filter modes.").color(green));
    tooltip.insert(3, Text.of("- Redstone-Flux Cable > 256.000 RF/t"));
    tooltip.insert(4, Text.of("- Bronze Fluid Pipe > 64.000 mB/t"));
    tooltip.insert(5, Text.of("- Logistical Tube > 64 per Operation"));
  });
  e.modify("pipez:infinity_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Completely Removes Transfer Limits").color(yellow));
  });
  e.modify("pipez:energy_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 4,000 RF/t (Without Modules)"));
  });
  e.modify("pipez:fluid_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 1,000 mB/t (Without Modules)"));
  });
  e.modify("pipez:item_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 4 Items per Operation (Without Modules)"));
    tooltip.insert(2, Text.of("- An operation Occurs Every 20 Ticks (1 second).").color(yellow));
  });
  e.modify("pipez:universal_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 4,000 RF/t (Without Modules)"));
    tooltip.insert(2, Text.of("- Transfers 1,000 mB/t (Without Modules)"));
    tooltip.insert(3, Text.of("- Transfers 4 Items per Operation (Without Modules)"));
    tooltip.insert(4, Text.of("- An operation Occurs Every 20 Ticks (1 second).").color(yellow));
  });
  
  //Integral Augments
  e.modify("techpack:advanced_integral_augment", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.unlocks_new_recipes"));
    tooltip.insert(2, Text.translate("tooltip.techpack.integral_augment_slot"));
    tooltip.insert(3, Text.translate(""));
    tooltip.insert(4, Text.translate("tooltip.techpack.when_installed"));
    tooltip.insert(5, Text.translate("tooltip.techpack.sophisticated_integral_augment"));
    tooltip.removeLine(6);
  });
  e.modify("techpack:sophisticated_integral_augment", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.unlocks_new_recipes"));
    tooltip.insert(2, Text.translate("tooltip.techpack.integral_augment_slot"));
    tooltip.insert(3, Text.translate(""));
    tooltip.insert(4, Text.translate("tooltip.techpack.when_installed"));
    tooltip.insert(5, Text.translate("tooltip.techpack.advanced_integral_augment"));
    tooltip.removeLine(6);
  
  //Battery Cells
  e.modify("techpack:zinc_battery_cell", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.battery_cell_slot"));
    tooltip.insert(2, Text.translate(""));
    tooltip.insert(3, Text.translate("tooltip.techpack.when_installed"));
    tooltip.insert(4, Text.translate("tooltip.techpack.zinc_battery_cell_1"));
    tooltip.insert(5, Text.translate("tooltip.techpack.zinc_battery_cell_2"));
    tooltip.removeLine(6);
  });
  e.modify("techpack:lead_battery_cell", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.battery_cell_slot"));
    tooltip.insert(2, Text.translate(""));
    tooltip.insert(3, Text.translate("tooltip.techpack.when_installed"));
    tooltip.insert(4, Text.translate("tooltip.techpack.lead_battery_cell_1"));
    tooltip.insert(5, Text.translate("tooltip.techpack.lead_battery_cell_2"));
    tooltip.removeLine(6);
  });
  e.modify("techpack:silver_battery_cell", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.battery_cell_slot"));
    tooltip.insert(2, Text.translate(""));
    tooltip.insert(3, Text.translate("tooltip.techpack.when_installed"));
    tooltip.insert(4, Text.translate("tooltip.techpack.silver_battery_cell_1"));
    tooltip.insert(5, Text.translate("tooltip.techpack.silver_battery_cell_2"));
    tooltip.removeLine(6);
  });
  
})
});