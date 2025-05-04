import React from 'react';
import Image from 'next/image';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>BizLink</h2>
      </div>
      
      <div className="nav-section">
        <ul>
          <li className="nav-item">
            <i className="icon home-icon"></i>
            <span>Dashboard</span>
          </li>
          <li className="nav-item">
            <i className="icon tasks-icon"></i>
            <span>Tasks</span>
            <span className="badge">2</span>
          </li>
          <li className="nav-item">
            <i className="icon activity-icon"></i>
            <span>Activity</span>
          </li>
          <li className="nav-item active">
            <i className="icon customers-icon"></i>
            <span>Customers</span>
          </li>
          <li className="nav-item">
            <i className="icon settings-icon"></i>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      
      <div className="section-header">
        <h3>Projects</h3>
      </div>
      
      <div className="projects-section">
        <ul>
          <li className="project-item">
            <i className="icon project-icon bizconnect-icon"></i>
            <span>BizConnect</span>
            <span className="badge">7</span>
          </li>
          <li className="project-item">
            <i className="icon project-icon growth-icon"></i>
            <span>Growth Hub</span>
          </li>
          <li className="project-item">
            <i className="icon project-icon conversion-icon"></i>
            <span>Conversion Path</span>
          </li>
          <li className="project-item">
            <i className="icon project-icon marketing-icon"></i>
            <span>Marketing</span>
          </li>
        </ul>
      </div>
      
      <div className="section-header members-header">
        <h3>Members</h3>
        <button className="add-member-btn">
          <i className="plus-icon"></i>
        </button>
      </div>
      
      <div className="members-section">
        <ul>
          <li className="member-item">
            <div className="member-avatar">
              <div className="avatar-wrapper">
                <Image 
                  src="/images/ashley.png" 
                  alt="Sandra Perry"
                  width={32}
                  height={32}
                  className="avatar-img"
                />
                <span className="status-indicator online"></span>
              </div>
            </div>
            <div className="member-info">
              <span className="member-name">Sandra Perry</span>
              <span className="member-role">Product Manager</span>
            </div>
          </li>
          
          <li className="member-item">
            <div className="member-avatar">
              <div className="avatar-wrapper">
                <Image 
                  src="/images/omar.png"
                  alt="Antony Cardenas"
                  width={32}
                  height={32}
                  className="avatar-img"
                />
                <span className="status-indicator online"></span>
              </div>
            </div>
            <div className="member-info">
              <span className="member-name">Antony Cardenas</span>
              <span className="member-role">Sales Manager</span>
            </div>
          </li>
          
          <li className="member-item">
            <div className="member-avatar">
              <div className="avatar-wrapper">
                <Image 
                  src="/images/pablo.jpg" 
                  alt="Jamal Connolly"
                  width={32}
                  height={32}
                  className="avatar-img"
                />
                <span className="status-indicator online"></span>
              </div>
            </div>
            <div className="member-info">
              <span className="member-name">Jamal Connolly</span>
              <span className="member-role">Growth Manager</span>
            </div>
          </li>
          
          <li className="member-item">
            <div className="member-avatar">
              <div className="avatar-wrapper">
                <Image 
                  src="/images/ashley.png" 
                  alt="Cara Carr"
                  width={32}
                  height={32}
                  className="avatar-img"
                />
                <span className="status-indicator online"></span>
              </div>
            </div>
            <div className="member-info">
              <span className="member-name">Cara Carr</span>
              <span className="member-role">SEO Specialist</span>
            </div>
          </li>
          
          <li className="member-item last-member">
            <div className="member-avatar">
              <div className="avatar-wrapper">
                <Image 
                  src="/images/marlee.png" 
                  alt="Iona Rollins"
                  width={32}
                  height={32}
                  className="avatar-img"
                />
              </div>
            </div>
            <div className="member-info">
              <span className="member-name">Iona Rollins</span>
            </div>
            <button className="arrow-button">
              <i className="arrow-icon"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;