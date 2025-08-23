ServerEvents.recipes((e) => {

  let machine = (e.recipes.custommachinery.custom_machine);
  let emptyResearch = "kubejs:empty_research_page";
  let antiqueInk = "supplementaries:antique_ink";
  const pages = [
    "basic_spirit_catalyzer",
    "advanced_spirit_catalyzer",
    "boots_of_the_traveller",
    "brass_wand",
    "gravity_belt",
    "magic_mirror"
  ];
  //Page dupe
  pages.forEach((research) => {
    machine("custommachinery:industrialrevival/research_table", 200)
    .requireItem(`kubejs:${research}_research_page`)
    .damageItemTag("techpack:wands", 1)
    .requireItem(antiqueInk)
    .requireItem(emptyResearch)
    .produceItem(Item.of(`kubejs:${research}_research_page`, 2))
    .jei().priority(1);
  })
  //Spirit catalyzer
  {
    machine("custommachinery:industrialrevival/research_table", 200)
    .requireItem(emptyResearch)
    .requireItem(antiqueInk)
    .requireItem("kubejs:brass_wand_research_page")
    .requireItem("malum:warp_flux")
    .requireItem("eidolon:gold_inlay")
    .requireItem("eidolon:pewter_inlay")
    .requireItem("malum:spirit_jar")
    .requireItem(Item.of("malum:alchemical_calx", 8))
    .produceItem("kubejs:basic_spirit_catalyzer_research_page")
    .jei().priority(2);
  }
  //Magic mirror
  {
    machine("custommachinery:industrialrevival/research_table", 200)
    .requireItem(emptyResearch)
    .requireItem(antiqueInk)
    .requireItem("kubejs:basic_spirit_catalyzer_research_page")
    .requireItem(Item.of("malum:arcane_spirit", 16))
    .requireItem("malum:spectral_optic")
    .requireItem("malum:spirit_jar")
    .produceItem("kubejs:magic_mirror_research_page")
    .jei().priority(2);
  }
  //Brass wand
  {
    machine("custommachinery:industrialrevival/research_table", 200)
    .requireItem(emptyResearch)
    .requireItem(antiqueInk)
    .requireItem(Item.of("malum:arcane_spirit", 4))
    .requireItem("kubejs:quicksilver")
    .produceItem("kubejs:brass_wand_research_page")
    .jei().priority(2);
  }
  //Boots of the traveller
  {
    machine("custommachinery:industrialrevival/research_table", 200)
    .requireItem(emptyResearch)
    .requireItem(antiqueInk)
    .requireItem(Item.of("malum:spirit_fabric", 4))
    .requireItem(Item.of("malum:arcane_spirit", 2))
    .requireItem("eidolon:magicians_wax")
    .produceItem("kubejs:boots_of_the_traveller_research_page")
    .jei().priority(2);
  }
});