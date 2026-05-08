import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AISummaryModal = ({ patient, onClose }) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patient })
      });
      const data = await response.json();
      if (response.ok) {
        setSummary(data.summary);
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('AI summary error:', error);
      toast.error('AI summary failed. Please try again later.');
      setSummary('Unable to generate summary at this time.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'var(--bg-card)',
          borderRadius: '28px',
          padding: '32px',
          maxWidth: '500px',
          width: '90%',
          border: '1px solid var(--border-light)',
        }}
      >
        <h3 style={{ marginBottom: '16px' }}>🧠 AI Summary for {patient.name}</h3>
        {loading ? (
          <div
            className="skeleton"
            style={{
              height: '100px',
              background: '#2a2a3a',
              borderRadius: '12px',
              animation: 'pulse 1.5s infinite',
            }}
          />
        ) : (
          <p style={{ color: '#A1A1AA', lineHeight: 1.6, marginBottom: '24px' }}>
            {summary || 'Click "Generate" to get an AI summary of the patient history.'}
          </p>
        )}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          {!summary && !loading && (
            <button onClick={generateSummary} className="btn-primary" style={{ width: 'auto' }}>
              Generate Summary
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '40px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AISummaryModal;