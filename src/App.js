import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import EditMeme from './components/EditMeme';
import DeleteMeme from './components/DeleteMeme';
import Register from './components/Register';
import Navbar from './components/Navbar';
import UserMemes from './component/UserMemes'
import MobileMenu from './component/MobileMenu'
import AddMeme from './components/AddMeme'
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
          <Route path="/delete/:id" element={<DeleteMeme username={username} />} />
          <Route path="/usermemes" element={<UserMemes username={username} />} />
          <Route path="/mobilemenu" element={<MobileMenu username={username} />} />
          <Route path="/addmeme" element={<AddMeme username={username} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;