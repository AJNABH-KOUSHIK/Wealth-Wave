// src/context/AuthContext.tsx (or wherever it is)
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  register: (data: any) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  // Check if already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string) => {
    // Fake login (accept any credentials for now)
    const fakeUser = { username, name: username };
    localStorage.setItem('user', JSON.stringify(fakeUser));
    setUser(fakeUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (data: any) => {
    const fakeUser = { username: data.username, name: data.username };
    localStorage.setItem('user', JSON.stringify(fakeUser));
    setUser(fakeUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};