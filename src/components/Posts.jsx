import Data from "./Dataposts";
import { useState } from 'react';

function Posts() {

  const [posts,setPosts] = useState(Data); //เก็บข้อมูล+อัพเดท
  
  const handleLike = (index) => {
    const updatedPosts = [...posts]; 
    updatedPosts[index].likes = updatedPosts[index].likes + 1; // เพิ่มจำนวน Likes 
    setPosts(updatedPosts); 
  };

  const handleDislike = (index) => {
    const updatedPosts = [...posts]; 
    if (updatedPosts[index].likes > 0) {
      updatedPosts[index].likes = updatedPosts[index].likes - 1; // ลดจำนวน Likes 
      setPosts(updatedPosts); 
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post, index) => ( 
          <div className="post-item" key={index}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">
              {post.content}
            </p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(index)}>Like</button>
              <button className="dislike-button" onClick={() => handleDislike(index)}>Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
