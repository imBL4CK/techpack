ServerEvents.recipes(event =>{
    let recipeId = ['createdieselgenerators:basin_lid/']
    event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [
        {
        "fluidTag": "forge:heavy_oil",
        "amount": 100
        }
    ],
    "heatRequirement": "heated",
    "processingTime": 100,
    "results": [
        {
        "fluid": "tfmg:diesel",
        "amount": 50
        },
        {
        "fluid": "tfmg:lubrication_oil",
        "amount": 50
        }
    ]
    }).id('createdieselgenerators:distilation/lubrication_oil')
})