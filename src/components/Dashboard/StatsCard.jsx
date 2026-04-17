import React from 'react';

const StatsCard = ({ title, value, icon }) => {
    return (
        <div className="stat-card">
            <div className="stat-info">
                <h4>{title}</h4>
                <div className="stat-number">{value}</div>
            </div>
            <div className="stat-icon">
                <i className={icon}></i>
            </div>
        </div>
    );
};

export default StatsCard;