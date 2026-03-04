import axios from 'axios';

export const addItem = async (itemData) => {
    return await axios.post("https://billingsoftware-latest-46yn.onrender.com/api/v1.0/admin/items", itemData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteItem = async (itemId) => {
    return await axios.delete(`https://billingsoftware-latest-46yn.onrender.com/api/v1.0/admin/items/${itemId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const fetchItems = async () => {
    return await axios.get("https://billingsoftware-latest-46yn.onrender.com/api/v1.0/items", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}