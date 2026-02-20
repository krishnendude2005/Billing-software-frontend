import axios from 'axios';

export const addItem = async (itemData) => {
    return await axios.post("https://billingsoftwarebackend-production.up.railway.app/api/v1.0/admin/items", itemData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteItem = async (itemId) => {
    return await axios.delete(`https://billingsoftwarebackend-production.up.railway.app/api/v1.0/admin/items/${itemId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const fetchItems = async () => {
    return await axios.get("https://billingsoftwarebackend-production.up.railway.app/api/v1.0/items", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}