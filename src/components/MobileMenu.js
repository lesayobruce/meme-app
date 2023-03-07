import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="mobile-menu">
      <button onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
      {isOpen && (
        <div className="menu-links">
          <Link to="/add-meme">Add Meme</Link>
          <Link to="/my-memes">My Memes</Link>
          <Link to="/meme-generator">Meme Generator</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
