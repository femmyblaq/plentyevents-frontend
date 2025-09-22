import React, { createContext, useState, useEffect } from "react";
import { setAuthToken } from "../api/axios.js";

export const AuthContext = createContext();

// ✅ safer cookie reader
function getCookie(name) {
  const cookies = document.cookie.split(";").map(c => c.trim());
  for (let c of cookies) {
    if (c.startsWith(name + "=")) {
      return c.substring(name.length + 1);
    }
  }
  return null;
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loadToken, setLoadToken] = useState(true); // 🔑 prevent flicker

  // Load token and role on app start
  useEffect(() => {
    const savedToken = getCookie("token");
    const savedRole = getCookie("role");

    if (savedToken) {
      setToken(savedToken);
      setAuthToken(savedToken);
    }
    if (savedRole) {
      setRole(savedRole);
    }

    setLoadToken(false);
  }, []);

  const login = (tokenValue, roleValue) => {
    // 🔑 persist cookies for 7 days
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    document.cookie = `token=${tokenValue}; path=/; expires=${expiry.toUTCString()}`;
    document.cookie = `role=${roleValue}; path=/; expires=${expiry.toUTCString()}`;

    setAuthToken(tokenValue);
    setToken(tokenValue);
    setRole(roleValue);
  };

  const logout = () => {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie =
      "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    setAuthToken(null);
    setToken(null);
    setRole(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, role, isAuthenticated, login, logout, loadToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
