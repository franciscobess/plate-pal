import { useState } from 'react';
import DefaultMealImg from '../assets/default-meal.png'
import IndianFlag from '../assets/indian-flag.png'
import PropTypes from 'prop-types';
import _ from "lodash"

const PlateCard = ({ product }) => {
    const [minPlatePrice, setMinPlatePrice] = useState(product["sub-items"][0].price)
    const [maxPlatePrice, setMaxPlatePrice] = useState(product["sub-items"][0].price)

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
                <img src={IndianFlag} alt="flag xxxx" className='cousine-flag' />
            </div>
        </div>
    )
}

PlateCard.propTypes = {
    product: PropTypes.node.isRequired,
};

export default PlateCard