import React from 'react';

const DeleteConfirmation = ({ patientName, onConfirm, onCancel }) => {
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
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--border-light)',
        borderRadius: '28px',
        padding: '32px',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center',
        animation: 'scaleIn 0.2s ease'
      }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #EF4444, #EC4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          ⚠️
        </div>
        <h3 style={{ marginBottom: '8px', fontSize: '22px' }}>Delete Patient?</h3>
        <p style={{ color: '#A1A1AA', marginBottom: '24px', lineHeight: '1.5' }}>
          Are you sure you want to delete <strong style={{ color: '#EF4444' }}>{patientName}</strong>?<br/>
          This action cannot be undone.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={onConfirm} 
            style={{ 
              flex: 1, 
              padding: '12px', 
              background: 'linear-gradient(135deg, #EF4444, #DC2626)', 
              border: 'none', 
              borderRadius: '40px', 
              color: 'white', 
              cursor: 'pointer', 
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Yes, Delete
          </button>
          <button 
            onClick={onCancel} 
            style={{ 
              flex: 1, 
              padding: '12px', 
              background: 'rgba(255,255,255,0.1)', 
              border: '1px solid var(--border-light)', 
              borderRadius: '40px', 
              color: 'white', 
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;