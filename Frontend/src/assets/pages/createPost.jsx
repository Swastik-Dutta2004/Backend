import React from "react";

const CreatePost = () => {
  return (
    <section className="create-post-section">
      <div className="create-post-card">
        <h1>Create Post</h1>

        <form>
          <input
            type="file"
            name="image"
            accept="image/*"
          />

          <input
            type="text"
            name="caption"
            placeholder="Enter your caption."
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;