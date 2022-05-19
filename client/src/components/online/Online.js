import "./online.css";
import React from "react";

const Online = (user) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.user.username}</span>
    </li>
  );
};

export default Online;
