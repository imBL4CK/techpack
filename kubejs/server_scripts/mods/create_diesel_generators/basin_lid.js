ServerEvents.recipes(e =>{
    let recipeId = ['createdieselgenerators:basin_lid/']
    const recipes = [
        //Bio-Plastic
        {
        ingredients: [
            {
            fluid: "minecraft:water",
            amount: 100
            },
            {
            item: "industrialforegoing:dryrubber"
            },
            {
            item: "industrialforegoing:dryrubber"
            },
            {
            item: "industrialforegoing:dryrubber"
            },
            {
            item: "industrialforegoing:dryrubber"
            }
        ],
        processingTime: 160,
        heatRequirement: "heated",
        results: [
            {
            item: "kubejs:bio_plastic"
            }
        ],
        id: recipeId+'bio_plastic'
        }
      ]
      recipes.forEach((recipe) => {
        e.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": recipe.ingredients,
        "processingTime": recipe.processingTime,
        "heatRequirement": recipe.heatRequirement,
        "results": recipe.results
    }).id(recipe.id);
  })
})