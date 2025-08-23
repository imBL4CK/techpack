---
navigation:
  title: Alloy Foundry
  icon: custommachinery:custom_machine_item
  icon_nbt: '{machine:"custommachinery:industrialrevival/alloy_foundry"}'
  parent: techlab_machines/index.md
---

# Alloy Foundry

<GameScene zoom="3">
  <ImportStructure src="../game_scenes/alloy_foundry.nbt" />
</GameScene>

## <Color id="blue">What is the Alloy Foundry?</Color>

Alloy Foundry is a machine added by Techlab Machines. The Alloy Foundry requires a fishing net to works.

Fuses 2 ingots into other, like <ItemLink id="thermal:bronze_ingot" /> or <ItemLink id="thermal:invar_ingot" />

## <Color id="blue">Import and Export Config</Color>

You can configure it by clicking the button with the gear icon (located below the upgrade slot).

Once pressed, it will add a colored square above the machine's elements. By clicking on an element, you can configure which face can be set to input, output, or both:

* <Color id="red">Red = Import</Color>
* <Color id="blue"> Blue = Export </Color>
* <Color id="light_purple"> Purple = Both </Color>

The rectangular buttons below indicate whether auto-import/export is enabled (Auto-import/export is a function that automatically pulls or pushes items, fluids, and energy without the need for external mechanisms).

## <Color id="blue">Supported Modifiers:</Color>

Modifiers are added to the slot above the configuration button.

* <ItemLink id="kubejs:energy_modifier" /> <Color id="blue">decreases</Color> the amount of energy needed to process a recipe
* <ItemLink id="kubejs:speed_modifier" /> <Color id="blue">increases</Color> the processing speed of a recipe

## <Color id="blue">Tier Upgrade</Color>

Machines have tiers like Mekanism or Gregtech

Basic > Advanced > Turbo 

Tier Changes:
* Increase Energy Storage
* Increase Processing Speed 
* Exclusive Tier Recipes 

<Color id="green">⚠ Tip:</Color>For recipes that require specific tiers, information is added to the JEI/EMI
