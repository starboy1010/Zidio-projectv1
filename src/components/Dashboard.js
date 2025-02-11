import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Task Manager Dashboard</h2>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Tasks Completed</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>Pending Tasks</h3>
          <p>8</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Deadlines</h3>
          <p>3</p>
        </div>
      </div>

      <div className="task-list">
        <h3>Recent Tasks</h3>
        <ul>
          <li>📌 Design UI for Task Manager ✅</li>
          <li>⚙️ Implement API Integration ⏳</li>
          <li>📝 Write Documentation ⏳</li>
          <li>🛠 Fix Login Issues ✅</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
