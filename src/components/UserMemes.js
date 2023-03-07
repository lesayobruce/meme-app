import React, { useState, useEffect } from "react";
import axios from "axios";

const UserMemes = ({ currentUser }) => {
  const [userMemes, setUserMemes] = useState([]);

  useEffect(() => {
    const fetchUserMemes = async () => {
      const response = await axios.get(`http://localhost:9292/memes/${currentUser.id}`);
      setUserMemes(response.data);
    };
    fetchUserMemes();
  }, [currentUser]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9292/memes/${id}`);
    setUserMemes(userMemes.filter((meme) => meme.id !== id));
  };

  return (
    <div>
      <h2>Your Memes</h2>
      {userMemes.length > 0 ? (
        <ul>
          {userMemes.map((meme) => (
            <li key={meme.id}>
              <img src={meme.image_url} alt={meme.title} />
              <div>
                <h3>{meme.title}</h3>
                <p>{meme.date_published}</p>
                <p>{meme.description}</p>
              </div>
              <div>
                <button onClick={() => handleDelete(meme.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't added any memes yet.</p>
      )}
    </div>
  );
};

export default UserMemes;
