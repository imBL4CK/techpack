let enabled = false;

if (enabled === true) {
  ServerEvents.recipes((e) => {
    let materials = [
      "iron",
      "copper",
      "gold",
      "tin",
      "lead",
      "silver",
      "nickel",
      "zinc",
      "lithium",
      "cobalt",
    ];
    //Clump to Ingot
    materials.forEach((mineral) => {
      e.smelting("#forge:ingots/" + mineral, "kubejs:" + mineral + "_clump").id(
        "minecraft:smelting/library/" + mineral + "_ingot"
      );

      e.recipes.custommachinery
        .custom_machine(
          "custommachinery:industrialrevival/energetic_smelter",
          300
        )
        .requireEnergyPerTick(4)
        .requireItem("kubejs:" + mineral + "_clump")
        .produceItem("#forge:ingots/" + mineral)
        .jei()
        .priority(1);
    });
  });
} else {
}
