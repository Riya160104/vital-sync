import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const PatientForm = ({ patient, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    phone: '',
    email: '',
    address: '',
    diagnosis: ''
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name || '',
        age: patient.age || '',
        bloodGroup: patient.bloodGroup || '',
        phone: patient.phone || '',
        email: patient.email || '',
        address: patient.address || '',
        diagnosis: patient.diagnosis || ''
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.bloodGroup) {
      toast.error('Please fill all required fields');
      return;
    }
    
    await onSave(formData);
    onCancel();
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'fadeIn 0.3s ease'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--border-light)',
        borderRadius: '28px',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto',
        padding: '32px',
        animation: 'slideUp 0.3s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {patient ? '✏️ Edit Patient' : '➕ Add New Patient'}
          </h2>
          <button 
            onClick={onCancel} 
            style={{ 
              background: 'rgba(255,255,255,0.1)', 
              border: 'none', 
              borderRadius: '50%', 
              width: '36px', 
              height: '36px', 
              color: '#A1A1AA', 
              fontSize: '20px', 
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Age *</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Blood Group *</label>
              <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
                <option value="">Select</option>
                {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="patient@email.com" />
            </div>
            <div className="form-group">
              <label>Diagnosis</label>
              <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange} placeholder="Medical condition" />
            </div>
            <div className="form-group" style={{ gridColumn: '1/-1' }}>
              <label>Address</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                rows="2" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: '12px', 
                  color: 'white',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }} 
                placeholder="Full address"
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <button type="submit" className="btn-primary">
              {patient ? 'Update Patient' : 'Add Patient'}
            </button>
            <button 
              type="button" 
              onClick={onCancel} 
              style={{ 
                padding: '12px 24px', 
                background: 'rgba(255,255,255,0.08)', 
                border: '1px solid var(--border-light)', 
                borderRadius: '40px', 
                color: 'white', 
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;