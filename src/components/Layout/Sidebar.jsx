import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { path: '/dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
    { path: '/patients', icon: 'fas fa-users', label: 'Patients' },
    { path: '/appointments', icon: 'fas fa-calendar-alt', label: 'Appointments' },
    { path: '/doctors', icon: 'fas fa-user-md', label: 'Doctors' },
    { path: '/settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <>
      {/* Hamburger button */}
      <button 
        onClick={toggleSidebar}
        className="hamburger-btn"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1001,
          background: 'var(--bg-card)',
          border: '1px solid var(--border-light)',
          borderRadius: '12px',
          padding: '12px',
          display: 'none',
          cursor: 'pointer',
          color: 'white'
        }}
      >
        <i className="fas fa-bars" style={{ fontSize: '20px' }}></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>VitalSync</h2>
        </div>
        <div className="sidebar-nav">
          {navItems.map((item) => (
            <div 
              key={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false); // close sidebar on mobile after navigation
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
        />
      )}
    </>
  );
};

export default Sidebar;