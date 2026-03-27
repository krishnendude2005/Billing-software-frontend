import axios from 'axios'
import BASE_URL from './api'

export const latestOrders = async() => {
    return await axios.get(`${BASE_URL}/orders/latest`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const createOrder = async(order) => {
    return await axios.post(`${BASE_URL}/orders`, order, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteOrder = async(id) => {
    return await axios.delete(`${BASE_URL}/orders/${id}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}