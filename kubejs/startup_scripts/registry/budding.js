//priority: 99
StartupEvents.registry("block", (e) => {
  //Sulfur
  e.create(`techpack:budding_sulfur`).soundType("amethyst").randomTick((tick) => global.buddingSulfur(tick)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").noDrops().mapColor(30);
  e.create("techpack:sulfur_block").tagBoth("c:storage_blocks/sulfur").soundType("amethyst").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(30);
  e.create("techpack:sulfur_cluster").box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false).soundType("amethyst").transparent(true).notSolid().fullBlock(false).property(BlockProperties.FACING).renderType("cutout").placementState(event => event.set(BlockProperties.FACING, event.clickedFace)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(30);
  //Cinnabar
  e.create(`techpack:budding_cinnabar`).soundType("amethyst").randomTick((tick) => global.buddingCinnabar(tick)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").noDrops().mapColor(52);
  e.create("techpack:cinnabar_block").tagBoth("c:storage_blocks/cinnabar").soundType("amethyst").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(52);
  e.create("techpack:small_cinnabar_bud").box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false).soundType("amethyst").transparent(true).notSolid().fullBlock(false).property(BlockProperties.FACING).renderType("cutout").placementState(event => event.set(BlockProperties.FACING, event.clickedFace)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(52);
  e.create("techpack:medium_cinnabar_bud").box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false).soundType("amethyst").transparent(true).notSolid().fullBlock(false).property(BlockProperties.FACING).renderType("cutout").placementState(event => event.set(BlockProperties.FACING, event.clickedFace)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(52);
  e.create("techpack:large_cinnabar_bud").box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false).soundType("amethyst").transparent(true).notSolid().fullBlock(false).property(BlockProperties.FACING).renderType("cutout").placementState(event => event.set(BlockProperties.FACING, event.clickedFace)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(52);
  e.create("techpack:cinnabar_cluster").box(0.25, 0.25, 0.25, 0.75, 0.75, 0.75, false).soundType("amethyst").transparent(true).notSolid().fullBlock(false).property(BlockProperties.FACING).renderType("cutout").placementState(event => event.set(BlockProperties.FACING, event.clickedFace)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(52);
  //Strange Crystal
  e.create(`techpack:budding_strange_crystal`).soundType("amethyst").randomTick((tick) => global.buddingStrangeCrystal(tick)).requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(2);
  e.create("techpack:strange_crystal_block").tagBoth("c:storage_blocks/strange_crystal").soundType("amethyst").requiresTool(true).tagBoth("mineable/pickaxe").tagBoth("minecraft:needs_iron_tool").mapColor(5);
});

// Credits for creating the function: liopyu on discord
global.buddingCinnabar = tick => {
    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = Java.loadClass('net.minecraft.core.Direction');
  
    const growCinnabarBuds = () => {
      Direction.values().forEach(face => {
        const offsetPos = pos.relative(face);
        const adjacentBlockId = level.getBlock(offsetPos).id;
        const chanceOfGrowth = 0.1;
        const randomValue = Math.random();
  
        const blockTypes = {
          'minecraft:air': 'small_cinnabar_bud',
          'techpack:small_cinnabar_bud': 'medium_cinnabar_bud',
          'techpack:medium_cinnabar_bud': 'large_cinnabar_bud',
          'techpack:large_cinnabar_bud': 'cinnabar_cluster',
        };
  
        const blockType = blockTypes[adjacentBlockId];
        if (blockType && randomValue < chanceOfGrowth) {
          const command = `setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} techpack:${blockType}[facing=${face}]`;
          tick.server.runCommandSilent(command);
        }
      });
    };
    growCinnabarBuds();
};
global.buddingSulfur = tick => {
    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = Java.loadClass('net.minecraft.core.Direction');
  
    const growCinnabarBuds = () => {
      Direction.values().forEach(face => {
        const offsetPos = pos.relative(face);
        const adjacentBlockId = level.getBlock(offsetPos).id;
        const chanceOfGrowth = 0.1;
        const randomValue = Math.random();
  
        const blockTypes = {
          'minecraft:air': 'sulfur_cluster',
        };
  
        const blockType = blockTypes[adjacentBlockId];
        if (blockType && randomValue < chanceOfGrowth) {
          const command = `setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} techpack:${blockType}[facing=${face}]`;
          tick.server.runCommandSilent(command);
        }
      });
    };
    growCinnabarBuds();
};
global.buddingStrangeCrystal = tick => {
    const { block, level } = tick;
    const pos = block.getPos();
    const Direction = Java.loadClass('net.minecraft.core.Direction');
    const UP = Direction.UP;

    const growAbove = () => {
        const offsetPos = pos.relative(UP);
        const adjacentBlockId = level.getBlock(offsetPos).id;
        const chanceOfGrowth = 0.1;
        if (Math.random() >= chanceOfGrowth) return;
        if (adjacentBlockId === 'minecraft:air') {
            tick.server.runCommandSilent(`setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} malum:strange_crystal`);
            return;
        }
        if (adjacentBlockId === 'malum:strange_crystal') {
            const abovePos = offsetPos.relative(UP);
            const aboveId = level.getBlock(abovePos).id;
            if (aboveId !== 'minecraft:air') return;
            tick.server.runCommandSilent(`setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} malum:large_strange_crystal[half=lower]`);
            tick.server.runCommandSilent(`setblock ${abovePos.getX()} ${abovePos.getY()} ${abovePos.getZ()} malum:large_strange_crystal[half=upper]`);
        }
    };
    growAbove();
};