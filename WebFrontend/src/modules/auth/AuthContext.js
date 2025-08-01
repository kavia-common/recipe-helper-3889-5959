import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProfile, login, logout, registerUser } from './authApi';

// PUBLIC_INTERFACE
const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to fetch user profile on mount
    getProfile()
      .then(profile => setUser(profile))
      .catch(() => setUser(null));
  }, []);

  // PUBLIC_INTERFACE
  const handleLogin = async (email, password) => {
    const user = await login(email, password);
    setUser(user);
    return user;
  };

  // PUBLIC_INTERFACE
  const handleRegister = async (email, password, name) => {
    const user = await registerUser(email, password, name);
    setUser(user);
    return user;
  };

  // PUBLIC_INTERFACE
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login: handleLogin, logout: handleLogout, register: handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAuth() {
  return useContext(AuthContext);
}
