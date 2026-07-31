import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", file);
    formData.append("Caption", caption);

    try {
      await axios.post("http://localhost:6969/create-post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Post created successfully!");
      setFile(null);
      setCaption("");
      navigate("/feed")
    } catch (err) {
      console.error(err);
      alert("Failed to create post.");
    }
  };

  return (
    <section className="create-post-section">
      <div className="create-post-card">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="Image"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            type="text"
            name="Caption"
            placeholder="Enter your caption."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;