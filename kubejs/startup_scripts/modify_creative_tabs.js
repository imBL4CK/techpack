StartupEvents.modifyCreativeTab("custommachinery:custom_machine", (e) => {
  e.remove("custommachinery:custom_machine_item");
});
StartupEvents.modifyCreativeTab("kubejs:tab", (e) => {
  e.icon = "kubejs:basic_circuit";
  e.displayName = "Techlab";
});
