import React, { useState, useEffect } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      fetch(`http://localhost:9292/search?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data);
          setLoading(false);
        })
        .catch(error => console.log(error));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Search for Memes</h2>
      <form>
        <div>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="text"
            id="searchInput"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {loading && <p>Loading...</p>}
      {!loading && searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
      {!loading && searchResults.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Search;
