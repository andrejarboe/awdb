import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe.jsx';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title="Pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="./images/pasta.jpg" //there is a better way
        />

        <Recipe 
          title="Pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="./images/pasta.jpg" //there is a better way
        />

        <Recipe 
          title="Pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="./images/pasta.jpg" //there is a better way
        />
      </div>
    );
  }
}

export default RecipeApp;
