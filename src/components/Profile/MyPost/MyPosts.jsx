import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Posts/Post";


const MyPosts = (props) => {

  let postElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount}/> );

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