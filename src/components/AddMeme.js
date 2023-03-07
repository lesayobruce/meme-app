import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function AddMeme() {
  const [meme, setMeme] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/memes')
      .then(response => response.json())
      .then(data => setMemes(data));
    fetch('http://localhost:9292/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  const memeArray = memes.map(meme => (
    <div key={meme.id}>
      <img src={meme.image_url}  />
      <h2>{meme.name}</h2>
      <p>{meme.url}</p>
    
    </div>
  ));
  return (
    <div className="App">
      <h1>MemeHub</h1>
      <div style={{ display: 'flex', autoresize: 'max-width: 100%', height: 'auto', border: '0.5px solid' }}>
        {memeArray}
      </div>
    </div>
  );
}
export default AddMeme;