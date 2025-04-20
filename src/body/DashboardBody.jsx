import React from "react";
import '../styles/Dashboard.css'

const DashboardBody = () => {

  const name = localStorage.getItem('fullName');
  const email = localStorage.getItem('userEmail');

  return (
    <div className="dashboard-content">
        <h4 className="dashboard-heading">Most welcome, {name} 👋</h4>

        <div className="overview-cards">
          <div className="card light-blue">
            <h5>Scheduled Post</h5>
            <p>20</p>
          </div>
          <div className="card light-blue">
            <h5>Posted</h5>
            <p>15</p>
          </div>
          <div className="card grey">
            <h5>Pending</h5>
            <p>5</p>
          </div>
        </div>

        <div className="activity-panel">
          <p>+ Schedule New Post</p>
        </div>
      </div>
  );
};

export default DashboardBody;
