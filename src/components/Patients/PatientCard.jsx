import React from 'react';

const PatientCard = ({ patient, onEdit, onDelete }) => {
  const getBloodGroupColor = (bg) => {
    const colors = {
      'A+': '#10B981', 'A-': '#059669',
      'B+': '#3B82F6', 'B-': '#2563EB',
      'O+': '#8B5CF6', 'O-': '#6D28D9',
      'AB+': '#EC4899', 'AB-': '#BE185D'
    };
    return colors[bg] || '#6B7280';
  };

  return (
    <div style={{
      background: 'var(--bg-card-solid)',
      border: '1px solid var(--border-light)',
      borderRadius: '20px',
      padding: '20px',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{patient.name}</h3>
          <p style={{ fontSize: '13px', color: '#A1A1AA' }}>{patient.diagnosis || 'No diagnosis'}</p>
        </div>
        <div style={{
          width: '42px',
          height: '42px',
          background: `linear-gradient(135deg, ${getBloodGroupColor(patient.bloodGroup)}, ${getBloodGroupColor(patient.bloodGroup)}CC)`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          {patient.bloodGroup}
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '13px', color: '#A1A1AA' }}>
        <span><i className="fas fa-calendar-alt"></i> {patient.age} yrs</span>
        <span><i className="fas fa-phone"></i> {patient.phone || 'N/A'}</span>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginTop: '16px', 
        paddingTop: '16px', 
        borderTop: '1px solid var(--border-light)' 
      }}>
        <button 
          onClick={(e) => { e.stopPropagation(); onEdit(patient); }} 
          style={{ 
            flex: 1, 
            padding: '8px', 
            background: 'rgba(139,92,246,0.15)', 
            border: 'none', 
            borderRadius: '40px', 
            color: '#8B5CF6', 
            cursor: 'pointer', 
            fontWeight: '500',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139,92,246,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(139,92,246,0.15)'}
        >
          <i className="fas fa-edit"></i> Edit
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onDelete(patient); }} 
          style={{ 
            flex: 1, 
            padding: '8px', 
            background: 'rgba(239,68,68,0.15)', 
            border: 'none', 
            borderRadius: '40px', 
            color: '#EF4444', 
            cursor: 'pointer', 
            fontWeight: '500',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.15)'}
        >
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default PatientCard;