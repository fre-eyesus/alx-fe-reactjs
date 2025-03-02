import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], 
  favorites: [], 
  
  
  toggleFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites.filter(id => id !== recipeId) 
      : [...state.favorites, recipeId] 
  })),

  recommendations: [], 
  

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
