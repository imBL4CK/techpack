ServerEvents.recipes((e) => {
  //Fishing Basin
  e.recipes.custommachinery.custom_machine("custommachinery:industrialrevival/fishing_basin", 300)
  .requireBlock("minecraft:water", true, 1, 0, 1, -1, 0, -1)
    .damageItem("kubejs:primitive_fishing_net", 1)
    .lootTableOutput("custommachinery:primitive_fishing_net");
});
