import axios from '../utils/axios';

// API MODULES
import Auth from './authApi';

// Exports
export const auth = new Auth(axios);
