ServerEvents.recipes((event) => {
  let logistical_id = [
    "create:linked_controller",
    "create:analog_lever",
    "create:pulse_repeater",
    "create:pulse_extender",
    "create:powered_latch",
    "create:powered_toggle_latch",
    "createaddition:redstone_relay",
    "minecraft:repeater",
    "minecraft:comparator",
  ];
  let panelPallete = [
    "kubejs:panel_block",
    "kubejs:squared_panel_block",
    "kubejs:tiled_panel_block",
    "kubejs:floor_panel_block"
  ];
  let ChiseledPanelPallete = [
    "kubejs:foiled_panel_block",
    "kubejs:chiseled_foiled_panel_block",
  ];

  logistical_id.forEach((logistical) => {
    let craft = {
      type: "minecraft:stonecutting",
      ingredient: {
        item: "kubejs:logistic_machine",
      },
      result: logistical,
      count: 1,
    };
    event.custom(craft);
  });
  panelPallete.forEach((panel) => {
    event.stonecutting(panel, panelPallete);
  });
  ChiseledPanelPallete.forEach((panel) => {
    event.stonecutting(panel, ChiseledPanelPallete);
  });

  //Redstone Link StandAlone
  {
    event.stonecutting("2x create:redstone_link", "kubejs:logistic_machine");
  }
  //Tfmg Screw
  {
    event.stonecutting("tfmg:screw", "#forge:ingots/iron");
  }
});
