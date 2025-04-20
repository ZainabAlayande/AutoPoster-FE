import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SideBar.css';
import APLogo from '../assets/APLogo.svg';
import Logo from '../assets/Logo.png';
import Schedule from '../assets/calendar.png';
import Home from '../assets/dashboard.png';
import Settings from '../assets/setting.png';
import Drafts from '../assets/draft.png';
import History from '../assets/history.png';
import MediaLibrary from '../assets/library.png';
import ContentLibrary from './History';
import ArrowDown from '../assets/ArrowDown.svg';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (path, item) => {
    setActiveItem(item);
    navigate(path);
  };

  const handlePostScheduleClick = () => {
    console.log('1');
    setActiveItem('post-schedule');
    console.log('2');
    navigate('/schedule');
    console.log('3');
  };

  const toggleDropdown = () => { setShowDropdown(!showDropdown); };

  return (
    <div className="sidebar">
      <div className="name-logo">
        <div className="business-logo">
          {/* <img className="" src={Logo} alt="AP Logo"/> */}
        </div>
        <div className="business-name">
          <h2 className="business-name-text">Autoposter.</h2>
        </div>
      </div>

      <div className="links">
        <div
          className={`sidebar-item ${activeItem === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleItemClick('/dashboard', 'dashboard')}
        >
          <img className="side-bar-logo" src={Home} alt="AP Logo" />
          <p className='side-bar-text'>Dashboard</p>
        </div>

        <div className="sidebar-item-container">
          <div className={`sidebar-item ${activeItem === 'post-schedule' ? 'active' : ''}`}
            onClick={handlePostScheduleClick} >
            <img className="side-bar-logo" src={Schedule} alt="AP Logo" />
            <p className='side-bar-text'>Scheduled</p>
            {/* <img className="arrow-icon" src={ArrowDown} alt="Toggle Dropdown" onClick={toggleDropdown} /> */}
          </div> 
        </div>
        {/* {showDropdown && (<div className="dropdown"> <div className="dropdown-item"
          onClick={() => handleItemClick('/schedule/linkedln', 'linkedln')}> LinkedIn
        </div>

          <div className="dropdown-item"
            onClick={() => handleItemClick('/schedule/instagram', 'instagram')}> Instagram </div>
        </div>
        )} */}
        
        <div
          className={`sidebar-item ${activeItem === 'content-library' ? 'active' : ''}`}
          onClick={() => handleItemClick('/content-library', 'content-library')}
        >
          <img className="side-bar-logo" src={Drafts} alt="AP Logo" />
          <p className='side-bar-text'>Drafts</p>
        </div>

        <div
          className={`sidebar-item ${activeItem === 'content-library' ? 'active' : ''}`}
          onClick={() => handleItemClick('/content-library', 'content-library')}
        >
          <img className="side-bar-logo" src={History} alt="AP Logo" />
          <p className='side-bar-text'>History</p>
        </div>

        <div
          className={`sidebar-item ${activeItem === 'content-library' ? 'active' : ''}`}
          onClick={() => handleItemClick('/content-library', 'content-library')}
        >
          <img className="side-bar-logo" src={MediaLibrary} alt="AP Logo" />
          <p className='side-bar-text'>Media Library</p>
        </div>

        <div
          className={`sidebar-item ${activeItem === 'settings' ? 'active' : ''}`}
          onClick={() => handleItemClick('/settings', 'settings')}
        >
          <img className="side-bar-logo" src={Settings} alt="AP Logo" />
          <p className='side-bar-text'>Settings</p>
        </div>

        <div
          className={`sidebar-item-logout ${activeItem === 'logout' ? 'active' : ''}`}
          onClick={() => handleItemClick('/logout', 'logout')}
        >
          <img className="side-bar-logo" src={Settings} alt="AP Logo" />
          <p className='side-bar-text'>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;


