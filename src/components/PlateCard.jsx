import { useContext, useState } from 'react';
import DefaultMealImg from '../assets/default-meal.png'
import { TbShoppingCartPlus } from "react-icons/tb";
import PropTypes from 'prop-types';
import _ from "lodash"
import { RestaurantContext } from './context/RestaurantContext';

const PlateCard = ({ product }) => {
    const [minPlatePrice, setMinPlatePrice] = useState(product["sub-items"][0].price)
    const [maxPlatePrice, setMaxPlatePrice] = useState(product["sub-items"][0].price)
    const { myCart, setMyCart, setShowOptionsModal, setSelectedPlate } = useContext(RestaurantContext)

    const addCurrentPlateToCart = () => {
        setSelectedPlate(product)
        product.line = myCart.length + 1
        setMyCart(myCart.concat(product))

        if (thisPlateHasOptions()) {
            setShowOptionsModal(true)
        }
    }

    const thisPlateHasOptions = () => {
        return product["sub-items"].length > 1
    }

    _.forEach(product["sub-items"], (item) => {
        if (item.price < minPlatePrice) {
            setMinPlatePrice(item.price)
        }
    })

    _.forEach(product["sub-items"], (item) => {
        if (item.price > maxPlatePrice) {
            setMaxPlatePrice(item.price)
        }
    })

    return (
        <div className="plate-card">
            <img src={DefaultMealImg} alt="plate xxxxx" className='plate-image' />
            <div className='plate-info-container'>
                <h1 className='plate-title'>{product.name}</h1>
                <p className='plate-description'>{product.description}</p>
                <p className='plate-price'>${minPlatePrice} {maxPlatePrice > minPlatePrice && <> - ${maxPlatePrice}</>}</p>
                <div className='add-cart' onClick={addCurrentPlateToCart}>
                    <TbShoppingCartPlus />
                </div>
            </div>
        </div>
    )
}

PlateCard.propTypes = {
    product: PropTypes.node.isRequired,
};

export default PlateCard