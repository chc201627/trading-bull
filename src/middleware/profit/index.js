import serverRequests from '../axios-server';

const Profit = {
  getAll: () => serverRequests.get('/profits'),
  getBy: (query) => serverRequests.get(`/profits?${query}`),
  getById: (id) => serverRequests.get(`/profits/${id}`),
  create: (body) => serverRequests.post('/profits', body),
  update: (id, body) => serverRequests.put(`/profits/${id}`, body),
  delete: (id) => serverRequests.del(`/profits/${id}`),
  totalEarnings: () => serverRequests.get(`/profit/totalearnings`),
};

export default Profit;
