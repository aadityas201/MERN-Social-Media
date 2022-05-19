import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/mainfeed/Feed";
import "./home.css";
import Rightbar from "../../components/rightbar/Rightbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
