import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function AddRecipeForm() {
    const [title, setTitle] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [preparation, setPreparation] = useState('')
    const [error, setError] = useState({ title: "", ingredient: "", preparation: "" })

    const validateForm = () => {
        const newErrors = { title: "", ingredient: "", preparation: "" }
        if (!title.trim()) newErrors.title = "Recipe title field is required!"
        if (!ingredient.trim()) {newErrors.ingredient = "Recipe ingeredient field is required!"}
        else if (ingredient.split(",").length < 2) {newErrors.ingredient = 
            "please enter at least two ingredients"}
        
        if (!preparation.trim()) newErrors.preparation = "Recipe Preparation is required!"

        setError(newErrors)
        return Object.values(newErrors).every((e) => e === "")
    }


    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleInputIngredient = (e) => {
        setIngredient(e.target.value)
       
    }
    const handleInputPreparation = (e) => {
        setPreparation(e.target.value)
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (validateForm()){
            alert("Form submitted successfully")
        }
    }


  return (
    <>  
   <form onSubmit={handleSubmit}>
        <div className="container mx-auto p-6">
            <h3 className="mb-6">Add Recipes below:</h3>
            <input type="text" value={title} onChange={handleInputTitle}
            placeholder='Insert recipe title here...' className="mb-6"/>
            {error.title && <p className='text-red-500 text-sm mt-0 mb-4'>{error.title}</p>}

            <textarea 
            value={ingredient} 
            onChange={handleInputIngredient} 
            placeholder="Insert recipe ingredient."
           className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {error.ingredient && <p className='text-red-500 text-sm mt-0 mb-4'>{error.ingredient}</p>}
             <textarea 
            value={preparation} 
            onChange={handleInputPreparation} 
            placeholder="Insert recipe preparation.."
           className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />  
            {error.preparation && <p className='text-red-500 text-sm mt-0 mb-4'>{error.preparation}</p>} 

    <button className="p-4 border border-indigo-900 text-indigo-900 text-sm font-bold rounded-md hover:bg-indigo-900 hover:text-white transition block mx-auto mt-4">Submit</button>
    </div>
   </form>

  
    </>
  )
}

export default AddRecipeForm