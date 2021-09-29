import axios from 'axios';

export const fetchUser = async () => {
  const res = await axios.get('/api/auth');
  return res.data;
};

export const registerUser = async ({ name, email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password });
  const res = await axios.post('/api/users', body, config);
  return res.data;
};

export const loginUser = async ({ email, password }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  const res = await axios.post('/api/users/login', body, config);
  return res.data;
};
