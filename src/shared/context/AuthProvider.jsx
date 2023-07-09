import { useState } from 'react';

import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [accountInfo, setAccountInfo] = useState({
    sessionId: '',
    admin: false,
    affiliated: false,
  });

  const handleLogin = (isAdmin = false) => {
    // fetch API
    const ac = { sessionId: '123', admin: isAdmin, affiliated: false };
    setAccountInfo(ac);
  };

  const handleLogout = () => {
    setAccountInfo({ sessionId: '', admin: false, affiliated: false });
  };

  const value = {
    ...accountInfo,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
