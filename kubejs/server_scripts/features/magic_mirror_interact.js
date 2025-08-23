BlockEvents.rightClicked((e) => {

  let nodes = {
    "kubejs:arcane_spirit_node": true,
    "kubejs:eldritch_spirit_node": true,
    "kubejs:wicked_spirit_node": true,
    "kubejs:sacred_spirit_node": true,
    "kubejs:aerial_spirit_node": true,
    "kubejs:earthen_spirit_node": true,
    "kubejs:aqueous_spirit_node": true,
    "kubejs:infernal_spirit_node": true,
  };

  if ((e.hand !== "main_hand")) return;
  if (e.item.id !== "kubejs:magic_mirror") return;
  if (!nodes[e.block.id]) return;
  else {
    e.player.give(e.block.id);
    e.block.set("minecraft:air");
    e.player.damageHeldItem("main_hand", 1)
    e.player.addItemCooldown("kubejs:magic_mirror", 200);
    global.sound(e.player, "malum:ritual_absorbs_item", 1, 1, 0.2);
  }
  if (e.player.give(e.block.id)) return;
  e.player.swing();
  if (e.block.set("minecraft:air")) return;
  e.cancel();
});
