---
navigation:
  title: Assembler
  icon: custommachinery:custom_machine_item
  icon_nbt: '{machine:"custommachinery:industrialrevival/assembler"}'
  parent: techlab_machines/index.md
---

# Assembler

<GameScene zoom="3">
  <ImportStructure src="../game_scenes/assembler.nbt" />
</GameScene>

## <Color id="blue">What is the Assembler?</Color>

Assembler is a machine added by Techlab Machines. The Assembler is a machine that requires electrical energy to operate.

Assembly simple items into complex ones. Assembler are much used in Techpack to make componets more efficiently, automate machine recipes etc.

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
