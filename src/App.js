import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import Form from "./components/Form"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cocktails: [],
      proportions: [],
      ingredients: []
    }
  }

  fetchCocktails(){
    fetch(' https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(res => res.json())
    .then(cocktails => this.setState({
      cocktails: cocktails
    }))
  }
  fetchProportions(){
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
    .then(res => res.json())
    .then(proportions => this.setState({
      proportions: proportions
    }))
  }
  fetchIngredients(){
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(res => res.json())
    .then(ingredients => this.setState({
      ingredients: ingredients
    }))
  }


  componentDidMount(){
    this.fetchCocktails()
    this.fetchProportions()
    this.fetchIngredients()
  }
  handleSubmit = (formState) =>{
  console.log("submitted")
  }

  render() {
    return (
      <div>
        <CocktailsContainer ingredients={this.state.ingredients} proportions={this.state.proportions} cocktails={this.state.cocktails}/>
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
