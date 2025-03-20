import { useState } from 'react'
import './index.css'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
       <h1 className="text-center text-red-700">Recipe Sharing Platform</h1>
      <p className="text-center text-red-700">Welcome to the Recipe Sharing Platform!</p>
      <HomePage />
    </>
  )
}

export default App
