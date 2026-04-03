ItemEvents.rightClicked("techpack:flint_and_soul", (e) => {
  e.player.swing()
  e.player.damageHeldItem(e.hand, 1)
  e.server.runCommandSilent(
    `execute as @a at @s run playsound minecraft:item.flintandsteel.use player @s ~ ~ ~ 2 1 1`
  )
  console.log("flint and soul used")
  e.cancel()
})