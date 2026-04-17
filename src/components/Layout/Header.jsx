import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const Header = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="header">
            <div className="header-welcome">
                <h3>Welcome back, {user?.name || 'User'}!</h3>
                <p>Here's what's happening with your patients today.</p>
            </div>
            <div className="header-user">
                <div className="user-info">
                    <i className="fas fa-bell" style={{ fontSize: '20px', color: '#6b7280', cursor: 'pointer' }}></i>
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Header;