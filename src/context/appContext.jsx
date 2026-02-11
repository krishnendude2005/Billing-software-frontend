import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../service/CategoryService";
import { fetchItems } from "../service/ItemService";

export const AppContext = createContext(null);


export const AppContextProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [auth, setAuth] = useState({
        token: null,
        role: null
    });
     const [itemsData, setItemsData] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    // const [customerDetails, setCustomerDetails] = useState({});
    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetchCategories();
                const itemResponse = await fetchItems();
                console.log(response);

                setCategories(response.data);
                setItemsData(itemResponse.data);
            } catch (error) {
                console.log(error);

            }
        }
        loadData();
    }, []);
    const setAuthData = (token, role) => {
        setAuth({
            token,
            role
        });
    }


    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>

}