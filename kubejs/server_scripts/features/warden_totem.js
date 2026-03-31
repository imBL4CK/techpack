BlockEvents.rightClicked('techpack:warden_totem', e => {
  let { level, player, block } = e
  if (e.hand !== "main_hand") return;
  if (player.mainHandItem.id !== "techpack:flint_and_soul") return;
  let { x, y, z } = block
  
  player.swing()
  level.destroyBlock(block.pos, false)
  let summonWarden = level.createEntity("minecraft:warden")

  summonWarden.nbt = {
    PersistenceRequired: 1,
    Brain: {
      memories: {
        "minecraft:dig_cooldown": {
          value: {},
          ttl: 0
        },
        "minecraft:is_emerging": {
          value: {},
          ttl: 100
        },
      }
    }
  }
  summonWarden.setRotation(player.yaw, player.pitch)
  summonWarden.setPosition(x + 0.5, y, z + 0.5)
  summonWarden.spawn()
  level.broadcastEntityEvent(summonWarden, 61)

  console.log("Warden totem sucecffuly activated, summoning warden.")
})