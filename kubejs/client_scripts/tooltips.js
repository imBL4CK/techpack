ItemEvents.modifyTooltips((e) => {
  e.modify("#techpack:coming_soon", (tooltip) => {
    tooltip.insert(1, Text.of("⚠ This item/block was disabled temporarily").color(0xf44336));
  });
  e.modify("#techpack:fast_remove", (tooltip) => {
    tooltip.insert(1, Text.of("⚠ This item/block was completely removed ").color(0xf44336));
  });
  e.modify(["malum:encyclopedia_esoterica", "malum:encyclopedia_arcana"], (tooltip) => {
    tooltip.insert(1, Text.of("⚠ The recipes may be incorrect; please verify them using EMI/JEI.").color(0xf44336));
  });
  e.add("techpack:ptfe_sheet", "Aka polytetrafluoroethylene sheet")
  e.add("stellaris:space_suit_chestplate", "To add oxygen, you can insert it into a tank that has an output slot")
  e.modify("pipez:improved_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Incrases I/O of the Connections.").color(0xffd200));
    tooltip.insert(2, Text.of("- Enables Redstone and Distribution modes.").color(0x1ef000));
    tooltip.insert(3, Text.of("- Redstone-Flux Cable > 16.000 RF/t"));
    tooltip.insert(4, Text.of("- Bronze Fluid Pipe > 4.000 mB/t"));
    tooltip.insert(5, Text.of("- Logistical Tube > 8 per Operation"));
  });
  e.modify("pipez:advanced_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Incrases I/O of the Connections.").color(0xffd200));
    tooltip.insert(2, Text.of("- Enables Redstone, Distribution and Filter modes.").color(0x1ef000));
    tooltip.insert(3, Text.of("- Redstone-Flux Cable > 64.000 RF/t"));
    tooltip.insert(4, Text.of("- Bronze Fluid Pipe > 16.000 mB/t"));
    tooltip.insert(5, Text.of("- Logistical Tube > 16 per Operation"));
  });
  e.modify("pipez:ultimate_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Incrases I/O of the Connections.").color(0xffd200));
    tooltip.insert(2, Text.of("- Enables Redstone, Distribution and Filter modes.").color(0x1ef000));
    tooltip.insert(3, Text.of("- Redstone-Flux Cable > 256.000 RF/t"));
    tooltip.insert(4, Text.of("- Bronze Fluid Pipe > 64.000 mB/t"));
    tooltip.insert(5, Text.of("- Logistical Tube > 64 per Operation"));
  });
  e.modify("pipez:infinity_upgrade", (tooltip) => {
    tooltip.insert(1, Text.of("Completely Removes Transfer Limits").color(0xffd200));
  });
  e.modify("pipez:energy_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 4,000 RF/t (Without Modules)"));
  });
  e.modify("pipez:fluid_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 1,000 mB/t (Without Modules)"));
  });
  e.modify("pipez:item_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 4 Items per Operation (Without Modules)"));
    tooltip.insert(2, Text.of("- An operation Occurs Every 20 Ticks (1 second).").color(0xffd200));
  });
  e.modify("pipez:universal_pipe", (tooltip) => {
    tooltip.insert(1, Text.of("- Transfers 4,000 RF/t (Without Modules)"));
    tooltip.insert(2, Text.of("- Transfers 1,000 mB/t (Without Modules)"));
    tooltip.insert(3, Text.of("- Transfers 4 Items per Operation (Without Modules)"));
    tooltip.insert(4, Text.of("- An operation Occurs Every 20 Ticks (1 second).").color(0xffd200));
  });
  e.add("supplementaries:wrench", "Rotate the faces of a block")

  e.modify(["stellaris:tablet", "ftbquests:book"], (tooltip) => {
    tooltip.insert(1, Text.of("by StarCorp").color(0xffaa00));
  });
});