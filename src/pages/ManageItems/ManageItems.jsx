import { useState } from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import ItemList from '../../components/ItemList/ItemList';
import './ManageItems.css';
import { useEffect } from 'react';
import { fetchItems } from '../../service/ItemService';
import { toast } from 'react-hot-toast';

const ManageItems = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

// ⭐ SAME PATTERN AS MANAGE USERS
  const loadItems = async () => {
    try {
      setLoading(true);
      const response = await fetchItems();
      setItems(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
   <div className="items-container text-light">
      <div className="left-column">
        {/* Item form */}
        <ItemForm reloadItems={loadItems}/>
      </div>

      <div className="right-column">
        {/* list of Items */}
        <ItemList />
      </div>
    </div>
  )
}
export default ManageItems;