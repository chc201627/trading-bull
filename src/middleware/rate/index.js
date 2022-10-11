import serverRequests from '../axios-server';

const Rate = {
  getAll: () => serverRequests.get('/rates'),
  getBy: (query) => serverRequests.get(`/rates?${query}`),
  getById: (id) => serverRequests.get(`/rates/${id}`),
  create: (body) => serverRequests.post('/rates', body),
  update: (id, body) => serverRequests.put(`/rates/${id}`, body),
  delete: (id) => serverRequests.del(`/rates/${id}`),
};

export default Rate;
