---
navigation:
  title: Ore Generation
  icon: minecraft:raw_iron
  parent: techlab/index.md
item_ids:
  - minecraft:raw_iron
  - minecraft:raw_copper
  - minecraft:raw_gold
  - thermal:raw_tin
  - thermal:raw_silver
  - thermal:raw_lead
  - thermal:raw_nickel
  - create:raw_zinc 
  - minecraft:iron_ore
  - minecraft:copper_ore
  - minecraft:gold_ore
  - thermal:tin_ore
  - thermal:silver_ore
  - thermal:lead_ore
  - thermal:nickel_ore
  - create:zinc_ore
  - minecraft:deepslate_iron_ore
  - minecraft:deepslate_copper_ore
  - minecraft:deepslate_gold_ore
  - thermal:deepslate_tin_ore
  - thermal:deepslate_silver_ore
  - thermal:deepslate_lead_ore
  - thermal:deepslate_nickel_ore
  - create:deepslate_zinc_ore
---

<GameScene zoom="1">
  <ImportStructure src="../game_scenes/cave.nbt" />
</GameScene>

# Ore Generation
In Techpack, certain ores have variations in their quantity generation according to the biome temperature. Temperatures are divided into 3: temperate, hot and cold.

<Color id="green">⚠ Tip</Color>: this generation of ores only applies to the overworld.

# <Color id="blue">Ores that vary in quantity according to the temperature of the biome</Color>

| Ores                                   | Temperate |     Cold |      Hot |
| -------------------------------------- | --------: | -------: | -------: |
| <ItemLink id="minecraft:raw_copper" /> |    Modest |   Modest | Abundant |
| <ItemLink id="minecraft:raw_iron" />   |    Modest | Abundant |   Modest |
| <ItemLink id="minecraft:raw_gold" />   |    Scarce |   Scarce |   Modest |
| <ItemLink id="thermal:raw_tin" />      |    Modest | Abundant |   Modest |
| <ItemLink id="thermal:raw_nickel" />   |    Modest |   Modest | Abundant |
| <ItemLink id="thermal:raw_lead" />     |    Scarce |   Modest |   Scarce |
| <ItemLink id="thermal:raw_silver" />   |    Scarce |   Modest |   Scarce |
| <ItemLink id="create:raw_zinc" />      |    Modest | Abundant |   Scarce |

<Color id="red">⚠ Alert:</Color>Ores that do not appear in the list above have not had their generation changed

* <Color id="blue">Abundant</Color>: average quantity of 16 per chunk
* <Color id="blue">Modest</Color>: average quantity of 12 per chunk
* <Color id="blue">Scarce</Color>: average quantity of 6 per chunk

# <Color id="blue">Biome temperatures</Color>
As stated above, temperatures are divided into 3: temperate, hot and cold. Below is a list of which biomes belong to each temperature:

## <Color id="green">Temperate</Color>
* Grimwoods
* Laurel forest
* Marsh
* Willow swamp
* Birch forest
* Dark forest
* Deep dark
* Dripstone caves
* Flower forest
* Forest
* Mangrove swamp
* Mushroom fields
* Oak forest
* Old growth birch forest
* Ocean
* Plains
* River
* Stony shore
* Sunflower plains
* Swamp
* Alpine clearings
* Alpine highlands
* Aspen forest
* Blooming sugi forest
* Coniferous covert
* Cypress fields
* Fir forest
* Floral ridges
* Flowering shrubland
* Golden wilds
* Heather fields
* Maple woodlands
* Marigold meadows
* Marsh
* Prairie
* Red peaks
* Redwood forest
* Sugi forest
* White cliffs
* Wisteria forest
* Woody highlands
* Quark - Glimmering weald
* Wetland whimsy - Marsh

## <Color id="yellow">Hot</Color>
* Dunes
* Flourishing dunes
* Hot springs
* Kousa jungle
* Petrified dunes
* Rainforest
* Rainforest basin
* Rocky dunes
* Scrubland
* Sparse rainforest
* Sparse rainforest basin
* Spiny thicket
* Bamboo jungle
* Badlands
* Beach
* Deep lukewarm ocean
* Desert
* Eroded badlands
* Jungle
* Lush caves
* Savanna
* Savanna plateau
* Sparse jungle
* Warm ocean
* Windswept savanna
* Wooded badlands
* Arid highlands
* Arid savanna
* Bamboo wetlands
* Blooming dunes
* Blooming highlands
* Carnation fields
* Chaparral
* Drylands
* Dusty slopes
* Lavender fields
* Lively dunes
* Oak savanna
* Scorched dunes
* Shrubby highlands
* Shrubland
* Sparse tropical woods
* Stratified desert
* Tropical basin
* Tropical shores
* Tropical woods
* Wooded drylands
* Xeric plains

## <Color id="aqua">Cold</Color>
* Aspen parkland
* Snowy scrubland
* Blossom valleys
* Blossom woods
* Old growth pine barrens
* Pine barrens
* Pine slopes
* Snowy pine barrens
* Cherry grove
* Cold ocean
* Deep cold ocean
* Deep frozen ocean
* Deep ocean
* Frozen ocean
* Frozen peaks
* Frozen river
* Grove
* Ice spikes
* Jagged peaks
* Meadow
* Old growth pine taiga
* Old growth spruce taiga
* Snowy beach
* Snowy plains
* Snowy slopes
* Snowy taiga
* Stony peaks
* Taiga
* Windswept forest
* Windswept gravelly hills
* Windswept hills
* Boreal taiga
* Sleeted slopes
* Snowcapped red peaks
* Snowy fir forest
* Snowy redwood forest
* Tundra
* Windswept sugi forest