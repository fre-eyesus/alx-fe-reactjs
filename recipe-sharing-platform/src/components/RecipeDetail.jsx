import {useEffect, useState} from "react"

function RecipeDetail(){
    const [recipe, setRecipe] = useState([nul])
    const  [loading, setLoading] = useState(true)
    const {id} = useParams()
    useEffect(() =>{
        try{
            const fetchRecipe = async () =>{
            const response = await fetch("/data.json");
            const data = await response.json();
            const selectedRecipe = data.find((r) => r.id === parseInt(id));
        }
        
        if (selectedRecipe) {
            setRecipe(selectedRecipe);
          } else {
            console.error("Recipe not found");
          }

    }
    catch(error){
        console.log("failed to fetch recipe", error)
    }
    finally{
        setLoading(false)
    }

    fetchRecipe();
    },[id])

    if(loading){
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    if(!recipe){
        return <div className="text-center text-gray-500">404 Recipe not found</div>
    }

    return(
        <>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md" />
            <p className="mt-4 text-gray-700">{recipe.summary}</p>

            <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">

                {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
        </ul>

                <h1 className="text-2xl font-semibold mt-6">Instructions</h1>
        <ol className="list-decimal list-inside mt-2 text-gray-600">
                {recipe.instructions.map((item, index) => (
                    <li key = {index}>{item}</li>
                ))}

        </ol>
        </div>        
        </>
    )

}

export default RecipeDetail 