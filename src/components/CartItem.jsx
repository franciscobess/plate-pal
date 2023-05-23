import PropTypes from 'prop-types';
import DefaultMealImg from '../assets/default-meal.png'
import { AiOutlineMinus, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { RestaurantContext } from './context/RestaurantContext';
import { useContext, useState } from 'react';
import _ from "lodash"

const CartItem = ({ item }) => {
  const { myCart, setMyCart, setSaleValue, saleValue } = useContext(RestaurantContext)
  const [triyngRemovePlate, setTriyngRemovePlate] = useState(false)
  const [removePlateConfirmation, setRemovePlateConfirmation] = useState(false)

  const deleteItemFromCart = () => {
    setTriyngRemovePlate(true)
  }

  const confirmRemove = () => {
    setRemovePlateConfirmation(true)

    const indexToRemove = myCart.findIndex(plate => plate.line === item.line)
    const filteredList = _.cloneDeep(myCart)
    filteredList.splice(indexToRemove, 1)

    setMyCart(filteredList)
    setSaleValue(Number(saleValue) - Number(item["sub-items"][0].price))
  }

  const denyRemove = () => {
    setRemovePlateConfirmation(false)
    setTriyngRemovePlate(false)
  }

  return (
    <div>
      {!triyngRemovePlate && !removePlateConfirmation ?
        <div className="cart-item-card">
          <img src={DefaultMealImg} alt="plate xxxxx" className='cart-plate-image' />
          <p className="cart-item-name">{item.name}</p>
          <AiOutlineMinus className='cart-delete-item' onClick={deleteItemFromCart} />
        </div> :
        <div className='cart-remove-plate-container'>
          <p>Sure u wanna remove this plate?</p>
          <div className='confirm-remove-plate-container'>
            <div className='confirmation-button confirm-remove-plate' onClick={confirmRemove}><AiOutlineCheck /></div>
            <div className='confirmation-button deny-remove-plate' onClick={denyRemove}><AiOutlineClose /></div>
          </div>
        </div>
      }
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.node.isRequired,
};

export default CartItem