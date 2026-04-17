import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

const DoctorsPage = () => {
  const [doctors] = useState([
    { id: 1, name: 'Dr. Anjali Mehta', specialty: 'Cardiology', experience: '12 years', patients: 284, status: 'online', rating: 4.9 },
    { id: 2, name: 'Dr. Rajesh Kumar', specialty: 'Neurology', experience: '15 years', patients: 312, status: 'online', rating: 4.8 },
    { id: 3, name: 'Dr. Priya Singh', specialty: 'Orthopedics', experience: '8 years', patients: 156, status: 'offline', rating: 4.7 },
  ]);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {doctors.map((doctor) => (
            <div key={doctor.id} className="dashboard-card" style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #7C3AED, #EC4899)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>
                  👨‍⚕️
                </div>
                <div>
                  <h3 style={{ fontSize: '20px' }}>{doctor.name}</h3>
                  <p style={{ color: '#8B5CF6', fontWeight: '500' }}>{doctor.specialty}</p>
                  <div style={{ color: '#F59E0B', fontSize: '14px' }}>★ {doctor.rating}</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span><i className="fas fa-briefcase"></i> {doctor.experience}</span>
                <span><i className="fas fa-users"></i> {doctor.patients} patients</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: doctor.status === 'online' ? '#10B981' : '#71717A' }}>
                  <i className={`fas fa-circle`} style={{ fontSize: '10px' }}></i> {doctor.status === 'online' ? ' Available' : ' Offline'}
                </span>
                <button className="start-btn">Schedule →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;