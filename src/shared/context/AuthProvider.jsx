import { useEffect, useState } from 'react';

import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [accountInfo, setAccountInfo] = useState({
    userName: '',
    loggedIn: false,
    admin: false,
    affiliation: false,
  });
  const [loading, setLoading] = useState(true);

  const fetchAuthMe = async () => {
    setLoading(true);
    console.log('fetch auth me called');
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
        loggedIn: false,
        userName: '',
        admin: false,
        affiliation: false,
      };
    } else {
      ac = await authMeResponse.json();
      ac.affiliation = !!ac.affiliation; // force object to boolean since we don't need the detail
    }
    console.log(ac);
    // TODO: delete this! delay for test purpose only
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(1500);

    setAccountInfo(ac);
    setLoading(false);
    return ac;
  };

  // Force auth me when refresh page
  useEffect(() => {
    fetchAuthMe();
  }, []);

  const value = {
    ...accountInfo,
    loading: loading,
    setAccountInfo: setAccountInfo,
    fetchAuthMe: fetchAuthMe,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
