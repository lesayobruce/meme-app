import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AllMemes() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get('http://localhost:9292/all-memes');
        setMemes(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch memes');
        setLoading(false);
      }
    };
    fetchMemes();
  }, []);
  if (loading) {
    return <div>Loading memes...</div>;
  }
  if(error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>Memes Galery</h1>
      {memes.length === 0 && <div>No memes found</div>}
      {memes.length > 0 && (
        <ul>
          {memes.map((meme) => (
            <li key={meme.id}>
              <Link to={`/edit/${meme.id}`}>
                <img src={meme.image_url} alt={meme.title} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default AllMemes;
2:27
Delete memes
2:27
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function DeleteMemeButton() {
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
export default DeleteMemeButton;