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

//Bee Species and Combs
global.beeSpecies = [
  {
    species: "common",
    health: 10,
  },
  {
    species: "cavernous",
    health: 10,
  },
  {
    species: "wizard",
    health: 5,
  },
  {
    species: "witch",
    health: 5,
  },
  {
    species: "jewelry",
    health: 5,
  },
  {
    species: "fossil",
    health: 10,
  },
  {
    species: "enigmatic",
    health: 10,
  },
];
global.combTypes = [
  {
    id: "sticky",
    color: ["#7a360f", "#a66924"]
  },
  {
    id: "metallic",
    color: ["#94876a", "#bacfcf"]
  },
  {
    id: "precious",
    color: ["#b26411", "#fad64a"]
  },
  {
    id: "calcified",
    color: ["#90966d", "#fcfbed"]
  },
  {
    id: "scarlet",
    color: ["#551113", "#ff3539"]
  },
  {
    id: "magical",
    color: ["#5700b9", "#d67cff"]
  },
  {
    id: "hexed",
    color: ["#5700b9", "#16a072"]
  },
  {
    id: "oscillanting",
    color: ["#08493f", "#2ccdb1"]
  },
  {
    id: "instable",
    color: ["#684768", "#ffe9ff"]
  },
]

// Effects
global.NUTRITION_EFFECT_TICK = (entity, level) => {
  if (!entity.isPlayer()) return;
  const FoodLevel = entity.getFoodLevel();

  if (FoodLevel == 20 && entity.tickCount % 100 == 0) {
    entity.addFood(level, (level / 2));
  } 
  else if (FoodLevel < 20 && entity.tickCount % 100 == 0) {
    entity.addFood((level + 1), 0);
  }
}