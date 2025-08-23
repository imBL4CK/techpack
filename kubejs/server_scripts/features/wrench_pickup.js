import { whitelist } from "./wrench_filter"; 

// Original script made by lexxieblack and oxy_49 in Latvian.dev Discord, tysm!

BlockEvents.rightClicked((e) => {
  const { item, hand, block, player } = e;
  if ((hand !== "main_hand") == player.crouching) return;
  if (item.id !== "kubejs:wrench") return;
  if (block.id.startsWith("create:")) return;
  if (!whitelist[block.id]) return;
  else {
    player.give(block.id);
    block.set("minecraft:air");
    global.sound(e.player, "kubejs:wrench_interact", 1, 1, 0.2);
  }
  if (player.give(block.id)) return;
  player.swing();
  if (block.set("minecraft:air")) return;
  e.cancel();
});
