import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:6969/post");
                setPosts(res.data.posts);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="feed">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img src={post.Image} alt={post.Caption} />
                        <p>{post.Caption}</p>
                    </div>
                ))
            ) : (
                <h2>No posts found.</h2>
            )}
        </section>
    );
};

export default Feed;