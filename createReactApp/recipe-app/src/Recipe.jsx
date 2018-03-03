import React, {Component} from 'react';
import './Recipe.css';


class Recipe extends Component {
  render() {
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));

    return(
      <div className="recipeCard">
      <div className="recipeCardImg">
        <img src={img} alt={title} />      
      </div>
      <div className="recipeCardContent">
        <h3 className="recipeTitle">{title}</h3>
        <h4>Ingredients</h4>
        <ul>
          {ingredients}
        </ul>
        <h4>Instructions:</h4>
        <p>{instructions}</p>      
      </div>

      </div>
    );
  }
}

//can go at the top if you like
export default Recipe;