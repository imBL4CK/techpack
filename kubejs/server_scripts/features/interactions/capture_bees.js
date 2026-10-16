function NestInteraction(e, beeDrone, beeQueen, beePrincess) {
  let { level, player, block } = e
  let { x, y, z } = block
  function successfulInteraction () {
    e.server.runCommandSilent(`execute as @a at @s run playsound minecraft:block.beehive.exit player @s ~ ~ ~ 2 1 1`)
    level.destroyBlock(block.pos, false)
    player.damageHeldItem("main_hand", 1)
  }
  
  if (player.mainHandItem.id !== "naturalist:capture_net") return;
  if (player.cooldowns.isOnCooldown(player.mainHandItem)) return;

  const chanceOfDrone = 0.3;
  const chanceOfQueen = 0.1;
  const randomValue = Math.random()
  
  player.addItemCooldown("naturalist:capture_net", 200);

  if (randomValue < chanceOfQueen) {
    player.give(Item.of(beePrincess));
    player.give(Item.of(beeQueen));
    player.give(Item.of(beeDrone));
    e.server.runCommandSilent(`execute as @a at @s run title @s actionbar "A court of bees!"`)
    successfulInteraction();
  } 
  else if (randomValue < chanceOfDrone) {
    player.give(Item.of(beeDrone));
    e.server.runCommandSilent(`execute as @a at @s run title @s actionbar "A drone bee!"`)
    successfulInteraction();
  }
  else {
    e.server.runCommandSilent(`execute as @a at @s run title @s actionbar "They don't seem to want to go out..."`)
  }
  e.cancel()
}

BlockEvents.rightClicked(e => {
    if (e.block.id == "minecraft:bee_nest") {
        NestInteraction(e, "techpack:common_bee_drone", "techpack:common_bee_queen", "techpack:common_bee_princess")
    }
})