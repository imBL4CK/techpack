ServerEvents.recipes((e) => {
  let planks = [
    "oak",
    "birch",
    "spruce",
    "jungle",
    "acacia",
    "dark_oak",
    "mangrove",
    "crimson",
    "warped",
    "cherry",
  ];
  planks.forEach((recipe) => {
    e.custom({
      type: "create:filling",
      ingredients: [
        {
          item: `minecraft:${recipe}_planks`,
        },
        {
          fluid: "techpack:creosote",
          type: "fluid_stack",
          amount: 100,
        },
      ],
      results: [
        {
          id: `techpack:polished_${recipe}_planks`,
        },
      ],
    });
  });
});
