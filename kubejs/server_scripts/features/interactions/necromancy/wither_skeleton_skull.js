BlockEvents.rightClicked('minecraft:wither_skeleton_skull', e => {
  let { level, player, block } = e
  let { x, y, z } = block
  if ((player.mainHandItem.id !== "techpack:flint_and_soul") && (player.offHandItem.id !== "techpack:flint_and_soul")) return;
  
  e.server.runCommandSilent(
    `execute as @a at @s run playsound minecraft:entity.evoker.prepare_summon player @s ~ ~ ~ 2 1 1`
  )
  e.server.runCommandSilent(
    `execute as @a at @s run playsound minecraft:block.end_portal.spawn player @s ~ ~ ~ 2 1 1`
  )
  level.destroyBlock(block.pos, false)
  level.spawnParticles('minecraft:block{block_state:{Name:"minecraft:sculk"}}', false, block.pos.x + 0.5, block.pos.y + 1, block.pos.z + 0.5, 0, 0, 0, 0, 1)
  level.spawnParticles("sculk_soul", true, block.pos.x +0.5, block.pos.y +1, block.pos.z +0.5, 0, 0, 0, 0, 1)
  level.spawnParticles("sculk_soul", true, block.pos.x +1, block.pos.y +0.5, block.pos.z +1, 0, 0, 0, 0, 1)
  level.spawnParticles("sculk_soul", true, block.pos.x, block.pos.y +0.5, block.pos.z, 0, 0, 0, 0, 1)
  level.spawnParticles("sculk_soul", true, block.pos.x +1, block.pos.y +0.5, block.pos.z, 0, 0, 0, 0, 1)
  level.spawnParticles("sculk_soul", true, block.pos.x, block.pos.y +0.5, block.pos.z +1, 0, 0, 0, 0, 1)
  level.spawnParticles("soul_fire_flame", true, block.pos.x +0.5, block.pos.y +2, block.pos.z +0.5, 0, 0, 0, 0, 1)
  level.spawnParticles("soul_fire_flame", true, block.pos.x +1, block.pos.y +1.5, block.pos.z +1, 0, 0, 0, 0, 1)
  level.spawnParticles("soul_fire_flame", true, block.pos.x, block.pos.y +1.5, block.pos.z, 0, 0, 0, 0, 1)
  level.spawnParticles("soul_fire_flame", true, block.pos.x +1, block.pos.y +1.5, block.pos.z, 0, 0, 0, 0, 1)
  level.spawnParticles("soul_fire_flame", true, block.pos.x, block.pos.y +1.5, block.pos.z +1, 0, 0, 0, 0, 1)
  
  let summonEntity = level.createEntity("minecraft:wither_skeleton")

  summonEntity.setRotation(player.yaw, player.pitch)
  summonEntity.setPosition(x + 0.5, y, z + 0.5)
  summonEntity.spawn()

  e.cancel()
})