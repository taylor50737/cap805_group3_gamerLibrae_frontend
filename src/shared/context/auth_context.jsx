import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  isAdminLoggedIn: false,
  login: () => {},
  logout: () => {},
  adminLogin: () => {},
  adminLogout: () => {},
});
