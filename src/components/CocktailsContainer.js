import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      currentCocktail : "",
      selectedProportions: [],
      selectedIngredients: []
    }
  }

  handleClick = (e) => {
    e.persist()
    let id = e.target.dataset.id;
    let selectedCocktail = this.props.cocktails.find(cocktail => cocktail.id == id)
    this.setState({
      currentCocktail: selectedCocktail
    })
    let proportions = this.getProportions(selectedCocktail.id)
    this.getIngredients(proportions)
  }


  getProportions = (id) => {
    let proportions = this.props.proportions.filter(proportion => proportion.cocktail_id == id)

    this.setState({
      selectedProportions: proportions
    })
    return proportions
  }

  getIngredients = (proportions) => {
    let ingredientIDs = proportions.map(proportion => proportion.ingredient_id)
    ingredientIDs = ingredientIDs.sort((a,b)=>a-b)

    let ingredients = this.props.ingredients.filter(ingredient => ingredientIDs.includes(ingredient.id))
    
    this.setState({
      selectedIngredients: ingredients
    })
  }

  render(){
    return (
      <div className="container">
        <CocktailsList handleClick={this.handleClick} cocktails={this.props.cocktails}/>
        <CocktailDisplay currentCocktail={this.state.currentCocktail} selectedIngredients = {this.state.selectedIngredients}
        selectedProportions = {this.state.selectedProportions}/>
      </div>
    )
  }
}

export default CocktailsContainer
