ServerEvents.recipes((e) => {

    let recipeId = ["tconstruct:melting/"];
    
    const processing = [
      "iron",
      "copper",
      "gold",
      "tin",
      "nickel",
      "lead",
      "silver",
    ];

    processing.forEach((material) => {
      e.custom({
        type: "tconstruct:melting",
        ingredient: {
          item: "create:crushed_raw_" + material,
        },
        result: {
          amount: 90,
          fluid: "tconstruct:molten_" + material,
        },
        temperature: 800,
        time: 130,
      }).id(recipeId + "crushed_raw_" + material);
    });
});
