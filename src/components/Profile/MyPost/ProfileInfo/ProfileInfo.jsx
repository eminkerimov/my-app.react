import React from "react";
import c from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.tutorialspoint.com/general_knowledge/images/diameter_of_earth.jpg" alt="pct"/>
      </div>
      <div className={c.descriptionBlock}>Ava +description</div>
    </div>
  )
}

export default ProfileInfo;