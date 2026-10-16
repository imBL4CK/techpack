ServerEvents.tags("item", (e) => {
  const curios = [
    {
      item: "modular_angelring:angel_ring",
      set: "curios:key_item",
      from: "curios:angel_ring",
    },
    {
      item: "tempad:chronon_generator",
      set: "curios:trinket",
      from: "curios:bracelet",
    },
    {
      item: "tempad:creative_chronometer",
      set: "curios:trinket",
      from: "curios:bracelet",
    },
    {
      item: "tempad:chronometer",
      set: "curios:trinket",
      from: "curios:bracelet",
    },
    {
      item: "tempad:tempad",
      set: "curios:trinket",
      from: "curios:bracelet",
    },
    {
      item: "hostilenetworks:deep_learner",
      set: "curios:trinket",
      from: "curios:deep_learner",
    },
    {
      item: "pneumaticcraft:memory_stick",
      set: "curios:trinket",
      from: "curios:curio",
    },
  ];
  curios.forEach((entry) => {
    if (entry.from) {
      e.add(entry.set, entry.item);
      e.remove(entry.from, entry.item);
    } else {
      e.add(entry.set, entry.item);
    }
  });
});
