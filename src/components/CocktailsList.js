import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
        {this.props.cocktails.map(cocktail => <Cocktail key={cocktail.id} id={cocktail.id} handleClick={this.props.handleClick} name={cocktail.name}/>)}
      </div>
    )
  }
}

export default CocktailsList
