import axios from 'axios';
 const renderUrl = "billingsoftware-latest-46yn.onrender.com"
 const railwayUrl = "billingsoftwarebackend-production.up.railway.app"
 
export const login = async(data) => {
   return await axios.post("https://billing-software-llatestt.onrender.com//api/v1.0/login", data)
}