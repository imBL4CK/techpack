# Maintenance Guide

## Credits and License
- Properly credit third parties, such as resource packs, datapacks, and script parts, on the credits screen in the main menu.
- Project scripts may be used as long as they are not for commercial purposes.
- Redistribution of the project is prohibited; use only official platforms.

## KubeJS
- Keep the number of scripts as low as possible.
- Functions, constants, and variables should be placed at the top of the file, before or after the declared event.
- If a mechanic requires repeated implementations, such as Flint and Soul interactions, it is better to consolidate everything into a single file.

## Datapacks
- Datapacks should be placed in global_packs/required_data/.
- Datapack directories should keep the default pack.mcmeta and pack.png files.
- Avoid using the kubejs/data directory, keep the structure organized under global_packs/required_data/.

## Resource Packs
- Texture changes should be placed in global_packs/required_resources/.
- If the change requires many directories or mods, create a dedicated folder for it, such as the health bar pack "TechPack - Player Health Bar".
- If a directory is created for a change, its name should be clear and descriptive.
- Resource pack directories should keep the default pack.mcmeta and pack.png files.
- Avoid using the kubejs/assets directory, keep the structure organized under global_packs/required_resources/.

## Machines
- Use the Minecraft translation naming method for machines.
- The machine JSON should be maintained in kubejs/data/techpack/machines/, and block registration in kubejs/startup_scripts/registry/machines.js.

## Recipes
- Recipe exclusions should be handled in the appropriate script.
- Ingredient or result changes should be made using the Reliable Recipes mod.

## Misc
- To ban or disable items, use the Reliable Remover mod.
- To replace blocks in worldgen, use the Reliable Replacer mod.
- Any new mechanic should go through proper testing before being included in a release.