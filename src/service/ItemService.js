import axios from 'axios';
import BASE_URL from './api';

export const addItem = async (itemData) => {
    return await axios.post(`${BASE_URL}/admin/items`, itemData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteItem = async (itemId) => {
    return await axios.delete(`${BASE_URL}/admin/items/${itemId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const fetchItems = async () => {
    return await axios.get(`${BASE_URL}/items`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}