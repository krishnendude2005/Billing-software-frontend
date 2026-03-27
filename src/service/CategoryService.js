import axios from "axios";
import BASE_URL from "./api";

export const addCategory = async (categoryData) => {
    return await axios.post(`${BASE_URL}/admin/categories`, categoryData, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`${BASE_URL}/admin/categories/${categoryId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`} });
}

export const fetchCategories = async () => {
    return await axios.get(`${BASE_URL}/categories`, {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
}

