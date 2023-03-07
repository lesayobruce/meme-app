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
    const fetchMeme = async () => {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/memes/${id}`);
      const meme = response.data;
      setTitle(meme.title);
      setDescription(meme.description);
      setImageUrl(meme.imageUrl);
      setLoading(false);
    };
    fetchMeme();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedMeme = { title, description, imageUrl };
    await axios.put(`http://localhost:5000/memes/${id}`, updatedMeme);
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