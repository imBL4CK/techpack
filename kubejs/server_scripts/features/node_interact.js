ItemEvents.rightClicked("kubejs:runewood_wand", (e) => {

 let nodes = [
    {
      id: "arcane",
    },
    {
      id: "eldritch",
    },
    {
      id: "wicked",
    },
    {
      id: "sacred",
    },
    {
      id: "aerial",
    },
    {
      id: "earthen",
    },
    {
      id: "aqueous",
    },
    {
      id: "infernal",
    },
  ];

  if ((e.hand !== "main_hand")) return;
  if (e.item.id !== "kubejs:runewood_wand") return;

  nodes.forEach((spirit) => {
    if (e.target.block == `kubejs:${spirit.id}_spirit_node`) {
      e.player.give(Item.of(`malum:${spirit.id}_spirit`));
      e.player.damageHeldItem("main_hand", 1)
      global.sound(e.player, "malum:ritual_absorbs_spirit", 1, 1, 0.2);
      e.player.swing();
      e.player.addItemCooldown("kubejs:runewood_wand", 1200);
    } else { return };
    e.cancel();
  });
});
ItemEvents.rightClicked("kubejs:brass_wand", (e) => {
  
 let nodes = [
    {
      id: "arcane",
    },
    {
      id: "eldritch",
    },
    {
      id: "wicked",
    },
    {
      id: "sacred",
    },
    {
      id: "aerial",
    },
    {
      id: "earthen",
    },
    {
      id: "aqueous",
    },
    {
      id: "infernal",
    },
  ];


  if ((e.hand !== "main_hand")) return;
  if (e.item.id !== "kubejs:brass_wand") return;

  nodes.forEach((spirit) => {
    if (e.target.block == `kubejs:${spirit.id}_spirit_node`) {
      e.player.give(Item.of(`malum:${spirit.id}_spirit`, 1));
      e.player.damageHeldItem("main_hand", 1)
      global.sound(e.player, "malum:ritual_absorbs_spirit", 1, 1, 0.2);
      e.player.swing();
      e.player.addItemCooldown("kubejs:brass_wand", 900);
    } else { return };
    e.cancel();
  });
});
ItemEvents.rightClicked("kubejs:soul_stained_steel_steel_wand", (e) => {
  
 let nodes = [
    {
      id: "arcane",
    },
    {
      id: "eldritch",
    },
    {
      id: "wicked",
    },
    {
      id: "sacred",
    },
    {
      id: "aerial",
    },
    {
      id: "earthen",
    },
    {
      id: "aqueous",
    },
    {
      id: "infernal",
    },
  ];


  if ((e.hand !== "main_hand")) return;
  if (e.item.id !== "kubejs:soul_stained_steel_wand") return;

  nodes.forEach((spirit) => {
    if (e.target.block == `kubejs:${spirit.id}_spirit_node`) {
      e.player.give(Item.of(`malum:${spirit.id}_spirit`, 1));
      e.player.damageHeldItem("main_hand", 1)
      global.sound(e.player, "malum:ritual_absorbs_spirit", 1, 1, 0.2);
      e.player.swing();
      e.player.addItemCooldown("kubejs:soul_stained_steel_wand", 600);
    } else { return };
    e.cancel();
  });
});