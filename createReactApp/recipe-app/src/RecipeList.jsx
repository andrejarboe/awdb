import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "./images/pasta.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "./images/milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "./images/avocado_toast.jpg"
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipies = this.props.recipes.map((recipe, index) =>(
      <Recipe key={index} {...recipe} />
    ));
    return(
      <div className="recipe-list">
        {recipies}
      </div>
    );
  }
}

//can go at the top if you like
export default RecipeList;