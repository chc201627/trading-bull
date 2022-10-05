import serverRequests from '../axios-server';

const SessionHistory = {
  getAll: () => serverRequests.get('/session-histories'),
  getBy: (query) => serverRequests.get(`/session-histories?${query}`),
  getById: (id) => serverRequests.get(`/session-histories/${id}`),
  create: (body) => serverRequests.post('/session-histories', body),
  update: (id, body) => serverRequests.put(`/session-histories/${id}`, body),
  delete: (id) => serverRequests.del(`/session-histories/${id}`),
};

export default SessionHistory;
