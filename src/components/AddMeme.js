import React, { useState } from "react";

const AddMeme = ({ handleAddMeme }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddMeme(title, imageUrl);
    setTitle("");
    setImageUrl("");
  };

  return (
    <div>
      <h1>Add Meme</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Meme</button>
      </form>
    </div>
  );
};

export default AddMeme;
