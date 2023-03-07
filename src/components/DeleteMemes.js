import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteMeme() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .delete(`/memes/${id}`)
      .then(() => {
        navigate('/my-memes');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Meme</button>
    </div>
  );
}

export default DeleteMeme;