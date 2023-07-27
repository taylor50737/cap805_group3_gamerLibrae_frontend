import { createContext, useState, useContext, useEffect } from 'react';

import useAuth from '../../shared/hooks/useAuth';

export const AffContext = createContext({});

const AffProvider = ({ children }) => {
  const [affFormPosted, setAffFormPosted] = useState({
    userId: '',
    affContextController: '',
  });
  const [test, setTest] = useState(0);
  const [loading, setLoading] = useState(true);

  const { loggedIn, userId, affiliation } = useAuth();

  const fetchUserAff = async () => {
    setLoading(true);
    console.log('fetch aff info called');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/users/${userId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (res.status !== 200) {
        return {
          userId: '',
          affContextController: '',
        };
      } else {
        const resJson = await res.json();
        const affChecker = {
          userId: resJson.user._id,
          affContextController: resJson.user.affiliation,
        };
        console.log(affChecker);
        // TODO: delete this! delay for test purpose only
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        await delay(1500);
        return affChecker;
      }
    } catch (error) {
      console.log('Error fetching user affiliation:', error);
      return {
        userId: '',
        affContextController: '',
      };
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUserAff().then((affChecker) => {
      setAffFormPosted(affChecker);
      setLoading(false);
    });
  }, [loggedIn, userId, affiliation, test]);

  useEffect(() => {
    console.log('Updated affFormPosted:', affFormPosted);
  }, [affFormPosted]);

  return (
    <AffContext.Provider value={{ affFormPosted, setAffFormPosted, loading, test, setTest }}>
      {children}
    </AffContext.Provider>
  );
};

export default AffProvider;
