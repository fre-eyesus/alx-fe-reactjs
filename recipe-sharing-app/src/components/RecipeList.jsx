import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} style={{ color: "blue", textDecoration: "underline" }}>
              View Details
            </Link>
            <button 
              onClick={() => toggleFavorite(recipe.id)}
              style={{
                background: favorites.includes(recipe.id) ? "red" : "gray",
                color: "white",
                border: "none",
                padding: "5px 10px",
                marginLeft: "10px",
                cursor: "pointer"
              }}>
              {favorites.includes(recipe.id) ? "❤️ Favorited" : "🤍 Favorite"}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
