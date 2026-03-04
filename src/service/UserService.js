import axios from "axios";


export const addUser = async (userData) => {
    return await axios.post("https://billing-software-llatestt.onrender.com/api/v1.0/admin/register", userData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteUser = async (userId) => {
    return await axios.delete(`https://billing-software-llatestt.onrender.com/api/v1.0/admin/user/${userId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const fetchUsers = async () => {
    return await axios.get("https://billing-software-llatestt.onrender.com/api/v1.0/users", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}