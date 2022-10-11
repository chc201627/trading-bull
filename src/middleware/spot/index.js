import serverRequests from '../axios-server';

const Spot = {
  getAll: () => serverRequests.get('/spots'),
  getBy: (query) => serverRequests.get(`/spots?${query}`),
  getById: (id) => serverRequests.get(`/spots/${id}`),
  create: (body) => serverRequests.post('/spots', body),
  update: (id, body) => serverRequests.put(`/spots/${id}`, body),
  delete: (id) => serverRequests.del(`/spots/${id}`),
  getSpots: () => serverRequests.get('/spot/getallspots'),
};

export default Spot;
