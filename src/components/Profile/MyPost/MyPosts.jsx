import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";


const MyPosts = () => {
  return (
    <div className={c.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
        <textarea placeholder="Type here..." cols="20" rows="5"></textarea>
        </div>
        <div>
        <button>Add Post</button>
        </div>
      </div>
      <div className={c.posts}>
        <Post message="Hi how are you?" likecount="19"/>
        <Post message="Its my first post!" likecount="23"/>
      </div>
    </div>
  )
}

export default MyPosts;