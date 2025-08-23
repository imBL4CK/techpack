BlockEvents.rightClicked('malum:totemic_staff', (e) => {

  if (e.hand !== "main_hand") return;
  if (e.item.id !== 'malum:totemic_staff') return;
  if (e.block.id !== "malum:exposed_runewood_log") return;
  else {
    e.item.count--;
    e.block.set("malum:runewood_log");
    e.player.give("kubejs:runewood_wand");
    e.player.swing();
    global.sound(e.player, "malum:spirit_altar_absorbs_item", 1, 1, 0.2);
  }
  e.cancel();
});
