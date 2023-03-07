import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllMemes() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:9292/memes')
      .then(response => {
        setMemes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching memes: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>All Memes</h1>
      {loading ? (
        <p>Loading memes...</p>
      ) : (
        <div>
          {memes.map(meme => (
            <div key={meme.id}>
              <h2>{meme.title}</h2>
              <img src={meme.imageUrl} alt={meme.title} />
              <p>{meme.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllMemes;
