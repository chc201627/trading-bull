import serverRequests from '../axios-server';

const Permanences = {
  getAll: () => serverRequests.get('/permanences'),
  getBy: (query) => serverRequests.get(`/permanences?${query}`),
  getById: (id) => serverRequests.get(`/permanences/${id}`),
  create: (body) => serverRequests.post('/permanences', body),
  update: (id, body) => serverRequests.put(`/permanences/${id}`, body),
  delete: (id) => serverRequests.del(`/permanences/${id}`),
};

export default Permanences;
