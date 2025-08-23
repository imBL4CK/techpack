ServerEvents.recipes((e) => {
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/single_use/gear",
    },
    cast_consumed: true,
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: "forge:gears/red_alloy",
        },
      },
    ],
    cooling_time: 130,
    fluid: {
      amount: 360,
      fluid: "kubejs:molten_red_alloy",
    },
    result: {
      tag: "forge:gears/red_alloy",
    },
  });
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/multi_use/gear",
    },
    cast_consumed: true,
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: "forge:gears/red_alloy",
        },
      },
    ],
    cooling_time: 130,
    fluid: {
      amount: 360,
      fluid: "kubejs:molten_red_alloy",
    },
    result: {
      tag: "forge:gears/red_alloy",
    },
  });
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/multi_use/ingot",
    },
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: "forge:ingots/red_alloy",
        },
      },
    ],
    cooling_time: 65,
    fluid: {
      amount: 90,
      fluid: "kubejs:molten_red_alloy",
    },
    result: {
      tag: "forge:ingots/red_alloy",
    },
  });
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/single_use/ingot",
    },
    cast_consumed: true,
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: "forge:ingots/red_alloy",
        },
      },
    ],
    cooling_time: 65,
    fluid: {
      amount: 90,
      fluid: "kubejs:molten_red_alloy",
    },
    result: {
      tag: "forge:ingots/red_alloy",
    },
  });
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/multi_use/plate",
    },
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: "forge:plates/red_alloy",
        },
      },
    ],
    cooling_time: 65,
    fluid: {
      amount: 90,
      fluid: "kubejs:molten_red_alloy",
    },
    result: {
      tag: "forge:plates/red_alloy",
    },
  });
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/single_use/plate",
    },
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          tag: "forge:plates/red_alloy",
        },
      },
    ],
    cooling_time: 65,
    fluid: {
      amount: 90,
      fluid: "kubejs:molten_red_alloy",
    },
    result: {
      tag: "forge:plates/red_alloy",
    },
  });
  e.custom({
    type: "tconstruct:casting_table",
    cast: {
      tag: "tconstruct:casts/multi_use/plate",
    },
    conditions: [
      {
        type: "forge:not",
        value: {
          type: "forge:tag_empty",
          item: "kubejs:duroplast_sheet",
        },
      },
    ],
    cooling_time: 65,
    fluid: {
      amount: 90,
      fluid: "kubejs:duroplast_resin",
    },
    result: {
      item: "kubejs:duroplast_sheet",
    },
  });
});
