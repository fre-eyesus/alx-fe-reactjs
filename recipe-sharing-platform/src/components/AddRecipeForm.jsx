import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function AddRecipeForm() {
    const [title, setTitle] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [steps, setSteps] = useState('')
    const [errors, setErrors] = useState({ title: "", ingredient: "", steps: "" })

    const validateForm = () => {
        const newErrors = { title: "", ingredient: "", steps: "" }
        if (!title.trim()) newErrors.title = "Recipe title field is required!"
        if (!ingredient.trim()) {newErrors.ingredient = "Recipe ingeredient field is required!"}
        else if (ingredient.split(",").length < 2) {newErrors.ingredient = 
            "please enter at least two ingredients"}
        
        if (!steps.trim()) newErrors.steps = "Recipe steps is required!"

        setErrors(newErrors)
        return Object.values(newErrors).every((e) => e === "")
    }


    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleInputIngredient = (e) => {
        setIngredient(e.target.value)
       
    }
    const handleInputSteps = (e) => {
        setSteps(e.target.value)
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
            {errors.title && <p className='text-red-500 text-sm mt-0 mb-4'>{errors.title}</p>}

            <textarea 
            value={ingredient} 
            onChange={handleInputIngredient} 
            placeholder="Insert recipe ingredient."
           className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.ingredient && <p className='text-red-500 text-sm mt-0 mb-4'>{errors.ingredient}</p>}
             <textarea 
            value={steps} 
            onChange={handleInputSteps} 
            placeholder="Insert recipe steps.."
           className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />  
            {errors.steps && <p className='text-red-500 text-sm mt-0 mb-4'>{errors.steps}</p>} 

    <button className="p-4 border border-indigo-900 text-indigo-900 text-sm font-bold rounded-md hover:bg-indigo-900 hover:text-white transition block mx-auto mt-4">Submit</button>
    </div>
   </form>

  
    </>
  )
}

export default AddRecipeForm