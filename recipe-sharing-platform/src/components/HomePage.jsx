import { useEffect, useState } from "react"
function HomePage(){
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        // fetch:("/data.json").then((response => response.json()).then((recipe) => recipe.setRecipes(recipe)))
        const fetchRecipes = async () => {
        try {
            const response = await fetch("data.json")
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
            <div className ="text-center container mx-auto p-6">
                <div className="text-center mb-8">
                    <h1>Home Page</h1>
                    <p>Welcome to the Recipe Sharing Platform!</p>
                    <h2>Featured Recipes</h2>
                </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        
                        {recipes.map((food) => (
                           <div 
                           key={food.id} 
                           className="bg-white rounded-xl shadow-md overflow-hidden transform 
                           transition duration-300 hover:scale-105 hover:shadow-lg"
                           >
                            
                           <img 
                               src={food.image} 
                               alt={`Recipe for ${food.title}`} 
                               className="w-full h-48 object-cover"
                           />
                           <div className="p-4">
                               <h3 className="text-xl font-semibold text-gray-800">{food.title}</h3>
                               <p className="text-gray-600 mt-2">{food.summary}</p>
                           </div>
                       </div>
                        ))}
              </div>
            </div>
        </>
    )

}    

export default HomePage