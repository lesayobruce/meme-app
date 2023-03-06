import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MyMemes from './components/MyMemes';
import AllMemes from './components/AllMemes';
import SearchForm from './components/SearchForm';
import EditMemeForm from './components/EditMemeForm';
import DeleteMemeButton from './components/DeleteMemes';

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
          <Route path="/login" element={<LoginForm setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/my-memes" element={<MyMemes username={username} />} />
          <Route path="/all-memes" element={<AllMemes username={username} />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/edit/:id" element={<EditMemeForm username={username} />} />
          <Route path="/delete/:id" element={<DeleteMemeButton username={username} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;