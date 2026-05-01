import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import PatientCard from '../components/Patients/PatientCard';
import PatientForm from '../components/Patients/PatientForm';
import DeleteConfirmation from '../components/Patients/DeleteConfirmation';
import AISummaryModal from '../components/Patients/AISummaryModal';
import PatientSkeleton from '../components/Patients/PatientSkeleton';
import usePatientStore from '../store/patientStore';

const PatientsPage = () => {
  const { patients, addPatient, updatePatient, deletePatient, getPatientStats, loading } = usePatientStore();
  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [deletingPatient, setDeletingPatient] = useState(null);
  const [aiPatient, setAiPatient] = useState(null);
  const [stats, setStats] = useState({ 
    monthlyData: [], 
    bloodGroupData: [], 
    ageData: [], 
    diagnosisData: [],
    totalPatients: 0 
  });

  useEffect(() => {
    setStats(getPatientStats());
  }, [patients, getPatientStats]);

  const handleAddPatient = async (data) => {
    const result = await addPatient(data);
    if (result.success) {
      toast.success('Patient added successfully!');
      setStats(getPatientStats());
    } else {
      toast.error('Failed to add patient');
    }
  };

  const handleUpdatePatient = async (data) => {
    const result = await updatePatient(editingPatient.id, data);
    if (result.success) {
      toast.success('Patient updated successfully!');
      setEditingPatient(null);
      setStats(getPatientStats());
    } else {
      toast.error('Failed to update patient');
    }
  };

  const handleDeletePatient = async () => {
    const result = await deletePatient(deletingPatient.id);
    if (result.success) {
      toast.success('Patient deleted successfully!');
      setDeletingPatient(null);
      setStats(getPatientStats());
    } else {
      toast.error('Failed to delete patient');
    }
  };

  const COLORS = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#06B6D4', '#84CC16'];

  return (
    <div className="dashboard-layout">
      <Toaster position="top-right" toastOptions={{ style: { background: '#1A1F2E', color: '#fff' } }} />
      <Sidebar />
      <div className="main-content">
        <Header />
        
        {/* Stats Summary */}
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '32px' }}>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-users"></i></div>
            <h4>Total Patients</h4>
            <div className="stat-number">{stats.totalPatients}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
            <h4>This Month</h4>
            <div className="stat-number">
              {stats.monthlyData[stats.monthlyData.length - 1]?.patients || 0}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-tint"></i></div>
            <h4>Blood Groups</h4>
            <div className="stat-number">{stats.bloodGroupData.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><i className="fas fa-chart-pie"></i></div>
            <h4>Age Groups</h4>
            <div className="stat-number">{stats.ageData.length}</div>
          </div>
        </div>
        
        {/* Charts Section - 2x2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
          {/* Line Chart */}
          <div className="dashboard-card">
            <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>
              <i className="fas fa-chart-line" style={{ marginRight: '8px', color: '#8B5CF6' }}></i>
              Monthly Patient Admissions
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={stats.monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A3A" />
                <XAxis dataKey="name" stroke="#A1A1AA" angle={-45} textAnchor="end" height={60} />
                <YAxis stroke="#A1A1AA" />
                <Tooltip contentStyle={{ background: '#1A1F2E', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="patients" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Pie Chart */}
          <div className="dashboard-card">
            <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>
              <i className="fas fa-tint" style={{ marginRight: '8px', color: '#EC4899' }}></i>
              Blood Group Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie 
                  data={stats.bloodGroupData} 
                  dataKey="value" 
                  nameKey="name" 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={80} 
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {stats.bloodGroupData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#1A1F2E', border: 'none', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          {/* Bar Chart */}
          <div className="dashboard-card">
            <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>
              <i className="fas fa-chart-bar" style={{ marginRight: '8px', color: '#10B981' }}></i>
              Age Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={stats.ageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A3A" />
                <XAxis dataKey="name" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip contentStyle={{ background: '#1A1F2E', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Diagnosis Chart */}
          <div className="dashboard-card">
            <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>
              <i className="fas fa-stethoscope" style={{ marginRight: '8px', color: '#F59E0B' }}></i>
              Diagnosis Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={stats.diagnosisData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A3A" />
                <XAxis type="number" stroke="#A1A1AA" />
                <YAxis type="category" dataKey="name" stroke="#A1A1AA" width={100} />
                <Tooltip contentStyle={{ background: '#1A1F2E', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="#F59E0B" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Patients List Header */}
        <div className="dashboard-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '24px', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                👥 Patients Management
              </h2>
              <p style={{ color: '#A1A1AA', marginTop: '4px' }}>
                <i className="fas fa-database"></i> Total Records: {stats.totalPatients}
              </p>
            </div>
            <button className="btn-primary" onClick={() => setShowForm(true)} style={{ width: 'auto', padding: '12px 28px' }}>
              <i className="fas fa-plus"></i> Add New Patient
            </button>
          </div>
          
          {/* Loading Skeletons */}
          {loading && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '20px' }}>
              {[1,2,3].map(i => <PatientSkeleton key={i} />)}
            </div>
          )}
          
          {/* Patients Grid */}
          {!loading && patients.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '20px' }}>
              {patients.map(patient => (
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  onEdit={setEditingPatient}
                  onDelete={setDeletingPatient}
                  onAISummary={setAiPatient}
                />
              ))}
            </div>
          )}
          
          {/* Empty State */}
          {!loading && patients.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: '#A1A1AA' }}>
              <i className="fas fa-users" style={{ fontSize: '64px', marginBottom: '16px', opacity: 0.3 }}></i>
              <h3 style={{ marginBottom: '8px' }}>No Patients Yet</h3>
              <p>Click "Add New Patient" to get started.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Modals */}
      {showForm && <PatientForm onSave={handleAddPatient} onCancel={() => setShowForm(false)} />}
      {editingPatient && <PatientForm patient={editingPatient} onSave={handleUpdatePatient} onCancel={() => setEditingPatient(null)} />}
      {deletingPatient && <DeleteConfirmation patientName={deletingPatient.name} onConfirm={handleDeletePatient} onCancel={() => setDeletingPatient(null)} />}
      {aiPatient && <AISummaryModal patient={aiPatient} onClose={() => setAiPatient(null)} />}
    </div>
  );
};

export default PatientsPage;