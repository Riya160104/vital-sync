import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

const PatientDetailsPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const patient = {
        name: 'Deepak Verma',
        age: 35,
        bloodGroup: 'O+',
        phone: '+91 9875654321',
        email: 'deepak.verma@email.com',
        address: '123, MG Road, Bengaluru - 560001',
        lastVisit: '15 April 2024',
        nextAppointment: '22 April 2024, 11:00 AM'
    };

    const medicalHistory = [
        { id: 1, title: 'Chest X-Ray', date: '10 April 2024', time: '1:00 PM', doctor: 'Dr. Anjali Mehta', report: 'Normal', status: 'completed' },
        { id: 2, title: 'Blood Test', date: '05 April 2024', time: '11:00 AM', doctor: 'Dr. Anjali Mehta', report: 'Cholesterol: 190 mg/dL, Hb: 13.5 g/dL', status: 'completed' },
        { id: 3, title: 'MRI Scan (Head)', date: '28 March 2024', time: '9:00 AM', doctor: 'Dr. Rajesh Kumar', report: 'No abnormalities detected', status: 'completed' },
        { id: 4, title: 'ECG Test', date: '20 March 2024', time: '2:30 PM', doctor: 'Dr. Anjali Mehta', report: 'Normal sinus rhythm', status: 'completed' }
    ];

    const prescriptions = [
        { id: 1, medicine: 'Paracetamol 500mg', dosage: 'Twice daily', duration: '5 days', prescribedBy: 'Dr. Anjali Mehta', date: '10 April 2024' },
        { id: 2, medicine: 'Amoxicillin 250mg', dosage: 'Three times daily', duration: '7 days', prescribedBy: 'Dr. Anjali Mehta', date: '05 April 2024' },
        { id: 3, medicine: 'Vitamin D3 60k IU', dosage: 'Once weekly', duration: '4 weeks', prescribedBy: 'Dr. Rajesh Kumar', date: '28 March 2024' }
    ];

    const vitalSigns = [
        { name: 'Blood Pressure', value: '132/84', unit: 'mmHg', status: 'normal', date: 'Today' },
        { name: 'Heart Rate', value: '78', unit: 'BPM', status: 'normal', date: 'Today' },
        { name: 'Blood Sugar', value: '95', unit: 'mg/dL', status: 'normal', date: 'Today' },
        { name: 'Temperature', value: '98.4', unit: '°F', status: 'normal', date: 'Today' }
    ];

    const upcomingAppointment = {
        doctor: 'Dr. Anjali Mehta',
        specialty: 'Cardiology',
        date: 'Friday, 22 April 2024',
        time: '11:00 AM',
        duration: '30 min',
        type: 'Follow-up'
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                
                {/* Patient Profile Header */}
                <div className="dashboard-card" style={{ marginBottom: '24px', padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                        <div style={{ 
                            width: '100px', 
                            height: '100px', 
                            background: 'linear-gradient(135deg, #7C3AED, #EC4899)', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '48px'
                        }}>
                            👨‍🦱
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                                <div>
                                    <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>{patient.name}</h1>
                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', color: '#A1A1AA' }}>
                                        <span><i className="fas fa-calendar-alt"></i> {patient.age} years</span>
                                        <span><i className="fas fa-tint"></i> Blood Group {patient.bloodGroup}</span>
                                        <span><i className="fas fa-phone"></i> {patient.phone}</span>
                                        <span><i className="fas fa-envelope"></i> {patient.email}</span>
                                    </div>
                                </div>
                                <button className="btn-primary" style={{ width: 'auto', padding: '12px 24px' }}>
                                    <i className="fas fa-calendar-plus"></i> Book Appointment
                                </button>
                            </div>
                            <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                                <i className="fas fa-map-marker-alt" style={{ color: '#8B5CF6', marginRight: '8px' }}></i>
                                {patient.address}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
                    <div className="stat-card" style={{ textAlign: 'center' }}>
                        <div className="stat-number">12</div>
                        <h4>Total Visits</h4>
                    </div>
                    <div className="stat-card" style={{ textAlign: 'center' }}>
                        <div className="stat-number">{medicalHistory.length}</div>
                        <h4>Medical Records</h4>
                    </div>
                    <div className="stat-card" style={{ textAlign: 'center' }}>
                        <div className="stat-number">{prescriptions.length}</div>
                        <h4>Prescriptions</h4>
                    </div>
                    <div className="stat-card" style={{ textAlign: 'center' }}>
                        <div className="stat-number">₹24,500</div>
                        <h4>Total Spent</h4>
                    </div>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                    {['overview', 'medical_history', 'prescriptions', 'vitals'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '10px 24px',
                                background: activeTab === tab ? 'linear-gradient(135deg, #7C3AED, #EC4899)' : 'transparent',
                                border: activeTab === tab ? 'none' : '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '40px',
                                color: 'white',
                                cursor: 'pointer',
                                fontWeight: '500',
                                transition: 'all 0.3s'
                            }}
                        >
                            {tab === 'overview' && '📊 Overview'}
                            {tab === 'medical_history' && '📋 Medical History'}
                            {tab === 'prescriptions' && '💊 Prescriptions'}
                            {tab === 'vitals' && '❤️ Vital Signs'}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        {/* Upcoming Appointment */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <h3>📅 Upcoming Appointment</h3>
                                <i className="fas fa-bell" style={{ color: '#F59E0B' }}></i>
                            </div>
                            <div style={{ 
                                background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.1))', 
                                borderRadius: '20px', 
                                padding: '20px',
                                marginTop: '8px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '20px', marginBottom: '4px' }}>{upcomingAppointment.doctor}</h4>
                                        <p style={{ color: '#8B5CF6' }}>{upcomingAppointment.specialty}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '18px', fontWeight: '600' }}>{upcomingAppointment.time}</div>
                                        <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{upcomingAppointment.duration}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                    <span><i className="fas fa-calendar"></i> {upcomingAppointment.date}</span>
                                    <button className="start-btn" style={{ padding: '8px 20px' }}>Join →</button>
                                </div>
                            </div>
                        </div>

                        {/* Recent Vitals */}
                        <div className="dashboard-card">
                            <div className="card-header">
                                <h3>❤️ Recent Vital Signs</h3>
                                <a href="#" className="view-link">View All →</a>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {vitalSigns.map((vital, idx) => (
                                    <div key={idx} style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center',
                                        padding: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '12px'
                                    }}>
                                        <div>
                                            <h4>{vital.name}</h4>
                                            <p style={{ fontSize: '12px', color: '#A1A1AA' }}>{vital.date}</p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '20px', fontWeight: '600', color: '#10B981' }}>{vital.value}</div>
                                            <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{vital.unit}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'medical_history' && (
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>📋 Medical History</h3>
                            <button className="btn-primary" style={{ width: 'auto', padding: '8px 20px' }}>+ Add Record</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {medicalHistory.map((item) => (
                                <div key={item.id} style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',
                                    padding: '20px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '16px',
                                    transition: 'all 0.3s'
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                            <i className="fas fa-file-medical" style={{ color: '#8B5CF6', fontSize: '20px' }}></i>
                                            <h4 style={{ fontSize: '18px' }}>{item.title}</h4>
                                            <span className="status-badge status-confirmed">{item.status}</span>
                                        </div>
                                        <p style={{ color: '#A1A1AA', fontSize: '14px' }}>
                                            <i className="fas fa-user-md"></i> {item.doctor} • 
                                            <i className="fas fa-calendar" style={{ marginLeft: '12px' }}></i> {item.date} at {item.time}
                                        </p>
                                        <p style={{ marginTop: '8px', fontSize: '14px', color: '#D1D5DB' }}>{item.report}</p>
                                    </div>
                                    <button style={{ background: 'none', border: 'none', color: '#8B5CF6', cursor: 'pointer' }}>
                                        <i className="fas fa-download"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'prescriptions' && (
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>💊 Active Prescriptions</h3>
                            <button className="btn-primary" style={{ width: 'auto', padding: '8px 20px' }}>+ New Prescription</button>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr><th>Medicine</th><th>Dosage</th><th>Duration</th><th>Prescribed By</th><th>Date</th><th></th></tr>
                            </thead>
                            <tbody>
                                {prescriptions.map((pres) => (
                                    <tr key={pres.id}>
                                        <td><strong>{pres.medicine}</strong></td>
                                        <td>{pres.dosage}</td>
                                        <td>{pres.duration}</td>
                                        <td>{pres.prescribedBy}</td>
                                        <td>{pres.date}</td>
                                        <td><i className="fas fa-print" style={{ color: '#8B5CF6', cursor: 'pointer' }}></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'vitals' && (
                    <div className="dashboard-card">
                        <div className="card-header">
                            <h3>❤️ Vital Signs History</h3>
                            <i className="fas fa-chart-line" style={{ color: '#8B5CF6' }}></i>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            {vitalSigns.map((vital, idx) => (
                                <div key={idx} style={{ 
                                    padding: '20px', 
                                    background: 'rgba(255,255,255,0.03)', 
                                    borderRadius: '16px',
                                    textAlign: 'center'
                                }}>
                                    <h4 style={{ color: '#A1A1AA', marginBottom: '12px' }}>{vital.name}</h4>
                                    <div style={{ fontSize: '36px', fontWeight: '700', color: '#8B5CF6' }}>{vital.value}</div>
                                    <div style={{ fontSize: '14px', color: '#A1A1AA' }}>{vital.unit}</div>
                                    <div style={{ marginTop: '12px', fontSize: '12px', color: '#10B981' }}>✓ Normal Range</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientDetailsPage;