---
navigation:
  title: Energy Generation
  icon: thermal:dynamo_magmatic
  parent: technical_guide/index.md
item_ids:
  - thermal:dynamo_stirling
  - thermal:dynamo_magmatic
  - thermal:dynamo_compression
  - thermal:dynamo_numismatic
  - thermal:dynamo_lapidary
  - thermal:dynamo_disechantment
  - thermal:dynamo_gourmand
  - createaddition:alternator
  - tfmg:rotor
  - pneumaticcraft:pneumatic_dynamo
  - enderio:stirling_generator
  - enderio:energetic_photovoltaic_module
  - enderio:pulsating_photovoltaic_module
  - enderio:vibrant_photovoltaic_module
---

# Energy Transport

# <Color id="blue">What is Energy?</Color>

Energy (aka electricity) is the basis of the Techpack mid-game. It is nothing more than a force of nature that can be generated in several ways, such as converting rotational power, heating fuels, etc. It is used to power electrical machines, which are very important for advancing in chapters.

Energy is initially transported materially, such as fluids and rotational power. The means of transporting energy is commonly called <Color id="blue">cable</Color>, but it can have other names.

- In the late-game you can transport energy without the need for material means (Wireless).

In Techpack there are some means of transporting energy, such as: cables, lasers, spools (wires), etc.

# <Color id="blue">Energy Measurements</Color>

Some mods have different energy measurements, at first it may seem scary and confusing, but relax, all these measurements are 1:1 equivalent to FE (Forge Energy - a forge built api).

## Some examples are:

- RF added by <Color id="blue">Thermal Series & Redstone Arsenal</Color>
- μ added by <Color id="blue">Ender IO</Color>
- OP added by <Color id="blue">Draconic Evolution</Color>

If you come across these measurements, just remember that it is just a different way of writing FE.

# <Color id="blue">Means of Energy Generation</Color>

There are several means of generating energy, each with its own individualities.

Below is a list with the generation rate of each generator

| Generators                                                   | Generated Rate(FE/t) |
| ------------------------------------------------------------ | -------------------: |
| <ItemLink id="thermal:dynamo_stirling" />(and other dynamos) |                   40 |
| <ItemLink id="createaddition:alternator" />                  |               60-480 |
| <ItemLink id="tfmg:rotor" />                                 |               27-600 |
| <ItemLink id="pneumaticcraft:pneumatic_dynamo" />            |                   40 |
| <ItemLink id="enderio:stirling_generator" />                 |                   40 |
| <ItemLink id="enderio:energetic_photovoltaic_module" />      |               11-200 |
| <ItemLink id="enderio:pulsating_photovoltaic_module" />      |              66-1200 |
| <ItemLink id="enderio:vibrant_photovoltaic_module" />        |             333-6000 |
| <ItemLink id="actuallyadditions:oil_generator" />            |                  40- |

# <Color id="blue">Generators Explained</Color>

Each generator has its own individuality, whether it is fuel consumed, amount of energy generated or other requirements.

- If you want to know more about Techlab generators, look for the dedicated chapters in [Techlab Machines](../techlab_machines/index.md)

## Thermal Series's Dynamos

<ItemImage id="thermal:dynamo_stirling" />

The power generation method added by thermal is the dynamos. Dynamos generate energy using different types of fuel, but what converges between them is the method of operation.

- Dynamos without upgrades generate a maximum of 40 FE/t
- The amount of energy generated per tick depends on the energy storage, the most energy in storage, the least energy is generated
- Dynamos have the possibility of upgrades
- Has 50.000 Buffer FE
- <Color id="yellow">Unlocked in the 3rd Chapter</Color>

<Color id="green">⚠ Tip</Color>: Whenever possible, keep the energy storage of the dynamos empty or low

## Create Additions's Alternator

<ItemImage id="createaddition:alternator" />

The <ItemLink id="createaddition:alternator" /> converts rotational power into energy.

- Requires at least <Color id="blue"> 32</Color> RPM to operate
- Energy output may vary depending on the amount of RPM input
- Has 5.000 FE buffer
- <Color id="yellow">Unlocked in the 3rd Chapter</Color>

## Create: The Factory Must Grow's Rotor

<ItemImage id="tfmg:rotor" />

The <ItemLink id="tfmg:rotor" /> Converts rotational power to energy, but unlike the <ItemLink id="createaddition:alternator" /> it requires a structure.

- Structure:

<GameScene zoom="2">
<ImportStructure src="../game_scenes/rotor_structure.nbt" />
<IsometricCamera yaw="45" pitch="30" />
</GameScene>

- Requires at least<Color id="blue">72</Color>RPM to operate
- Energy output may vary depending on the amount of RPM input
- The Energy is extracted from the middle blocks of the structure
- Has 10.000 FE buffer
- You can hold <Color id="blue">W</Color> to see the structure ponder
- <Color id="yellow">Unlocked in the 3rd Chapter</Color>

## Pneumatic Craft's Pneumatic Dynamo

<ItemImage id="pneumaticcraft:pneumatic_dynamo" />

The <ItemLink id="pneumaticcraft:pneumatic_dynamo" /> converts pneumatic craft pressure into energy.

- Dynamo without upgrades generate a maximum of 40 FE/t
- Requires at least 15.1 bar to operate (Max 20.0 bar)
- If the pressure input to the dynamo exceeds 20.0, it will explode (without the <ItemLink id="pneumaticcraft:security_upgrade" />)
- Requires any Pneumatic Craft's heat source to operate
- <Color id="yellow">Unlocked in the 3rd Chapter</Color>

<Color id="green">⚠ Tip</Color>: Whenever possible, use <ItemLink id="pneumaticcraft:security_upgrade" />

## Ender IO's Stirling Generator & Photovoltaic Plates

<ItemImage id="enderio:stirling_generator" />

<ItemLink id="enderio:stirling_generator" /> converts solid fuels burn-time into energy.

- Requires any EnderIO Capacitor (Minimum are <ItemLink id="enderio:basic_capacitor" />)
- <Color id="yellow">Unlocked in the 3rd Chapter</Color>

<Row>
  <ItemImage id="enderio:energetic_photovoltaic_module" />
  <ItemImage id="enderio:pulsating_photovoltaic_module" />
  <ItemImage id="enderio:vibrant_photovoltaic_module"/>
</Row>

Photovoltaic plates converts solar energy into energy.

- the rate of power generation depends on the time of day
- <Color id="yellow">Unlocked in the 4th Chapter</Color>

## Actually Additions's Generators

<ItemImage id="actuallyadditions:oil_generator" />

<ItemLink id="actuallyadditions:oil_generator" /> Generates energy based in canola oil derivates

| Fluid                                                               | Generated Rate(FE/t) |
| ------------------------------------------------------------------- | -------------------: |
| <ItemLink id="actuallyadditions:canola_oil_bucket" />              |                   40 |
| <ItemLink id="actuallyadditions:refined_canola_oil_bucket" />      |                   80 |
| <ItemLink id="actuallyadditions:crystallized_oil_bucket" /> |                  100 |
| <ItemLink id="actuallyadditions:empowered_oil_bucket" />    |                  120 |

- <Color id="yellow">Unlocked in the PLACEHERE Chapter</Color>


<ItemImage id="actuallyadditions:coal_generator" />

<ItemLink id="actuallyadditions:coal_generator" /> converts solid fuels burn-time into energy, like <ItemLink id="enderio:stirling_generator" />

- <Color id="yellow">Unlocked in the PLACEHERE Chapter</Color>s

<ItemLink id="actuallyadditions:leaf_generator" />

<ItemLink id="actuallyadditions:bio_reactor" />
