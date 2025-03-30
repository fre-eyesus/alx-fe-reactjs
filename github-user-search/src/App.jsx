import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header';
import MainContainer from './components/layout/MainContainer';
import Search from './components/Features/Search';
import UserProfile from './components/features/UserProfile';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="app">
        <Header />
        <MainContainer>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:username" element={<UserProfile />} />
          </Routes>
        </MainContainer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <h2>Search for GitHub Users</h2>
      <p>Enter a username in the search bar above to find GitHub users.</p>
    </div>
  );
}

export default App;