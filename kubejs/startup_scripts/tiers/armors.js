const $ArmorMaterial = Java.loadClass("net.minecraft.world.item.ArmorMaterial");

global.ARMOR_MATERIALS = {
  WANDERERGALOSHES: $ArmorMaterial.Layer("techpack:wanderer_galoshes")
};

StartupEvents.registry("armor_material", (e) => {
  e.create("techpack:wanderer_galoshes")
    .defense({
      helmet: 0,
      chestplate: 0,
      leggings: 0,
      boots: 2,
    })
    .enchantmentValue(7)
    .equipSound("minecraft:item.armor.equip_netherite")
    .repairIngredient(() => Ingredient.of("malum:soulwoven_silk"))
    .layers([global.ARMOR_MATERIALS.WANDERERGALOSHES])
    .toughness(1.5)
    .knockbackResistance(0.1);
});

StartupEvents.registry("item", (e) => {
  e.create("techpack:wanderer_galoshes", "boots").material("techpack:wanderer_galoshes");
});