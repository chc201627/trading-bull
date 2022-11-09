import serverRequests from '../axios-server';

const Transaction = {
  getAll: () => serverRequests.get('/transactions'),
  getBy: (query) => serverRequests.get(`/transactions?${query}`),
  getById: (id) => serverRequests.get(`/transactions/${id}`),
  create: (body) => serverRequests.post('/transactions', body),
  update: (id, body) => serverRequests.put(`/transactions/${id}`, body),
  delete: (id) => serverRequests.del(`/transactions/${id}`),
  allTransactionsByUser: () => serverRequests.get('/transaction/allTransactionsByUser'),
};

export default Transaction;
