import React from 'react';

const ActivityFeed = ({ activities }) => {
    const getIcon = (type) => {
        switch(type) {
            case 'X-Ray': return 'fas fa-x-ray';
            case 'Lab Report': return 'fas fa-flask';
            case 'MRI': return 'fas fa-magnet';
            default: return 'fas fa-activity';
        }
    };

    return (
        <>
            {activities.map((activity, index) => (
                <div className="activity-item" key={index}>
                    <div className="activity-icon">
                        <i className={getIcon(activity.type)}></i>
                    </div>
                    <div className="activity-content">
                        <p><strong>{activity.patient}</strong> - {activity.type} Completed</p>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>{activity.detail}</p>
                        <div className="activity-time">{activity.time}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ActivityFeed;