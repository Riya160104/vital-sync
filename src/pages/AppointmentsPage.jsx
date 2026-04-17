import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

const AppointmentsPage = () => {
  const [appointments] = useState([
    { id: 1, patient: 'Deepak Verma', doctor: 'Dr. Anjali Mehta', date: 'Today', time: '12:00 PM', type: 'Cardiology', status: 'confirmed' },
    { id: 2, patient: 'Sneha Kumari', doctor: 'Dr. Rajesh Kumar', date: 'Today', time: '2:00 PM', type: 'Neurology', status: 'pending' },
    { id: 3, patient: 'Ritik Sharma', doctor: 'Dr. Priya Singh', date: 'Tomorrow', time: '10:00 AM', type: 'Orthopedics', status: 'confirmed' },
  ]);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <div className="dashboard-card">
          <div className="card-header">
            <h2 style={{ fontSize: '28px', fontWeight: '700', background: 'linear-gradient(135deg, #7C3AED, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              📅 Appointments
            </h2>
            <button className="btn-primary" style={{ width: 'auto', padding: '12px 28px' }}>
              + New Appointment
            </button>
          </div>
          
          <table className="data-table">
            <thead>
              <tr><th>Patient</th><th>Doctor</th><th>Date</th><th>Time</th><th>Type</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id}>
                  <td><strong>{apt.patient}</strong></td>
                  <td>{apt.doctor}</td>
                  <td>{apt.date}</td>
                  <td>{apt.time}</td>
                  <td>{apt.type}</td>
                  <td><span className={`status-badge status-${apt.status}`}>{apt.status === 'confirmed' ? '✓ Confirmed' : '⏳ Pending'}</span></td>
                  <td><button style={{ background: 'none', border: 'none', color: '#8B5CF6', cursor: 'pointer' }}><i className="fas fa-arrow-right"></i></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;