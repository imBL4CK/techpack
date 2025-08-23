ServerEvents.recipes((e) => {

  let daytime = "(0,11999)"
  let nocturnal = "(12000,23999)"
  let recipes = [
    {
      flowers: "#minecraft:flowers",
      habit: daytime,
      time: 600,
      species: "common",
      comb: "sweet"
    },
    {
      flowers: "#minecraft:flowers",
      habit: daytime,
      time: 600,
      species: "boreal",
      comb: "sticky"
    }
  ]
  recipes.forEach((recipe) => {
    if (recipe.habit == daytime) {
    e.recipes.custommachinery
      .custom_machine("techpack:apiary", recipe.time)
      .requireBlock(recipe.flowers, true, 1, 0, 1, -1, 0, -1)
      .requireTime(recipe.habit)
      .damageItem(`techpack:${recipe.species}_bee_drone`, 1).chance(0.2)
      .damageItem(`techpack:${recipe.species}_bee_queen`, 1).chance(0.2)
      .produceItem(`techpack:${recipe.comb}_comb`).chance(0.75)
      .produceItem("techpack:beewax")
      .info(info => info.tooltip("is produced only during day").item("minecraft:clock")).jei()
  }
    if (recipe.habit == nocturnal) {
    e.recipes.custommachinery
      .custom_machine("techpack:apiary", recipe.time)
      .requireBlock(recipe.flowers, true, 1, 0, 1, -1, 0, -1)
      .requireTime(recipe.habit)
      .damageItem(`techpack:${recipe.species}_bee_drone`, 1).chance(0.2)
      .damageItem(`techpack:${recipe.species}_bee_queen`, 1).chance(0.2)
      .produceItem(`techpack:${recipe.comb}_comb`).chance(0.75)
      .produceItem("techpack:beewax")
      .info(info => info.tooltip("is produced only during night").item("minecraft:clock")).jei()
  }
  else {}
  })
});