import React from 'react';

const PatientSkeleton = () => (
  <div style={{ 
    background: 'var(--bg-card-solid)', 
    borderRadius: '20px', 
    padding: '20px',
    border: '1px solid var(--border-light)'
  }}>
    <div className="skeleton" style={{ width: '60%', height: '20px', marginBottom: '12px', background: '#2a2a3a', borderRadius: '8px' }} />
    <div className="skeleton" style={{ width: '40%', height: '16px', marginBottom: '16px', background: '#2a2a3a', borderRadius: '8px' }} />
    <div className="skeleton" style={{ width: '80%', height: '40px', background: '#2a2a3a', borderRadius: '12px' }} />
  </div>
);

export default PatientSkeleton;