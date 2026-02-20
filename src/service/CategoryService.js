import axios from "axios";

export const addCategory = async (categoryData) => {
    return await axios.post("https://billingsoftwarebackend-production.up.railway.app/api/v1.0/admin/categories", categoryData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`https://billingsoftwarebackend-production.up.railway.app/api/v1.0/admin/categories/${categoryId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`} });
}

export const fetchCategories = async () => {
    return await axios.get("https://billingsoftwarebackend-production.up.railway.app/api/v1.0/categories", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

