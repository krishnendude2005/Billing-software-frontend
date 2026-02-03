import { useContext, useState } from "react"
import { AppContext } from "../../context/appContext"
import './CategoryList.css'

const CategoryList = () => {
  const { categories } = useContext(AppContext);
  const [searchItem, setSearchItem] = useState("");

const filterCategories = categories.filter(category =>
  category.name.toLowerCase().includes(searchItem.toLowerCase())
);


  return (
    <div className="category-list-container" style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
      
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input 
          type="text"
           name="keyword"
            id="keyword" 
            placeholder="Search by keyword"
             className="form-control" 
             onChange={(e) => setSearchItem(e.target.value)}
             value={searchItem}
             />
             <span className="input-group-text bg-warning">
              <i className="bi bi-search"></i>
             </span>
        </div>
      </div>
      <div className="row g-3 pe-2">
        {/* list of categories */}
        {filterCategories.map((category, index) => (
          <div key={index} className="col-12">
            <div
              key={index}
              className="card p-3" style={{ backgroundColor: category.bgColor }}>
              <div className="d-flex align-items-center">
                <div style={{ marginRight: '15px' }}>
                  <img src={category.imageUrl} alt={category.name} className="category-image" />
                </div>

                <div className="flex-grow-1">
                  <h5 className="mb-1 text-white">{category.name}</h5>
                  <p className="mb-0 text-white">{category.items}</p>
                </div>

                <div>
                  <button className="btn btn-danger btn-sm">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CategoryList;