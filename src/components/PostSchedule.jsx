import React from "react";
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import '../styles/PostSchedule.css';
import PostScheduleBody from "../body/PostScheduleBody";


const PostSchedule = () => {
  return (
    <div className="post-gen-container">
      <div className="side">
        <Sidebar />
      </div>

      <div className="div">
        <div className="side">
          {/* <TopNav title="Post Schedule"/> */}
        </div>

        <div className="side">
          Post Schedule!
        </div>
      </div>

    </div>
  );
};

export default PostSchedule;