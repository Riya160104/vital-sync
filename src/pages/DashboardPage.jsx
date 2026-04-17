import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

const DashboardPage = () => {
    const stats = [
        { title: 'Total Patients', value: '1,284', icon: 'fas fa-users', trend: '+12%' },
        { title: "Today's Appointments", value: '18', icon: 'fas fa-calendar-check', trend: '+3' },
        { title: 'Available Doctors', value: '12', icon: 'fas fa-user-md', trend: 'Online' },
        { title: 'Revenue', value: '44,58,324.07', icon: 'fas fa-chart-line', trend: '+22%' }
    ];

    const appointments = [
        { name: 'Dr. Anjali Mehta', patient: 'Deepak Verma', type: 'Cardiology', time: '12:00 PM', status: 'upcoming' },
        { name: 'Dr. Rajesh Kumar', patient: 'Sneha Kumari', type: 'Neurology', time: '1:00 PM', status: 'upcoming' },
        { name: 'Dr. Priya Singh', patient: 'Ritik Sharma', type: 'Orthopedics', time: '2:00 PM', status: 'upcoming' }
    ];

    const activities = [
        { patient: 'Deepak Verma', action: 'X-Ray Completed', detail: 'Chest X-Ray results ready', time: '2 min ago', icon: 'fa-x-ray' },
        { patient: 'Vishnu Gupta', action: 'Lab Report', detail: 'Blood work analysis completed', time: '15 min ago', icon: 'fa-flask' },
        { patient: 'Kavita Mehra', action: 'MRI Scan', detail: 'Brain MRI scheduled', time: '1 hour ago', icon: 'fa-magnet' }
    ];

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                
                <div className="stats-grid">
                    {stats.map((stat, idx) => (
                        <div className="stat-card" key={idx}>
                            <div className="stat-icon"><i className={stat.icon}></i></div>
                            <h4>{stat.title}</h4>
                            <div className="stat-number">{stat.value}</div>
                            <div style={{ fontSize: '13px', color: '#10B981', marginTop: '8px' }}>
                                {stat.trend} from last month
                            </div>
                        </div>
                    ))}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>📋 Upcoming Appointments</h3>
                            <a href="/appointments" className="view-link">View All →</a>
                        </div>
                        {appointments.map((apt, idx) => (
                            <div className="appointment-item" key={idx}>
                                <div className="appointment-info">
                                    <h4>{apt.patient}</h4>
                                    <p>{apt.name} • {apt.type}</p>
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', color: '#8B5CF6', marginBottom: '4px' }}>{apt.time}</div>
                                    <button className="start-btn">Start</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>🔄 Recent Activities</h3>
                            <a href="#" className="view-link">View All →</a>
                        </div>
                        {activities.map((activity, idx) => (
                            <div className="activity-item" key={idx}>
                                <div className="activity-icon"><i className={`fas ${activity.icon}`}></i></div>
                                <div className="activity-content">
                                    <p><strong>{activity.patient}</strong> - {activity.action}</p>
                                    <p style={{ fontSize: '13px', color: '#A1A1AA' }}>{activity.detail}</p>
                                    <div className="activity-time">{activity.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;