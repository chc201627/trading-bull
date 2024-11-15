import serverRequests from '../axios-server';

const Auth = {
  register: (body) => serverRequests.post('/auth/local/register', body),
  login: (body) => serverRequests.post('/auth/local', body),
  logout: () => serverRequests.post('/logout'),
};

export default Auth;
