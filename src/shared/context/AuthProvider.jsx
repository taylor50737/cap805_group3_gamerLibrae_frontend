import { useState } from 'react';

import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [accountInfo, setAccountInfo] = useState({
    sessionId: '',
    admin: false,
    affiliated: false,
  });

  const handleLogin = async () => {
    // fetch API
    const accountInfo = { sessionId: '123', admin: false, affiliated: false };
    setAccountInfo(accountInfo);
  };

  const handleLogout = () => {
    setAccountInfo({ sessionId: '', admin: false, affiliated: false });
  };

  const value = {
    ...accountInfo,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
