import { TbShoppingCart } from "react-icons/tb";
import CartItem from "./CartItem";
import { useContext } from "react";
import { RestaurantContext } from "./context/RestaurantContext";
import { BsCartX } from "react-icons/bs";
import { RxDoubleArrowRight } from "react-icons/rx";

const Cart = () => {
    const { myCart } = useContext(RestaurantContext)

    return (
        <div className="cart-container">
            <div className="cart-top-container">
                <h1 className="cart-title">Cart</h1>
                <TbShoppingCart className="cart-icon" />
            </div>
            {myCart.length > 0 ? <>
                <div className="cart-midle-container">
                    {myCart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="cart-bottom-container">
                    <h1 className="cart-price-title">Total price</h1>
                    <h1 className="cart-total-price">$250.00</h1>
                </div>
                <div className="cart-payment-container">
                    <p className="cart-payment-text">Go to payment</p>
                    <RxDoubleArrowRight className="payment-arrow"/>
                </div>
            </> : <>
                <div className="empty-cart">
                    <h1 className="empty-cart-title">Empty cart</h1>
                    <BsCartX className="empty-cart-icon"/>
                </div>
            </>}
        </div>
    )
}

export default Cart