import React from "react";
import TopNav from "./TopNav";
import SideBar from "./Sidebar";
import '../styles/ContentLibrary.css';



const History = () => {
    return (
      <div className="content-library-gen-container">

      <div className="cont-lib-side">
        <SideBar />
      </div>

      <div className="div">
        <div className="side">
          <TopNav title="Content Library"/>
        </div>

        <div className="side">
          History!
        </div>
      </div>


    </div>
    );
  };
  
  export default History;