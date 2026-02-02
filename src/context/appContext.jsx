import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../service/CategoryService";

export const AppContext = createContext(null);


export const AppContextProvider = (props) => {

    const [categories, setCategories] = useState([]);
    // const [items, setItems] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    // const [customerDetails, setCustomerDetails] = useState({});
    useEffect(() => {
        async function loadData() {
            const response = await fetchCategories();
            console.log(response);
            
            setCategories(response.data);
        }
        loadData();
    }, []);

    const contextValue = {
        categories,
        setCategories,
    }

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>

}