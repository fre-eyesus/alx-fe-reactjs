import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeDetail from "./RecipeDetail";
function HomePage(){
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        // fetch:("/data.json").then((response => response.json()).then((recipe) => recipe.setRecipes(recipe)))
        const fetchRecipes = async () => {
        try {
            const response = await fetch("/data.json")
            const data = await response.json()
            setRecipes(data)
        }
        catch (error){
            console.log("failed to fetch recipes",error)
        }
        }
        fetchRecipes()
    }, [])

    return (
        <>
                <h1 className="m-5 text-indigo-900 text-2xl text font-bold">Home Page</h1>
                <div className ="text-center container mx-auto p-6">
                    <div className="text-center mb-8">
                        <p className="mb-6 text-indigo-950 font-bold text-xl">Welcome to the Recipe Sharing Platform!</p>
                        <h2 className=" text-indigo-950 font-bold text-xl">Featured Recipes</h2>
                    </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            
                            {recipes.map((food) => (
                               <div 
                               key={food.id} 
                               className="bg-white rounded-xl shadow-md overflow-hidden transform 
                               transition duration-300 hover:scale-105 hover:shadow-lg mx-auto"
                               >
    
                               <img 
                                   src={food.image} 
                                   alt={`Recipe for ${food.title}`} 
                                   className="w-full h-48 object-cover"
                               />
                               <div className="p-4">
                                   <h3 className=" text-indigo-950 font-medium text-xl">{food.title}</h3>
                                   <p className="mt-2  text-indigo-950 font-medium text-xl">{food.summary}</p>
                               </div>
                               <Link to={`/recipe/${food.id}`} className="text-blue-500 hover:underline mt-2 block cursor-auto">
                                                View Recipe
                                                </Link>
                           </div>
                            ))}
                  </div>
                </div>
        </>
    )

}    

export default HomePage
