import serverRequests from '../axios-server';

const GeneralSpot = {
  getAll: () => serverRequests.get('/generalspots'),
  getBy: (query) => serverRequests.get(`/generalspots?${query}`),
  getById: (id) => serverRequests.get(`/generalspots/${id}`),
  create: (body) => serverRequests.post('/generalspots', body),
  update: (id, body) => serverRequests.put(`/generalspots/${id}`, body),
  delete: (id) => serverRequests.del(`/generalspots/${id}`),
};

export default GeneralSpot;
