import React from "react";
import "./closefriend.css";
const CloseFriend = (user) => {
  const publicfolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={publicfolder + user.user.profilePicture}
        alt=""
      />
      <span className="sidebarFriendName">{user.user.username}</span>
    </li>
  );
};

export default CloseFriend;
