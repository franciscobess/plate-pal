import { TbShoppingCart } from "react-icons/tb";

const Cart = () => {
    return (
        <div className="cart-container">
            <div className="cart-top-container">
                <h1 className="cart-title">Cart</h1>
                <TbShoppingCart className="cart-icon"/>
            </div>
        </div>
    )
}

export default Cart