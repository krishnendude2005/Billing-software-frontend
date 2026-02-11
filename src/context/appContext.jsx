import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../service/CategoryService";
import { fetchItems } from "../service/ItemService";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [itemsData, setItemsData] = useState([]);

    const [auth, setAuth] = useState({
        token: null,
        role: null
    });

    // ✅ 1. Restore auth after refresh (VERY IMPORTANT)
    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (token) {
            setAuth({
                token,
                role
            });
        }
    }, []);

    // ✅ 2. Load protected data when token exists
    useEffect(() => {

        if (!auth.token) return;

        async function loadData() {
            try {
                const response = await fetchCategories();
                const itemResponse = await fetchItems();

                setCategories(response.data);
                setItemsData(itemResponse.data);

            } catch (error) {
                console.log("Error loading app data:", error);
            }
        }

        loadData();

    }, [auth.token]);

    // ✅ 3. Setter used after login
    const setAuthData = (token, role) => {

        // store in localStorage so refresh works
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        setAuth({
            token,
            role
        });
    };

    const contextValue = {
        categories,
        setCategories,
        itemsData,
        setItemsData,
        auth,
        setAuthData
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};