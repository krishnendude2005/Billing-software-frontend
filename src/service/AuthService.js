import axios from 'axios';
import BASE_URL from './api';

export const login = async(data) => {
   return await axios.post(`${BASE_URL}/login`, data)
}