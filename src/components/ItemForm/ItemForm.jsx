import React, { useContext, useState } from "react";
import assests from "../../assets/Upload_File.png";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { addItem, fetchItems } from "../../service/ItemService";

const ItemForm = ({ reloadItems }) => {

    const { categories, setItemsData } = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: "",
        categoryId: "",
        price: "",
        description: ""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        // ✅ SAME validation pattern as CategoryForm
        if (!image) {
            toast.error("Please upload an image for the item");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("itemRequestString", JSON.stringify(data));
        formData.append("file", image);

        try {

            const response = await addItem(formData);

            if (response.status === 201) {

                const itemResponse = await fetchItems();
                setItemsData(itemResponse.data);

                toast.success("Item added successfully");

                setData({
                    name: "",
                    categoryId: "",
                    price: "",
                    description: ""
                });

                setImage(false);
            } else {
                toast.error("Unable to add item")
            }

        } catch (error) {
            console.log(error);
            toast.error("Error adding item");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">

                        <form onSubmit={onSubmitHandler}>

                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img
                                        src={image ? URL.createObjectURL(image) : assests}
                                        alt=""
                                        width={48}
                                    />
                                </label>

                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    hidden
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Item Name"
                                    value={data.name}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Category</label>
                                <select
                                    name="categoryId"
                                    className="form-control"
                                    value={data.categoryId}
                                    onChange={onChangeHandler}
                                    required
                                >
                                    <option value="">---Select Category---</option>
                                    {categories.map((category) => (
                                        <option key={category.categoryId} value={category.categoryId}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="₹200.00"
                                    value={data.price}
                                    onChange={onChangeHandler}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label>Description</label>
                                <textarea
                                    rows="5"
                                    name="description"
                                    className="form-control"
                                    placeholder="Item Description"
                                    value={data.description}
                                    onChange={onChangeHandler}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-warning w-100"
                            >
                                {loading ? "Adding Item..." : "Add Item"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemForm;