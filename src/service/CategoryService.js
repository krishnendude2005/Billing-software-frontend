import axios from "axios";

export const addCategory = async (categoryData) => {
    return await axios.post("http://localhost:8080/api/v1.0/admin/categories", categoryData)
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`http://localhost:8080/api/v1.0/admin/ categories/${categoryId}`);
}

export const fetchCategories = async () => {
    return await axios.get("http://localhost:8080/api/v1.0/categories");
}

