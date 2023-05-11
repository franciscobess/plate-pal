import { TbShoppingCart } from "react-icons/tb";
import CartItem from "./CartItem";
import { useContext } from "react";
import { RestaurantContext } from "./context/RestaurantContext";

const Cart = () => {
    const { myCart } = useContext(RestaurantContext)

    return (
        <div className="cart-container">
            <div className="cart-top-container">
                <h1 className="cart-title">Cart</h1>
                <TbShoppingCart className="cart-icon" />
            </div>
            <div className="cart-midle-container">
                {myCart.map((item) => (
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Cart