import React, { useEffect, useState } from "react";
import axios from "axios";

const FakePostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={fetchData}>Refresh</button>

      {posts.map(post => (
        <div key={post.id} className="card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FakePostList;