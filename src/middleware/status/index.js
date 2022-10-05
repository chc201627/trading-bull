import serverRequests from '../axios-server';

const Status = {
  getAll: () => serverRequests.get('/statuses'),
  getBy: (query) => serverRequests.get(`/statuses?${query}`),
  getById: (id) => serverRequests.get(`/statuses/${id}`),
  create: (body) => serverRequests.post('/statuses', body),
  update: (id, body) => serverRequests.put(`/statuses/${id}`, body),
  delete: (id) => serverRequests.del(`/statuses/${id}`),
};

export default Status;
