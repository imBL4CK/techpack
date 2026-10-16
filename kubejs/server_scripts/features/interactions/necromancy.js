
function revivalInteraction(e, entityToSummon) {
  function revivalVisuals() {
    e.server.runCommandSilent(`execute as @a at @s run title @s actionbar "You feel a presence arising..."`)
    e.server.runCommandSilent(`execute as @a at @s run playsound minecraft:entity.evoker.prepare_summon player @s ~ ~ ~ 2 1 1`);
    e.server.runCommandSilent(`execute as @a at @s run playsound minecraft:block.end_portal.spawn player @s ~ ~ ~ 2 1 1`);
    level.destroyBlock(block.pos, false)
    level.spawnParticles('minecraft:block{block_state:{Name:"minecraft:sculk"}}', false, block.pos.x + 0.5, block.pos.y + 1, block.pos.z + 0.5, 0, 0, 0, 0, 1);
    level.spawnParticles("sculk_soul", true, block.pos.x +0.5, block.pos.y +1, block.pos.z +0.5, 0, 0, 0, 0, 1);
    level.spawnParticles("sculk_soul", true, block.pos.x +1, block.pos.y +0.5, block.pos.z +1, 0, 0, 0, 0, 1);
    level.spawnParticles("sculk_soul", true, block.pos.x, block.pos.y +0.5, block.pos.z, 0, 0, 0, 0, 1);
    level.spawnParticles("sculk_soul", true, block.pos.x +1, block.pos.y +0.5, block.pos.z, 0, 0, 0, 0, 1);
    level.spawnParticles("sculk_soul", true, block.pos.x, block.pos.y +0.5, block.pos.z +1, 0, 0, 0, 0, 1);
    level.spawnParticles("soul_fire_flame", true, block.pos.x +0.5, block.pos.y +2, block.pos.z +0.5, 0, 0, 0, 0, 1);
    level.spawnParticles("soul_fire_flame", true, block.pos.x +1, block.pos.y +1.5, block.pos.z +1, 0, 0, 0, 0, 1);
    level.spawnParticles("soul_fire_flame", true, block.pos.x, block.pos.y +1.5, block.pos.z, 0, 0, 0, 0, 1);
    level.spawnParticles("soul_fire_flame", true, block.pos.x +1, block.pos.y +1.5, block.pos.z, 0, 0, 0, 0, 1);
    level.spawnParticles("soul_fire_flame", true, block.pos.x, block.pos.y +1.5, block.pos.z +1, 0, 0, 0, 0, 1);
  }
  let { level, player, block } = e;
  let { x, y, z } = block;
  let summonEntity = level.createEntity(entityToSummon);

  if ((player.mainHandItem.id !== "techpack:flint_and_soul")) return;
  if (player.cooldowns.isOnCooldown(player.mainHandItem)) return;
      player.damageHeldItem("main_hand", 1)
      player.addItemCooldown("techpack:flint_and_soul", 60);

  revivalVisuals()
  if (entityToSummon == "minecraft:warden") {
    level.broadcastEntityEvent(summonEntity, 61)
    summonEntity.nbt = {
      PersistenceRequired: 1,
      Brain: { memories: {
          "minecraft:dig_cooldown": { value: {},  ttl: 0 },
          "minecraft:is_emerging": { value: {}, ttl: 100 },
        }
      }
    }
  }
      summonEntity.setRotation(player.yaw, player.pitch);
      summonEntity.setPosition(x + 0.5, y, z + 0.5);
      summonEntity.spawn();
  e.cancel();
}

BlockEvents.rightClicked(e => {
    if (e.block.id == "minecraft:creeper_head") {
        revivalInteraction(e, "minecraft:creeper")
    }
    if (e.block.id == "minecraft:piglin_head") {
        revivalInteraction(e, "minecraft:piglin")
    }
    if (e.block.id == "minecraft:skeleton_skull") {
        revivalInteraction(e, "minecraft:skeleton")
    }
    if (e.block.id == "minecraft:wither_skeleton_skull") {
        revivalInteraction(e, "minecraft:wither_skeleton")
    }
    if (e.block.id == "minecraft:zombie_head") {
        revivalInteraction(e, "minecraft:zombie")
    }
    if (e.block.id == "techpack:warden_totem") {
        revivalInteraction(e, "minecraft:warden")
    }
})