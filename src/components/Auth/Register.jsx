import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('patient');
    const [passwordError, setPasswordError] = useState('');
    const { register, loading, error, clearError } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearError();
        setPasswordError('');
        
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        }
        
        const result = await register(name, email, password, role);
        
        if (result.success) {
            navigate('/login');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">
                    <h1>VitalSync</h1>
                    <p>Create your account</p>
                </div>
                
                <h2 className="auth-title">Get Started</h2>
                <p className="auth-subtitle">Join VitalSync today</p>
                
                {(error || passwordError) && (
                    <div className="error-message">{error || passwordError}</div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Bhavesh Vaswani"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Register as</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Creating account...' : 'Create Account'}
                    </button>
                </form>
                
                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;