ServerEvents.recipes((e) => {

  let daytime = "(0,11999)"
  let nocturnal = "(12000,23999)"
  let breed = [
    {
      species: "common",
      habit: daytime,
      time: 1200
    },
    {
      species: "boreal",
      habit: daytime,
      time: 1500
    }
  ]
  breed.forEach((recipe) => {
    
  e.recipes.custommachinery
    .custom_machine("techpack:bee_house", recipe.time)
    .requireTime(recipe.habit)
    .requireBlock("#minecraft:flowers", true, 1, 0, 1, -1, 0, -1)
    .damageItem(`techpack:${recipe.species}_bee_drone`, 1).chance(0.2)
    .damageItem(`techpack:${recipe.species}_bee_queen`, 1).chance(0.2)
    .produceItem(`techpack:${recipe.species}_bee_drone`).chance(0.25)
    .produceItem(`techpack:${recipe.species}_bee_queen`).chance(0.1)
  })
});
