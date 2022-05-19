import React from "react";
import "./leftbar.css";
import { Users } from "../../data";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import CloseFriend from "../closefriend/CloseFriend";
const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlinedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <GroupsIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <BookmarkIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutlinedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutlineOutlinedIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <EventIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <SchoolIcon className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
