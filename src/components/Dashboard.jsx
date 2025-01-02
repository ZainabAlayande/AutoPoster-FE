import React from 'react';
import '../styles/Dashboard.css';
import SideBar from './Sidebar';
import TopNav from './TopNav';
import DashboardBody from '../body/DashboardBody';

const Dashboard = () => {
  const name = localStorage.getItem('fullName');
  const email = localStorage.getItem('userEmail');

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      
      <div className="main-content">
        <TopNav title="Dashboard"/>
        <DashboardBody />
      </div>
    </div>
  );
};

export default Dashboard;
