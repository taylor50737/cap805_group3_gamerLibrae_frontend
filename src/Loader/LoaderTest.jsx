import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const LoaderTest = () => {
  //  const { data } = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch('http://localhost:8080/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      // artificial delay
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(1500);
      setData(data);
    };
    fetcher();
  }, []);

  return (
    <>
      {data?.users?.map((user, i) => (
        <ul>
          <li key={i}>
            <p>{user.email}</p>
            <p>{user.userName}</p>
            <p>{user.isAdmin ? 'admin' : 'member'}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default LoaderTest;
