import React from "react";
import c from "./Post.module.css";


const Post = (props) => {
  return (
        <div className={c.item}>
          <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/FI/en/999/EP4396-CUSA10659_00-AV00000000000118/1575450133000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="ava"/>
          { props.message}
          <div>
            {props.likesCount} <span>like</span>
          </div>
        </div>
  )
}

export default Post;