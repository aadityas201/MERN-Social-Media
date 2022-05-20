import "./online.css";
import React from "react";

const Online = (user) => {
  const publicfolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={publicfolder + user.user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.user.username}</span>
    </li>
  );
};

export default Online;
