import axios from 'axios';

export const login = async(data) => {
   return await axios.post("http://billingsoftwarebackend-production.up.railway.app/api/v1.0/login", data)
}