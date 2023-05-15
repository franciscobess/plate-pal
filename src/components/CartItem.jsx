import PropTypes from 'prop-types';
import DefaultMealImg from '../assets/default-meal.png'
import { AiOutlineMinus } from "react-icons/ai";
import { RestaurantContext } from './context/RestaurantContext';
import { useContext } from 'react';
import _ from "lodash"

const CartItem = ({ item }) => {
  const { myCart, setMyCart } = useContext(RestaurantContext)

  const deleteItemFromCart = () => {
    const indexToRemove = myCart.findIndex(plate => plate.line === item.line)
    const filteredList = _.cloneDeep(myCart)
    filteredList.splice(indexToRemove, 1)

    setMyCart(filteredList)
  }

  return (
    <div className="cart-item-card">
      <img src={DefaultMealImg} alt="plate xxxxx" className='cart-plate-image' />
      <p className="cart-item-name">{item.name}</p>
      <AiOutlineMinus className='cart-delete-item' onClick={deleteItemFromCart} />
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.node.isRequired,
};

export default CartItem