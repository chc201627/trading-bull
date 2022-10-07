import serverRequests from '../axios-server';

const Session = {
  getAll: () => serverRequests.get('/sessions'),
  getBy: (query) => serverRequests.get(`/sessions?${query}`),
  getById: (id) => serverRequests.get(`/sessions/${id}`),
  create: (body) => serverRequests.post('/sessions', body),
  update: (id, body) => serverRequests.put(`/sessions/${id}`, body),
  delete: (id) => serverRequests.del(`/sessions/${id}`),
};

export default Session;
