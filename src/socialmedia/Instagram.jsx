import React from "react";
import SideBar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import '../styles/Instagram.css';
import InstagramBody from "../body/InstagramBody";


const Instagram = () => {
  return (
    <div className="instagram-general-container">
      <div className="">
        <SideBar />
      </div>

      <div className="div">
        <div className="">
          <TopNav title="Post Schedule" />
        </div>

        <div className="">
          <InstagramBody />
        </div>
      </div>

    </div>
  );
};

export default Instagram;