ItemEvents.modification((e) => {
  e.modify("techpack:coal_coke", item => {
    item.burnTime = 6400;
  });
  e.modify("techpack:biomass", item => {
    item.burnTime = 1600;
  });
  e.modify("techpack:hop_graphite_dust", item => {
    item.burnTime = 6400;
  });
  e.modify("techpack:graphite_ingot", item => {
    item.burnTime = 12800;
  });
  e.modify("create:sand_paper", item => {
    item.maxDamage  = 128;
  });
  e.modify("create:red_sand_paper", item => {
    item.maxDamage  = 128;
  });
  e.modify("techpack:charcoal_dust", item => {
    item.burnTime = 3200;
  });
  e.modify("techpack:coal_dust", item => {
    item.burnTime = 3200;
  });
  e.modify("techpack:suffering_ending", item => {
      const entry = Item.of(item.item().id).attributeModifiers;
      const attributes = entry.withModifierAdded(
        "lodestone:magic_damage",
        { amount: 4, id: "identifier", operation: "add_value", }, 
        "mainhand"
      ).withModifierAdded(
        "minecraft:generic.movement_speed",
        { amount: -0.2, id: "identifier", operation: "add_multiplied_base", }, 
        "mainhand"
      ).withModifierAdded(
        "minecraft:player.sweeping_damage_ratio",
        { amount: 0.75, id: "identifier", operation: "add_value", }, 
        "mainhand"
      ).withModifierAdded(
        "minecraft:player.entity_interaction_range",
        { amount: 1, id: "identifier", operation: "add_value", }, 
        "mainhand"
      )
      item.setAttributeModifiersWithTooltip(attributes.modifiers())
    }
  )
  e.modify("techpack:iris_relic", item => {
      const entry = Item.of(item.item().id).attributeModifiers;
      const attributes = entry.withModifierAdded(
        "lodestone:magic_damage",
        { amount: 2, id: "identifier", operation: "add_value", }, 
        "mainhand"
      ).withModifierAdded(
        "minecraft:generic.attack_damage",
        { amount: 3, id: "identifier", operation: "add_value", }, 
        "mainhand"
      ).withModifierAdded(
        "minecraft:generic.attack_speed",
        { amount: -2.5, id: "identifier", operation: "add_value", }, 
        "mainhand"
      ).withModifierAdded(
        "minecraft:player.block_interaction_range",
        { amount: 1, id: "identifier", operation: "add_value", }, 
        "mainhand"
      )
      item.setAttributeModifiersWithTooltip(attributes.modifiers())
    }
  )
  e.modify("techpack:glitch_knife", item => {
      const entry = Item.of(item.item().id).attributeModifiers;
      const attributes = entry.withModifierAdded(
        "lodestone:magic_damage",
        { amount: 999, id: "identifier", operation: "add_value", }, 
        "mainhand"
      )
      item.setAttributeModifiersWithTooltip(attributes.modifiers())
    }
  )
});