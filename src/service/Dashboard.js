import axios from 'axios'

export const fetchDashboardData = async () => {
    return await axios.get("http://billingsoftwarebackend-production.up.railway.app/api/v1.0/dashboard", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

