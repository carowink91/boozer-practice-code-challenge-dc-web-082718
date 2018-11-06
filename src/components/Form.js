import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredientInputs: 1,
      cocktail:{
        name: "",
        description:"",
        instructions:""
      },
      proportions: [

      ]
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render(){
    return (
      <form className = "form" onSubmit = {this.handleSubmit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input onChange = {this.handleCocktailChange} name = "name" type="text"/>

        <p>Description</p>
        <input onChange = {this.handleCocktailChange} name = "description"  type="text"/>

        <p>Instructions</p>
        <input onChange = {this.handleCocktailChange} name = "instructions" type="text"/>

        <h3>Proportions</h3>

        {this.renderAdditionalInputs()}

        <p><button onClick = {this.handleClick}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }

  handleCocktailChange = (e) => {
    this.setState({
      cocktail:{
        ...this.state.cocktail,
        [e.target.name]: e.target.value
      }
    })
  }
  handleProportionChange = (e) =>{
    let index = e.target.dataset.index
    let proportionsLength = this.state.proportions.length
    if (index >= proportionsLength){
      this.state.proportions.push({[e.target.name]: e.target.value})
      this.setState({
        proportions: this.state.proportions
      })
    }
    else{
      this.state.proportions[index][[e.target.name]] =e.target.value
      this.setState({
        proportions: this.state.proportions
      })

  }
}

  handleClick = (e) => {
    e.preventDefault()
    this.setState(
      {
        ingredientInputs: this.state.ingredientInputs +1
      }
    )

  }

  renderAdditionalInputs = () =>{

    let inputs = []
    for(let i = 0; i < this.state.ingredientInputs; i++){
        inputs.push(<div key = {i} className="container">
          <p>Ingredient Name<br/>
          <input data-index = {i} name = "ingredient" onChange = {this.handleProportionChange} type="text"/>
          </p>
          <p>Quantity<br/>
          <input data-index = {i} name = "quantity" onChange = {this.handleProportionChange} type="text"/>
          </p>
        </div>)
    }
    return inputs
  }

}

export default Form
