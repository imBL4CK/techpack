// Original code by Minimaxi28, see https://github.com/Minimaxi28/Minimaxi-s-KubeJS-Things/wiki/1.21.1#pushreaction

StartupEvents.registry('block', event => {
  const $SoundType = Java.loadClass("net.minecraft.world.level.block.SoundType")
  const $AmethystClusterBlock = Java.loadClass("net.minecraft.world.level.block.AmethystClusterBlock")
  const $BlockBehaviourProperties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
  const $PushReaction = Java.loadClass("net.minecraft.world.level.material.PushReaction")

  event.createCustom("techpack:small_cinnabar_bud", () => new $AmethystClusterBlock(3.0, 4.0, $BlockBehaviourProperties.of()
      .forceSolidOn().noOcclusion().sound($SoundType.SMALL_AMETHYST_BUD).destroyTime(1.5).explosionResistance(1.5).lightLevel(blockState => 1).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe")

  event.createCustom("techpack:medium_cinnabar_bud", () => new $AmethystClusterBlock(4.0, 3.0, $BlockBehaviourProperties.of()
    .forceSolidOn().noOcclusion().sound($SoundType.MEDIUM_AMETHYST_BUD).destroyTime(1.5).explosionResistance(1.5).lightLevel(blockState => 2).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe")

  event.createCustom("techpack:large_cinnabar_bud", () => new $AmethystClusterBlock(5.0, 3.0, $BlockBehaviourProperties.of()
    .forceSolidOn().noOcclusion().sound($SoundType.LARGE_AMETHYST_BUD).destroyTime(1.5).explosionResistance(1.5).lightLevel(blockState => 4).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe")
    
  event.createCustom("techpack:cinnabar_cluster", () => new $AmethystClusterBlock(7.0, 3.0, $BlockBehaviourProperties.of()
    .forceSolidOn().noOcclusion().sound($SoundType.AMETHYST_CLUSTER).destroyTime(1.5).explosionResistance(1.5).lightLevel(blockState => 5).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe")
  
  event.createCustom("techpack:sulfur_cluster", () => new $AmethystClusterBlock(7.0, 3.0, $BlockBehaviourProperties.of()
    .forceSolidOn().noOcclusion().sound($SoundType.AMETHYST_CLUSTER).destroyTime(1.5).explosionResistance(1.5).lightLevel(blockState => 5).pushReaction($PushReaction.DESTROY)
  )).tag("minecraft:mineable/pickaxe")
})

StartupEvents.registry("item", event => {
  const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")
  const $IProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")

  event.createCustom("techpack:sulfur_cluster", () => new $BlockItem(Block.getBlock("techpack:sulfur_cluster"),new $IProperties()))
  event.createCustom("techpack:cinnabar_cluster", () => new $BlockItem(Block.getBlock("techpack:cinnabar_cluster"),new $IProperties()))
  event.createCustom("techpack:small_cinnabar_bud", () => new $BlockItem(Block.getBlock("techpack:small_cinnabar_bud"),new $IProperties()))
  event.createCustom("techpack:medium_cinnabar_bud", () => new $BlockItem(Block.getBlock("techpack:medium_cinnabar_bud"),new $IProperties()))
  event.createCustom("techpack:large_cinnabar_bud", () => new $BlockItem(Block.getBlock("techpack:large_cinnabar_bud"),new $IProperties()))
})
