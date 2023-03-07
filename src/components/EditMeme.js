import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditMeme = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/memes/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setImageUrl(data.imageUrl);
      })
      .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedMeme = { title, description, imageUrl };
    await axios.put(`http://localhost:9292/memes/${id}`, updatedMeme);
    setLoading(false);
    navigate('/my-memes');
  };

  return (
    <div>
      <h2>Edit Meme</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default EditMeme;
