import { useContext } from 'react'
import './CartSummary.css'
import { AppContext } from '../../context/appContext'
import ReceiptPopup from '../ReceiptPopup/ReceiptPopup';

const CartSummary = ({ customerName, mobileNumber, setMobileNumber, setCustomerName }) => {

    const { cartItems } = useContext(AppContext);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const tax = totalAmount * 0.01;
    const grandTotal = totalAmount + tax;

    return (
        <div className="mt-3 w-100">

            <div className="cart-summary-details w-100 mb-3">
                <div className="d-flex justify-content-between mb-2">
                    <span className='text-light'> Item:</span>
                    <span className='text-light'>₹{totalAmount.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <span className='text-light'>Tax (1%):</span>
                    <span className='text-light'>₹{tax.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between">
                    <span className='text-light'>Total:</span>
                    <span className='text-light'>₹{grandTotal.toFixed(2)}</span>
                </div>
            </div>

            {/* Payment Buttons */}
            <div className="d-flex gap-3 w-100 mb-3">
                <button className="btn btn-success flex-grow-1">
                    Cash
                </button>
                <button className="btn btn-primary flex-grow-1">
                    UPI
                </button>
            </div>

            {/* <ReceiptPopup /> */}

            {/* Place Order Button */}
            <div className="mt-3 px-2">
                <button className="btn btn-warning w-100">
                    Place Order
                </button>
            </div>


        </div>
    )
}

export default CartSummary;
