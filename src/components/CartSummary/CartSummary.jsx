import { useContext, useState } from 'react'
import './CartSummary.css'
import { AppContext } from '../../context/appContext'
import ReceiptPopup from '../ReceiptPopup/ReceiptPopup';
import { createOrder, deleteOrder } from '../../service/OrderService';
import toast from 'react-hot-toast'
import { createRazorpayOrder, verifyPayment } from '../../service/PaymentService';
import { AppConstants } from '../../util/constant';

const CartSummary = ({ customerName, mobileNumber, setMobileNumber, setCustomerName }) => {


    const [isProcessing, setIsProcessing] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const { cartItems, clearCart } = useContext(AppContext);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const tax = totalAmount * 0.01;
    const grandTotal = totalAmount + tax;

    // Clear all cart items
    const clearAll = () => {
        setCustomerName("");
        setMobileNumber("");
        clearCart();
    }

    const placeOrder = () => {
        setShowPopup(true);
        clearAll();
    }


    const handlePrintReceipt = () => {
        window.print();
    }

    const loadRazorpayScript = () => {
        return new Promise((resolvePath, reject) => {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolvePath(true);
            script.onerror = () => resolve(false);

            document.body.appendChild(script);
        })
    }
    const deleteOrderOnFailure = async (orderId) => {
        try {
            await deleteOrder(orderId);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    const completePayment = async (paymentMode) => {
        if (!customerName || !mobileNumber) {
            toast.error("Please enter customer details")
            return;
        }

        if (cartItems.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        const orderData = {
            customerName,
            phoneNumber: mobileNumber,
            cartItems,
            subTotal: totalAmount,
            tax,
            paymentMethod: paymentMode.toUpperCase()

        }
        setIsProcessing(true);

        try {
            const response = await createOrder(orderData);
            const savedData = response.data;

            if (response.status === 201 && paymentMode === "cash") {
                toast.success("Payment Successfull. MODE : CASH",)
                setOrderDetails(savedData);
            } else if (response.status === 201 && paymentMode === "upi") {
                const razorPayLoaded = await loadRazorpayScript();

                if (!razorPayLoaded) {
                    toast.error("Unable to load Razorpay");
                    await deleteOrderOnFailure(savedData.orderId)
                    return;
                }

                // Create razorpay order
                const razorpayResponse = await createRazorpayOrder({
                    amount: grandTotal,
                    currency: 'INR'
                })


                const options = {
                    key: AppConstants.RAZORPAY_KEY_ID,
                    amount: razorpayResponse.data.amount,
                    currency: razorpayResponse.data.currency,
                    order_id: razorpayResponse.data.id,
                    name: "My Retail Shop",
                    description: "Order payment",
                    handler: async function (response) {
                        await verifyPaymentHandler(response, savedData);
                    },
                    prefill: {
                        name: customerName,
                        contact: mobileNumber
                    },
                    theme: {
                        color: "#3399cc"
                    },
                    model: {
                        ondismiss: async () => {
                            await deleteOrderOnFailure(savedData.orderId);
                            toast.error("Payment cancelled")
                        }
                    }
                }


                //
                const razorPay = new window.Razorpay(options);
                razorPay.on("payment.failed", async (response) => {
                    await deleteOrderOnFailure(savedData.orderId);
                    toast.error("Payment failed");
                    console.error(response.error.description)
                })
                razorPay.open();
            }
        } catch (error) {
            console.log(error);
            toast.error("Payment processing failed")

        } finally {
            setIsProcessing(false);
        }
    }


    const verifyPaymentHandler = async (response, savedOrder) => {
        const paymentData = {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorPay_payment_id,
            razorPaySignature: response.razorPay_signature,
            orderId: savedOrder.orderId
        };

        try {
            const paymentResponse = await verifyPayment(paymentData);
            if (paymentResponse.status === 200) {
                toast.success("Payment successfull")
                setOrderDetails({
                    ...savedOrder,
                    paymentDetails: {
                        razorpayOrderId: response.razorpay_order_id,
                        razorpayPaymentId: response.razorPay_payment_id,
                        razorPaySignature: response.razorPay_signature

                    },
                })
            } else {
                toast.error("Payment processing failed")
            }
        } catch (error) {
            console.log(error);
            toast.error("Payment failed")

        }
    }

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
                <button className="btn btn-success flex-grow-1"
                    onClick={() => completePayment("cash")}
                    disabled={isProcessing}
                >
                    {isProcessing ? "Processing..." : "Cash"}
                </button>
                <button className="btn btn-primary flex-grow-1"
                    onClick={() => completePayment("upi")}
                    disabled={isProcessing}
                >
                    {isProcessing ? "Processing..." : "UPI"}
                </button>
            </div>

            {/* <ReceiptPopup /> */}

            {/* Place Order Button */}
            <div className="mt-3 px-2">
                <button className="btn btn-warning w-100"
                    onClick={placeOrder}
                    disabled={isProcessing || !orderDetails}
                >
                    Place Order
                </button>
            </div>


        </div>
    )
}

export default CartSummary;
