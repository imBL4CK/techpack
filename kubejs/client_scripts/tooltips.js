ItemEvents.modifyTooltips((e) => {
  const yellow = 0xffd200
  const red = 0xf44336
  const green = 0x1ef000

  e.modify("#techpack:coming_soon", (tooltip) => {
    tooltip.insert(1, Text.of("⚠ This item/block was disabled temporarily").color(red));
  });
  e.modify("#techpack:fast_remove", (tooltip) => {
    tooltip.insert(1, Text.of("⚠ This item/block was completely removed ").color(red));
  });
  e.modify(["malum:encyclopedia_esoterica", "malum:encyclopedia_arcana"], (tooltip) => {
    tooltip.insert(1, Text.of("⚠ The recipes may be incorrect; please verify them using EMI/JEI.").color(red));
  });
  e.add("techpack:ptfe_sheet", "Aka polytetrafluoroethylene sheet")
  e.add("stellaris:space_suit_chestplate", "To add oxygen, you can insert it into a tank that has an output slot")
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
  e.add("supplementaries:wrench", "Rotate the faces of a block")

  e.modify(["stellaris:tablet", "ftbquests:book"], (tooltip) => {
    tooltip.insert(1, Text.of("by StarCorp").color(yellow));
  });
  e.modify("techpack:glitch_knife", (tooltip) => {
    tooltip.insert(1, Text.translate("item.techpack.glitch_knife.tooltip.1"));
    tooltip.insert(2, Text.translate("item.techpack.glitch_knife.tooltip.2").color(0x7f3fb2));
  });
  e.modify("industrialforegoing:laser_drill", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.energy_cost.laser_drill.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:bioreactor", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.energy_cost.bioreactor.tooltip.1").color(yellow));
  });
  e.modify("industrialforegoing:biofuel_generator", (tooltip) => {
    tooltip.insert(1, Text.translate("tooltip.techpack.energy_cost.biofuel_generator.tooltip.1").color(yellow));
  });
});