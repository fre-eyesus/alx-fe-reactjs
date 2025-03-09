import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import formikForm from './components/FormikForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <h1>User Registration</h1>
      <RegistrationForm />
      <h1>Formik Form</h1>
      <formikForm />
    </div>
    </>
  )
}

export default App
