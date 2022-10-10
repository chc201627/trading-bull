import serverRequests from '../axios-server';

const ReferralCode = {
  getAll: () => serverRequests.get('/referral-codes'),
  getBy: (query) => serverRequests.get(`/referral-codes?${query}`),
  getById: (id) => serverRequests.get(`/referral-codes/${id}`),
  create: (body) => serverRequests.post('/referral-codes', body),
  update: (id, body) => serverRequests.put(`/referral-codes/${id}`, body),
  delete: (id) => serverRequests.del(`/referral-codes/${id}`),
  getTotalReferrals: () => serverRequests.get('/referral-codes/countreferrals'),
};

export default ReferralCode;
