ServerEvents.recipes((e) => {

  let recipeType= (e.recipes.create.sequenced_assembly)
  let recipeId = "create:sequency_assembly/";

  const recipes = [
    //Redstone Servo
    {
      output: ["thermal:redstone_servo"],
      input: ["#forge:plates/iron"],
      processes: [
        e.recipes.create.deploying("#forge:plates/iron", [
          "#forge:plates/iron",
          "kubejs:makeshift_mechanism",
        ]),
        e.recipes.create.deploying("#forge:plates/iron", [
          "#forge:plates/iron",
          "thermal:cured_rubber",
        ]),
        e.recipes.create.filling("#forge:plates/iron", [
          "#forge:plates/iron",
          Fluid.of("thermal:redstone", 125),
        ]),
      ],
      transitionalItem: "#forge:plates/iron",
      loops: 1,
      id: "thermal/redstone_servo",
    },
    //Makeshift Mechanism
    {
      output: ["kubejs:makeshift_mechanism"],
      input: ["#forge:plates/wood"],
      processes: [
        e.recipes.create.deploying("#forge:plates/wood", [
          "#forge:plates/wood",
          "create:cogwheel",
        ]),
        e.recipes.create.deploying("#forge:plates/wood", [
          "#forge:plates/wood",
          "create:andesite_alloy",
        ]),
        e.recipes.create.deploying("#forge:plates/wood", [
          "#forge:plates/wood",
          "#forge:tools/saw",
        ]),
      ],
      transitionalItem: "#forge:plates/wood",
      loops: 1,
      id: "techlab/makeshift_mechanism",
    },
    //Precision Mechanism
    {
      output: ["create:precision_mechanism"],
      input: ["kubejs:makeshift_mechanism"],
      processes: [
        e.recipes.create.deploying("kubejs:makeshift_mechanism", [
          "kubejs:makeshift_mechanism",
          "create:electron_tube",
        ]),
        e.recipes.create.deploying("kubejs:makeshift_mechanism", [
          "kubejs:makeshift_mechanism",
          "thermal:redstone_servo",
        ]),
        e.recipes.create.deploying("kubejs:makeshift_mechanism", [
          "kubejs:makeshift_mechanism",
          "#forge:plates/brass",
        ]),
      ],
      transitionalItem: "kubejs:makeshift_mechanism",
      loops: 1,
      id: "create/precision_mechanism",
    },
    //Coke Oven
    {
      output: ["tfmg:coke_oven"],
      input: ["create:industrial_iron_block"],
      processes: [
        e.recipes.create.deploying("create:industrial_iron_block", [
          "create:industrial_iron_block",
          "create:precision_mechanism",
        ]),
        e.recipes.create.deploying("create:industrial_iron_block", [
          "create:industrial_iron_block",
          "tfmg:screw",
        ]),
        e.recipes.create.deploying("create:industrial_iron_block", [
          "create:industrial_iron_block",
          "create:blaze_burner",
        ]),
      ],
      transitionalItem: "create:industrial_iron_block",
      loops: 1,
      id: "tfmg/coke_oven",
    },
    //Steel Mechanism
    {
      output: ["tfmg:steel_mechanism"],
      input: ["create:precision_mechanism"],
      processes: [
        e.recipes.create.deploying("create:precision_mechanism", [
          "create:precision_mechanism",
          "#forge:plates/steel",
        ]),
        e.recipes.create.deploying("create:precision_mechanism", [
          "create:precision_mechanism",
          "thermal:rf_coil",
        ]),
        e.recipes.create.deploying("create:precision_mechanism", [
          "create:precision_mechanism",
          "thermal:redstone_servo",
        ]),
      ],
      transitionalItem: "create:precision_mechanism",
      loops: 1,
      id: "tfmg/steel_mechanism",
    },
    //Item Vault
    {
      output: ["create:item_vault"],
      input: ["minecraft:barrel"],
      processes: [
        e.recipes.create.deploying("minecraft:barrel", [
          "minecraft:barrel",
          "#forge:plates/steel",
        ]),
        e.recipes.create.pressing("minecraft:barrel", [
          "minecraft:barrel",
        ]),
      ],
      transitionalItem: "minecraft:barrel",
      loops: 2,
      id: "create/item_vault",
    },
  ];

  recipes.forEach((recipe) => {
    recipeType(recipe.output, recipe.input, recipe.processes)
    .transitionalItem(recipe.transitionalItem)
    .loops(recipe.loops)
    .id(`${recipeId}${recipe.id}`);
  });
})