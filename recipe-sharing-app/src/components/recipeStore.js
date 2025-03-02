// import create from 'zustand';

// const useRecipeStore = create(set => ({
//   recipes: [], 
//   favorites: [], 
  
  
//   toggleFavorite: (recipeId) => set(state => ({
//     favorites: state.favorites.includes(recipeId)
//       ? state.favorites.filter(id => id !== recipeId) 
//       : [...state.favorites, recipeId] 
//   })),

//   recommendations: [], 
  

//   generateRecommendations: () => set(state => {
//     const recommended = state.recipes.filter(recipe =>
//       state.favorites.includes(recipe.id) && Math.random() > 0.5
//     );
//     return { recommendations: recommended };
//   }),
// }));

// export default useRecipeStore;
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Stores all recipes
  searchTerm: '', // Stores the search input
  setSearchTerm: (term) => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
  filteredRecipes: [], // Stores recipes matching the search
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes, 
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
}));
export default useRecipeStore;
