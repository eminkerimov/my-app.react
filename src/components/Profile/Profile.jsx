import React from "react";
import c from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <div className={c.content}>
      <ProfileInfo/>
      <MyPosts />
    </div>
  )
}

export default Profile;