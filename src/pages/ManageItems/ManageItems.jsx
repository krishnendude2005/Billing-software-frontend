import ItemForm from '../../components/ItemForm/ItemForm';
import ItemList from '../../components/ItemList/ItemList';
import './ManageItems.css';

const ManageItems = () => {
  return (
   <div className="items-container text-light">
      <div className="left-column">
        {/* Item form */}
        <ItemForm />
      </div>

      <div className="right-column">
        {/* list of Items */}
        <ItemList />
      </div>
    </div>
  )
}
export default ManageItems;