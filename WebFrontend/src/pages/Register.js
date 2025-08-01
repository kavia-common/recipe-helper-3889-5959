import React, { useState } from 'react';
import { useAuth } from '../modules/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, name);
      navigate('/profile');
    } catch {
      setError('Registration failed');
    }
  };
  return (
    <div className="container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} required onChange={e=>setName(e.target.value)} placeholder="Name" />
        <input value={email} required onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} required onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <button className="btn" type="submit">Sign Up</button>
        {error && <p style={{color:'red'}}>{error}</p>}
      </form>
    </div>
  );
}
export default Register;
