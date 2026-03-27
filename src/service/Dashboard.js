import axios from 'axios'
import BASE_URL from './api'

export const fetchDashboardData = async () => {
    return await axios.get(`${BASE_URL}/dashboard`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

