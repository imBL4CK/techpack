ServerEvents.recipes(e =>{
  let recipeId = ['tfmg:distillation/custom/']
  //Crude oil 6 outputs compat
  e.custom({
    "type": "tfmg:distillation",
    "ingredients": [
    {
      "fluidTag": "forge:crude_oil",
      "nbt": {},
      "amount": 180
    }
    ],
    "results": [
      {
      "fluid": "tfmg:heavy_oil",
      "amount": 40
      },
      {
      "fluid": "tfmg:diesel",
      "amount": 30
      },
      {
      "fluid": "tfmg:kerosene",
      "amount": 20
      },
      {
      "fluid": "tfmg:naphtha",
      "amount": 20
      },
      {
      "fluid": "tfmg:gasoline",
      "amount": 40
      },
      {
      "fluid": "tfmg:lpg",
      "amount": 30
      }
    ]
  }).id(recipeId+'crude_oil_6_out_compat')
  //Crude oil 5 outputs compat
  e.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {
      "fluidTag": "forge:crude_oil",
      "nbt": {},
      "amount": 170
      }
    ],
    "results": [
      {
      "fluid": "tfmg:heavy_oil",
      "amount": 40
      },
      {
      "fluid": "tfmg:diesel",
      "amount": 30
      },
      {
      "fluid": "tfmg:kerosene",
      "amount": 20
      },
      {
      "fluid": "tfmg:gasoline",
      "amount": 40
      },
      {
      "fluid": "tfmg:lpg",
      "amount": 30
      }
    ]
  }).id(recipeId+'crude_oil_5_out_compat')
})
