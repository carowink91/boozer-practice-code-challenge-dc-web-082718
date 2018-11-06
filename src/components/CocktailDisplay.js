import React from 'react'

const CocktailDisplay = (props) => {
  return (
    <div id="cocktail-display">
      <h1>{props.currentCocktail.name}</h1>
      <h3>{props.currentCocktail.description}</h3>
      <p>{props.currentCocktail.instructions}</p>
      {renderIngredientsAndProportions(props.selectedProportions, props.selectedIngredients)}
    </div>
  )
}

export default CocktailDisplay

function renderIngredientsAndProportions(proportions, ingredients){

  return proportions.map((proportion,index) => {
    return <div key = {proportion.id}>{proportion.amount} - {ingredients[index].name} </div>
  }
)
}
