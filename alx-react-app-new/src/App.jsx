import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Footer'
import MainContent from './components/MainContent'
import Footer from './components/Header'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter';
import UserContext from './UserContext';
import ProfilePage  from './components/ProfilePage';
import UserInfo from './components/UserInfo';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  const userData = { name: "Fireweld Tesfaye",email: "freyesus12@gmail.com"};
  
  return (
    <>
      <UserContext.Provider value={userData}>  {/* Provide the context value */}
        <ProfilePage />
      </UserContext.Provider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <WelcomeMessage />
      <Header />
      <Footer />
      <MainContent />
      <h1>Counter Applicatoin</h1>
      <Counter />
    </>
  )
}

export default App;
