import React from "react";
import SideBar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import '../styles/Linkedln.css'


const PostSchedule = () => {
  return (
    <div className="linkedln-general-container">
      <div className="">
        <SideBar />
      </div>

      <div className="div">
        <div className="">
          <TopNav title="Post Schedule"/>
        </div>

        <div className="">
          Linkedln
        </div>
      </div>

    </div>
  );
};

export default PostSchedule;