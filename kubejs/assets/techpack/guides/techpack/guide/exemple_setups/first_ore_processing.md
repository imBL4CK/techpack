---
navigation:
  title: First Ore Processing
  icon: hexerei:pestle_and_mortar
  parent: exemple_setups/index.md
---

# First Ore Processing

<GameScene zoom="3">
  <ImportStructure src="../game_scenes/preset_first_ore_processing_setup.nbt" />
  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

As previously mentioned, material processing is different from conventional processing. At Techpack you will have to go through some processes before you can get your bars, they are:

- 1: crush the raw ore in a <ItemLink id="hexerei:pestle_and_mortar"/> to obtain the crushed version of it
- 2: heat the crushed in a <ItemLink id="tconstruct:seared_melter"/>.
- 3: solidify the molten fluid into bars, slabs, or any other mold you want

# <Color id="blue">Setup Explained</Color>

- This setup may seem confusing to beginners, but it's quite simple to explain: The <ItemLink id="minecraft:chest"/> are the initial input, the chests send resources to each <ItemLink id="hexerei:pestle_and_mortar"/> separately via <ItemLink id="minecraft:hopper"/>, they send items to the <ItemLink id="hexerei:pestle_and_mortar"/> which processes items in batches of 5

- As soon as the <ItemLink id="hexerei:pestle_and_mortar"/> recipe is finished, the <ItemLink id="minecraft:hopper"/> send the items to the <ItemLink id="tconstruct:seared_melter"/> which melts the <ItemLink id="create:crushed_raw_iron"/> into <ItemLink id="tconstruct:molten_iron_bucket"/>

<Color id="green">⚠ Note</Color>: Seared Melter does not mix items and form alloys, so you do not need to fear that your metals will become alloys unintentionally

- Molten metals can be poured into the <ItemLink id="tconstruct:seared_table"/> at any time, in the setup above, an <ItemLink id="tconstruct:ingot_cast"/> is used, but you can use other casts

# <Color id="blue">Ore generation changed</Color>

Just remembering once again that the ore generation has been changed, to learn more about it, read the page below
- [Ore Generation](../features/ore_generation.md)
