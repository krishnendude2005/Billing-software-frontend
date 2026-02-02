
import CategoryForm from '../../components/CategoryForm/CtaegoryForm';
import CategoryList from '../../components/CategoryList/CategoryList';
import './ManageCategory.css';

const ManageCategory = () => {
  return (
    <>
    <div className="category-container text-light">
      <div className="left-column">
        {/* category form */}
        <CategoryForm />
      </div>

      <div className="right-column">
        {/* list of categories */}
        <CategoryList />
      </div>
    </div>
    </>
  )
}
export default ManageCategory;