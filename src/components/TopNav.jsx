import React from "react";
import '../styles/TopNav.css'
import Settings from '../assets/Settings.svg';
import Notification from '../assets/NotificationBell.svg';
import Search from '../assets/SearchButton.svg';
import Girl from "../assets/Girl.jpeg";



const TopNav = ({ title }) => {
    return (
      <div className="top-nav">

        <div className="left-container">
          <h2 className="label-name">{ title }</h2>
        </div>


        <div className="right-container">
        <div className="search">
           <img className="search-image" src={Search} alt="Search" />
          <input type="text" placeholder="Search for something" />
        </div>

        <div className="buttons">
          <div className="setting-button">
             <img className="setting-image" src={Settings} alt="AP Logo" />
          </div>

          <div className="notification-button">
             <img className="notification-image" src={Notification} alt="Notification" />
            
          </div>

          <div className="profile-button">
             <img className="profile-image" src={Girl} alt="Profile" />
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default TopNav;