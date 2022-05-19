import React from "react";
import "./closefriend.css";
const CloseFriend = (user) => {
  console.log(user);
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.user.username}</span>
    </li>
  );
};

export default CloseFriend;
