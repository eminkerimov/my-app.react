import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
    <div className={c.content}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Profile;