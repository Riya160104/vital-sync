import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import useAuthStore from '../store/authStore';

const SettingsPage = () => {
  const { user } = useAuthStore();
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        
        <div className="dashboard-card">
          <div className="card-header">
            <h2 style={{ fontSize: '28px', background: 'linear-gradient(135deg, #7C3AED, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ⚙️ Settings
            </h2>
          </div>
          
          <div style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Profile</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input type="text" defaultValue={user?.name} placeholder="Full Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: '14px', borderRadius: '14px', color: 'white' }} />
                <input type="email" defaultValue={user?.email} placeholder="Email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: '14px', borderRadius: '14px', color: 'white' }} />
              </div>
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Preferences</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
                <span>🔔 Email Notifications</span>
                <button onClick={() => setNotifications(!notifications)} style={{ width: '50px', height: '26px', background: notifications ? '#7C3AED' : '#3A3A4A', border: 'none', borderRadius: '40px', cursor: 'pointer', position: 'relative' }}>
                  <div style={{ width: '20px', height: '20px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: notifications ? '27px' : '3px', transition: '0.3s' }}></div>
                </button>
              </div>
            </div>
            
            <button className="btn-primary" style={{ width: 'auto', padding: '12px 32px' }}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;