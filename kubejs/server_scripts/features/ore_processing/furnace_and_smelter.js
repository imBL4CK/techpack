ServerEvents.recipes(e => {
  const entries = [
    {
      id: "tin",
      raw: true,
      oreBlock: true,
      dust: true,
    },
    {
      id: "nickel",
      raw: true,
      oreBlock: true,
      dust: true,
    },
    {
      id: "platinum",
      raw: true,
      oreBlock: true,
      dust: true,
    },
    {
      id: "aluminum",
      raw: true,
      oreBlock: true,
      dust: true,
    },
    {
      id: "chromium",
      raw: true,
      oreBlock: true,
      dust: true,
    },
    {
      id: "bronze",
      dust: true,
    },
    {
      id: "steel",
      dust: true,
    },
    {
      id: "electrum",
      dust: true,
    },
    {
      id: "invar",
      dust: true,
    },
    {
      id: "constantan",
      dust: true,
    },
    {
      id: "kanthal",
      dust: true,
    },
    {
      id: "advanced_alloy",
      dust: true,
    },
    {
      id: "stainless_steel",
      dust: true,
    },
    {
      id: "lithium",
      raw: true,
      dust: true,
    },
  ];
  entries.forEach((entry) => {
    if (entry.raw) {
      e.smelting(`techpack:${entry.id}_ingot`, `#c:raw_materials/${entry.id}`).id(`techpack:smelting/ore_processing/${entry.id}_ingot_from_raw_material`)
      e.blasting(`techpack:${entry.id}_ingot`, `#c:raw_materials/${entry.id}`).id(`techpack:blasting/ore_processing/${entry.id}_ingot_from_raw_material`)
      e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem(`#c:raw_materials/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`)
      e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem(`#c:raw_materials/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`)
      e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem(`#c:raw_materials/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`).damageItem("#techpack:electrodes", 1).chance(0.5)
    }
    if (entry.dust) {
      e.smelting(`techpack:${entry.id}_ingot`, `#c:dusts/${entry.id}`).id(`techpack:smelting/ore_processing/${entry.id}_ingot_from_dust`)
      e.blasting(`techpack:${entry.id}_ingot`, `#c:dusts/${entry.id}`).id(`techpack:blasting/ore_processing/${entry.id}_ingot_from_dust`)
      e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem(`#c:dusts/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`)
      e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem(`#c:dusts/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`)
      e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem(`#c:raw_materials/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`).damageItem("#techpack:electrodes", 1).chance(0.5)
    }
    if (entry.oreBlock) {
      e.smelting(`techpack:${entry.id}_ingot`, `#c:ores/${entry.id}`).id(`techpack:smelting/ore_processing/${entry.id}_ingot_from_ore_block`)
      e.blasting(`techpack:${entry.id}_ingot`, `#c:ores/${entry.id}`).id(`techpack:blasting/ore_processing/${entry.id}_ingot_from_ore_block`)
      e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem(`#c:ores/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`)
      e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem(`#c:ores/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`)
      e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem(`#c:raw_materials/${entry.id}`).produceItem(`techpack:${entry.id}_ingot`).damageItem("#techpack:electrodes", 1).chance(0.5)
    }
  });
  //Smelting
  e.smelting("minecraft:diamond", "#c:dusts/diamond").id("techpack:smelting/ore_processing/diamond_from_dust")
  e.smelting("create:zinc_ingot", "#c:dusts/zinc").id("techpack:smelting/ore_processing/zinc_from_dust").xp(0.1)
  e.smelting("techpack:chromium_ingot", "techpack:crushed_raw_chromium").id("techpack:smelting/ore_processing/chromium_ingot_from_crushed_raw").xp(0.1)
  e.smelting("techpack:platinum_ingot", "create:crushed_raw_platinum").id("techpack:smelting/ore_processing/platinum_ingot_from_crushed_raw").xp(0.1)
  e.smelting("techpack:tin_ingot", "create:crushed_raw_tin").id("techpack:smelting/ore_processing/tin_ingot_from_crushed_raw").xp(0.1)
  e.smelting("techpack:aluminum_ingot", "create:crushed_raw_aluminum").id("techpack:smelting/ore_processing/aluminum_ingot_from_crushed_raw").xp(0.7)
  e.smelting("techpack:nickel_ingot", "create:crushed_raw_nickel").id("techpack:smelting/ore_processing/nickel_ingot_from_crushed_raw").xp(0.1)
  e.smelting("techpack:lithium_ingot", "techpack:crushed_raw_lithium").id("techpack:smelting/ore_processing/lithium_ingot_from_crushed_raw").xp(0.1)
  //Blasting
  e.blasting("minecraft:diamond", "#c:dusts/diamond").id("techpack:blasting/ore_processing/diamond_from_dust")
  e.blasting("create:zinc_ingot", "#c:dusts/zinc").id("techpack:blasting/ore_processing/zinc_from_dust").xp(0.1)
  e.blasting("techpack:chromium_ingot", "techpack:crushed_raw_chromium").id("techpack:blasting/ore_processing/chromium_ingot_from_crushed_raw").xp(0.1)
  e.blasting("techpack:platinum_ingot", "create:crushed_raw_platinum").id("techpack:blasting/ore_processing/platinum_ingot_from_crushed_raw").xp(0.1)
  e.blasting("techpack:silver_ingot", "create:crushed_raw_silver").id("techpack:blasting/ore_processing/silver_ingot_from_crushed_raw").xp(0.5)
  e.blasting("techpack:tin_ingot", "create:crushed_raw_tin").id("techpack:blasting/ore_processing/tin_ingot_from_crushed_raw").xp(0.1)
  e.blasting("techpack:lead_ingot", "create:crushed_raw_lead").id("techpack:blasting/ore_processing/lead_ingot_from_crushed_raw").xp(0.5)
  e.blasting("techpack:aluminum_ingot", "create:crushed_raw_aluminum").id("techpack:blasting/ore_processing/aluminum_ingot_from_crushed_raw").xp(0.7)
  e.blasting("techpack:nickel_ingot", "create:crushed_raw_nickel").id("techpack:blasting/ore_processing/nickel_ingot_from_crushed_raw").xp(0.1)
  e.blasting("techpack:lithium_ingot", "techpack:crushed_raw_lithium").id("techpack:blasting/ore_processing/lithium_ingot_from_crushed_raw").xp(0.1)
  //Electric Smelter
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("techpack:diamond_dust").produceItem("minecraft:diamond")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("techpack:zinc_dust").produceItem("create:zinc_ingot")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("techpack:crushed_raw_chromium").produceItem("techpack:chromium_ingot")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("create:crushed_raw_platinum").produceItem("techpack:platinum_ingot")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("create:crushed_raw_tin").produceItem("techpack:tin_ingot")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("create:crushed_raw_aluminum").produceItem("techpack:aluminum_ingot")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("create:crushed_raw_nickel").produceItem("techpack:nickel_ingot")
  e.recipes.custommachinery.custom_machine("techpack:basic_smelter", 200).requireEnergyPerTick(10).requireItem("techpack:crushed_raw_lithium").produceItem("techpack:lithium_ingot")
  //Steam Smelter
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("techpack:diamond_dust").produceItem("minecraft:diamond")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("techpack:zinc_dust").produceItem("create:zinc_ingot")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("techpack:crushed_raw_chromium").produceItem("techpack:chromium_ingot")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("create:crushed_raw_platinum").produceItem("techpack:platinum_ingot")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("create:crushed_raw_tin").produceItem("techpack:tin_ingot")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("create:crushed_raw_aluminum").produceItem("techpack:aluminum_ingot")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("create:crushed_raw_nickel").produceItem("techpack:nickel_ingot")
  e.recipes.custommachinery.custom_machine("techpack:steam_smelter", 200).requireFluidPerTick("1x techpack:steam").requireItem("techpack:crushed_raw_lithium").produceItem("techpack:lithium_ingot")
  //Induction Furnace
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("techpack:diamond_dust").produceItem("minecraft:diamond").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("techpack:zinc_dust").produceItem("create:zinc_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("techpack:crushed_raw_chromium").produceItem("techpack:chromium_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("create:crushed_raw_platinum").produceItem("techpack:platinum_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("create:crushed_raw_tin").produceItem("techpack:tin_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("create:crushed_raw_aluminum").produceItem("techpack:aluminum_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("create:crushed_raw_nickel").produceItem("techpack:nickel_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
  e.recipes.custommachinery.custom_machine("techpack:basic_induction_furnace", 100).requireEnergyPerTick(40).requireItem("techpack:crushed_raw_lithium").produceItem("techpack:lithium_ingot").damageItem("#techpack:electrodes", 1).chance(0.5)
})