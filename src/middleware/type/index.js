import serverRequests from '../axios-server';

const Type = {
  getAll: () => serverRequests.get('/types'),
  getBy: (query) => serverRequests.get(`/types?${query}`),
  getById: (id) => serverRequests.get(`/types/${id}`),
  create: (body) => serverRequests.post('/types', body),
  update: (id, body) => serverRequests.put(`/types/${id}`, body),
  delete: (id) => serverRequests.del(`/types/${id}`),
};

export default Type;
