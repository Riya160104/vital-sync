import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { path: '/dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
        { path: '/patients', icon: 'fas fa-users', label: 'Patients' },
        { path: '/appointments', icon: 'fas fa-calendar-alt', label: 'Appointments' },
        { path: '/doctors', icon: 'fas fa-user-md', label: 'Doctors' },
        { path: '/settings', icon: 'fas fa-cog', label: 'Settings' },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>VitalSync</h2>
            </div>
            <div className="sidebar-nav">
                {navItems.map((item) => (
                    <div 
                        key={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;