import { useEffect, useState, useCallback } from 'react';

import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
  const [accountInfo, setAccountInfo] = useState({
    userName: 'ff',
    loggedIn: false,
    admin: false,
    affiliated: false,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAuthMe = async () => {
    const authMeResponse = await fetch('http://localhost:8080/api/auth/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    let ac;
    if (authMeResponse.status != 200) {
      ac = {
        userName: '',
        loggedIn: false,
        admin: false,
        affiliated: false,
      };
    } else {
      ac = await authMeResponse.json();
    }
    console.log(ac);
    // TODO: delete this! delay for test purpose only
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(2000);

    setAccountInfo(ac);
    setLoading(false);
    return ac;
  };

  // auth me when refresh page
  useEffect(() => {
    fetchAuthMe();
  }, []);

  const handleLogin = async ({ email, password }) => {
    // login
    const logInResponse = await fetch('http://localhost:8080/api/auth/session', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    console.log(logInResponse);

    // auth me
    const ac = await fetchAuthMe();
    console.log(ac);
    if (ac.loggedIn) {
      navigate('/');
    }
  };

  const handleLogout = async () => {
    const logOutResponse = await fetch('http://localhost:8080/api/auth/session', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(logOutResponse);
    setAccountInfo({ loggedIn: false, admin: false, affiliated: false });
    navigate(0);
  };

  const handleRegister = async ({ userName, email, password }) => {
    const registerResponse = await fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: userName, email: email, password: password }),
    });
    console.log(registerResponse);
    // setAccountInfo({ loggedIn: false, admin: false, affiliated: false });
  };

  const value = {
    ...accountInfo,
    loading: loading,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
    handleRegister: handleRegister,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
