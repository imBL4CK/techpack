StartupEvents.registry("item", (e) => {

  let pages = [
    "empty",
    "basic_spirit_catalyzer",
    "advanced_spirit_catalyzer",
    "boots_of_the_traveller",
    "brass_wand",
    "gravity_belt",
    "magic_mirror"
  ];
  let cards = [
    "empty",
  ];

  pages.forEach((registry) => {
    e.create(`${registry}_research_page`).texture("kubejs:item/research_page").tag("techpack:researches");
  });
  cards.forEach((registry) => {
    e.create(`${registry}_data_card`).texture("kubejs:item/data_card").tag("techpack:data_cards");
  });
});
