import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import EditMeme from './components/EditMeme';
import Register from './components/Register';
import Navbar from './components/Navbar';
import AllMemes from './components/AllMemes'
import './index.css';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} username={username} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login Register={Register} setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit/:id" element={<EditMeme username={username} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allmemes" element={<AllMemes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;