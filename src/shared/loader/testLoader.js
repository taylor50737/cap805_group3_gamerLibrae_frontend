export const testLoader = async () => {
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

  return { data };
};
