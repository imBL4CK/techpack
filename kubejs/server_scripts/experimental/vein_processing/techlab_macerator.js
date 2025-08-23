let enabled = false;

if (enabled === true) {
  ServerEvents.recipes((e) => {
    let minerals = [
      "chalcopyrite",
      "magnetite",
      "calaverite",
      "cassiterite",
      "galena",
      "argentite",
      "pentlandite",
      "spodumene",
      "cobaltoite",
      "kimberlite",
      "emerald",
    ];
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
    const CrushingRecipes = [
      {
        id: "chalcopyrite",
        input: "kubejs:raw_chalcopyrite",
        output: "create:crushed_raw_copper",
      },
      {
        id: "magnetite",
        input: "kubejs:raw_magnetite",
        output: "create:crushed_raw_iron",
      },
      {
        id: "calaverite",
        input: "kubejs:raw_calaverite",
        output: "create:crushed_raw_gold",
      },
      {
        id: "cassiterite",
        input: "kubejs:raw_cassiterite",
        output: "create:crushed_raw_tin",
      },
      {
        id: "galena",
        input: "kubejs:raw_galena",
        output: "create:crushed_raw_lead",
      },
      {
        id: "argentite",
        input: "kubejs:raw_argentite",
        output: "create:crushed_raw_silver",
      },
      {
        id: "pentlandite",
        input: "kubejs:raw_pentlandite",
        output: "create:crushed_raw_nickel",
      },
      {
        id: "cobaltoite",
        input: "kubejs:raw_cobaltoite",
        output: "create:crushed_raw_cobalt",
      },
    ];
    //Ore to Raw
    minerals.forEach((mineral) => {
      let crushed = {
        type: "custommachinery:custom_machine",
        machine: "custommachinery:industrialrevival/macerator",
        time: 250,
        requirements: [
          {
            type: "custommachinery:item",
            mode: "input",
            item: "kubejs:" + mineral + "_ore",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "kubejs:raw_" + mineral,
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "kubejs:raw_" + mineral,
            amount: 1,
            chance: 0.33,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "minecraft:gravel",
            amount: 1,
            chance: 0.75,
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: 2048,
          },
        ],
        jeiPriority: 3,
      };
      e.custom(crushed).id(
        "industrialrevival:macerator/library/ore_to_raw/" + mineral
      );
    });
    //Raw to Crushed
    CrushingRecipes.forEach((recipe) => {
      let crushed = {
        type: "custommachinery:custom_machine",
        machine: "custommachinery:industrialrevival/macerator",
        time: 250,
        requirements: [
          {
            type: "custommachinery:item",
            mode: "input",
            item: recipe.input,
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: recipe.output,
            amount: 2,
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: 1024,
          },
        ],
        jeiPriority: 2,
      };
      e.custom(crushed).id(
        "industrialrevival:macerator/library/raw_to_crushed/" + recipe.id
      );
    });
    //Crushed to Shard
    materials.forEach((material) => {
      let Scrushed = {
        type: "custommachinery:custom_machine",
        machine: "custommachinery:industrialrevival/macerator",
        time: 250,
        requirements: [
          {
            type: "custommachinery:item",
            mode: "input",
            item: "create:crushed_raw_" + material,
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "kubejs:" + material + "_shard",
            amount: 7,
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: 512,
          },
        ],
        jeiPriority: 1,
      };
      e.custom(Scrushed).id(
        "create:crushing/library/crushed_to_shard/" + material
      );
    });

    //Extra Raw to Crushed
    //Spodumene
    {
      e.custom({
        type: "custommachinery:custom_machine",
        machine: "custommachinery:industrialrevival/macerator",
        time: 250,
        requirements: [
          {
            type: "custommachinery:item",
            mode: "input",
            item: "kubejs:raw_spodumene",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "create:crushed_raw_aluminum",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "kubejs:crushed_raw_lithium",
            chance: 0.3,
            amount: 1,
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: 1024,
          },
        ],
        jeiPriority: 2,
      });
    }
    //Kimberlite
    {
      e.custom({
        type: "custommachinery:custom_machine",
        machine: "custommachinery:industrialrevival/macerator",
        time: 250,
        requirements: [
          {
            type: "custommachinery:item",
            mode: "input",
            item: "kubejs:raw_kimberlite",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "minecraft:coal",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "minecraft:diamond",
            chance: 0.3,
            amount: 1,
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: 1024,
          },
        ],
        jeiPriority: 2,
      });
    }
    //Emerald
    {
      e.custom({
        type: "custommachinery:custom_machine",
        machine: "custommachinery:industrialrevival/macerator",
        time: 250,
        requirements: [
          {
            type: "custommachinery:item",
            mode: "input",
            item: "kubejs:raw_emerald",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "minecraft:emerald",
            amount: 1,
          },
          {
            type: "custommachinery:item",
            mode: "output",
            item: "minecraft:emerald",
            chance: 0.3,
            amount: 1,
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: 1024,
          },
        ],
        jeiPriority: 2,
      });
    }
  });
} else {
}
