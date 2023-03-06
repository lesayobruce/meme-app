import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
  const handleLogout = () => {
    localStorage.removeItem('username');
    props.setLoggedIn(false);
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Meme Generator</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.loggedIn ? (
          <>
            <li>
              <Link to="/add">Add Meme</Link>
            </li>
            <li>
              <Link to="/my-memes">My Memes</Link>
            </li>
          </>
        ) : null}
        <li>
          <Link to="/all-memes">All Memes</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        {props.loggedIn ? (
          <>
            <li>
              <span className="navbar-text mx-3">
                Welcome, {props.username}!
              </span>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;