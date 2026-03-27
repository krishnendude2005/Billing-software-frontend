import axios from "axios";
import BASE_URL from "./api";

export const addUser = async (userData) => {
    return await axios.post(`${BASE_URL}/admin/register`, userData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteUser = async (userId) => {
    return await axios.delete(`${BASE_URL}/admin/user/${userId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const fetchUsers = async () => {
    return await axios.get(`${BASE_URL}/users`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}