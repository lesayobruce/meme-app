import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MyMemes() {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const username = localStorage.getItem('username');
    axios
      .get(`http://localhost:9292/my-memes`)
      .then((res) => {
        setMemes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9292/memes${id}`)
      .then((res) => {
        setMemes((prevMemes) => prevMemes.filter((meme) => meme._id !== id));
      })
      .catch((err) => console.log(err));
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (memes.length === 0) {
    return <h2>You haven't added any memes yet.</h2>;
  }
  return (
    <>
      <h2>Your Memes</h2>
      <ul>
        {memes.map((meme) => (
          <li key={meme._id}>
            <img src={meme.image} alt={meme.title} />
            <h3>{meme.title}</h3>
            <p>{meme.description}</p>
            <div>
              <Link to={`/edit/${meme._id}`}>Edit</Link>
              <button onClick={() => handleDelete(meme._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default MyMemes;