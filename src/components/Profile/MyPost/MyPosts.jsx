import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";


const MyPosts = () => {
  
  let posts = [
    {id: 1, message: "Hi how are you?", likesCount:19},
    {id: 2, message: "It's my first post!", likesCount:23},
]

  let postElements = posts.map (p => <Post message={p.message} likecount={p.likesCount}/> );

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
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;