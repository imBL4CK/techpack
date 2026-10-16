StartupEvents.registry("mob_effect", (e) => {
  //Nutrition
  e.create("techpack:nutrition")
    .effectTick((entity, level) => global.NUTRITION_EFFECT_TICK(entity, level))
    .color("#fb2419")
    .beneficial();
});