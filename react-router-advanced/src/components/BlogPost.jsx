import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams(); // Get the dynamic ID from the URL

  return (
    <div>
      <h1>📝 Blog Post ID: {postId}</h1>
      <p>This is a dynamic blog post page for post {postId}.</p>
    </div>
  );
};

export default BlogPost;
