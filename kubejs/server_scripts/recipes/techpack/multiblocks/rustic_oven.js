ServerEvents.recipes(e => {
  let recipe = e.recipes.modular_machinery_reborn.machine_recipe
  let coal = "#techpack:library/coal_fragments"

  //Bread
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:foods/dough", 40, 21).produceItem("minecraft:bread", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Sealed leather
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("techpack:washed_leather", 40, 21).produceItem("techpack:sealed_leather", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Copper ingot
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:raw_materials/copper", 40, 21).produceItem("#c:ingots/copper", 90, 10).produceItem("#c:slag", 90, 30)
  .width(128).height(64).progressX(62).progressY(23)

  //Iron ingot
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:raw_materials/iron", 40, 21).produceItem("#c:ingots/iron", 90, 10).produceItem("#c:slag", 90, 30)
  .width(128).height(64).progressX(62).progressY(23)

  //Tin ingot
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:raw_materials/tin", 40, 21).produceItem("#c:ingots/tin", 90, 10).produceItem("#c:slag", 90, 30)
  .width(128).height(64).progressX(62).progressY(23)

  //Silver ingot
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:raw_materials/silver", 40, 21).produceItem("#c:ingots/silver", 90, 10).produceItem("#c:slag", 90, 30)
  .width(128).height(64).progressX(62).progressY(23)

  //Nickel ingot
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:raw_materials/nickel", 40, 21).produceItem("#c:ingots/nickel", 90, 10).produceItem("#c:slag", 90, 30)
  .width(128).height(64).progressX(62).progressY(23)

  //Lead ingot
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#c:raw_materials/lead", 40, 21).produceItem("#c:ingots/lead", 90, 10).produceItem("#c:slag", 90, 30)
  .width(128).height(64).progressX(62).progressY(23)

  //Andesite alloy
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 10).requireItem("#c:nuggets/zinc", 40, 10).requireItem("minecraft:andesite", 20, 30).requireItem("#c:slag", 40, 30)
  .produceItem("create:andesite_alloy", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Charcoal
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("#minecraft:logs", 40, 21).produceItem("minecraft:charcoal", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Refined soulstone
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("malum:raw_soulstone", 40, 21).produceItem("2x malum:refined_soulstone", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Stone
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("minecraft:cobblestone", 40, 21).produceItem("minecraft:stone", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Refined brilliance
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 21).requireItem("malum:raw_brilliance", 40, 21).produceItem("2x malum:refined_brilliance", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Glass
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 10).requireItem("techpack:sifted_sand", 40, 10).requireItem("#c:silicon", 20, 30).requireItem("#c:gems/quartz", 40, 30)
  .produceItem("3x minecraft:glass", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Steak
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:beef", 40, 21).produceItem("minecraft:cooked_beef", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked chicken
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:chicken", 40, 21).produceItem("minecraft:cooked_chicken", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked rabbit
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:mutton", 40, 21).produceItem("minecraft:cooked_mutton", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked rabbit
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:rabbit", 40, 21).produceItem("minecraft:cooked_rabbit", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked porkchop
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:porkchop", 40, 21).produceItem("minecraft:cooked_porkchop", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Horse Steak
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("nomansland:raw_horse", 40, 21).produceItem("nomansland:horse_steak", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked salmon
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:salmon", 40, 21).produceItem("minecraft:cooked_salmon", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked salmon
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("minecraft:cod", 40, 21).produceItem("minecraft:cooked_cod", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked billhook bass
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("nomansland:billhook_bass", 40, 21).produceItem("nomansland:cooked_billhook_bass", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked chicken cuts
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("farmersdelight:chicken_cuts", 40, 21).produceItem("farmersdelight:cooked_chicken_cuts", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked bacon
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("farmersdelight:bacon", 40, 21).produceItem("farmersdelight:cooked_bacon", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked cod slice
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("farmersdelight:cod_slice", 40, 21).produceItem("farmersdelight:cooked_cod_slice", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked salmon slice
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("farmersdelight:salmon_slice", 40, 21).produceItem("farmersdelight:cooked_salmon_slice", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Cooked mutton chops
  recipe("techpack:rustic_oven", 200).requireItem(coal, 20, 21).requireItem("farmersdelight:mutton_chops", 40, 21).produceItem("farmersdelight:cooked_mutton_chops", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Silicon
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 10).requireItem("techpack:sifted_sand", 40, 21).requireItem("#c:dusts/quartz", 20, 30).produceItem("ae2:silicon", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Fireproof brick
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 10).requireItem("2x techpack:fireclay_ball", 40, 10).requireItem("techpack:calcium_dust", 20, 30).requireItem("minecraft:mud", 40, 30)
  .produceItem("techpack:fireproof_brick", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Rubber by latex
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 10).requireItem("techpack:latex", 40, 21).requireItem("#c:dusts/sulfur", 20, 30).produceItem("techpack:rubber", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)

  //Rubber by slime
  recipe("techpack:rustic_oven", 400).requireItem(coal, 20, 10).requireItem("#c:slimeballs", 40, 21).requireItem("#c:dusts/sulfur", 20, 30).produceItem("techpack:rubber", 90, 21)
  .width(128).height(64).progressX(62).progressY(23)
})