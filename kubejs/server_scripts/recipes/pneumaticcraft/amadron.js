ServerEvents.recipes((e) => {
  //Emerald to oil
  e.custom({
    type: "pneumaticcraft:amadron",
    id: "library/pneumaticcraft/amadron/emerald_to_oil",
    input: {
      type: "ITEM",
      amount: 1,
      id: "minecraft:emerald",
    },
    level: 0,
    output: {
      type: "FLUID",
      amount: 1000,
      id: "tfmg:crude_oil",
    },
    static: true,
  });
  //Oil to Emerald
  e.custom({
    type: "pneumaticcraft:amadron",
    id: "library/pneumaticcraft/amadron/oil_to_emerald",
    input: {
      type: "FLUID",
      amount: 5000,
      id: "tfmg:crude_oil",
    },
    level: 0,
    output: {
      type: "ITEM",
      amount: 1,
      id: "minecraft:emerald",
    },
    static: true,
  });
});
