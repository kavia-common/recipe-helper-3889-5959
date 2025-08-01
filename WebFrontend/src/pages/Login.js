import React, { useState } from 'react';
import { useAuth } from '../modules/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch {
      setError('Invalid email or password');
    }
  };
  return (
    <div className="container">
      <h2>Login to Recipe Helper</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} required onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} required onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <button className="btn" type="submit">Login</button>
        {error && <p style={{color:'red'}}>{error}</p>}
      </form>
    </div>
  );
}
export default Login;
