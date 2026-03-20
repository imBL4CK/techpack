StartupEvents.modifyCreativeTab("kubejs:tab", (e) => {
  e.icon = "techpack:basic_circuit";
  e.displayName = "Techpack";
  e.add('guideme:guide[guideme:guide_id="techpack:moddedpedia"]')
});
StartupEvents.modifyCreativeTab("custommachinery:custom_machine", (e) => {
  //e.remove("custommachinery:custom_machine_item");
});