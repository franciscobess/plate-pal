import DefaultMealImg from '../assets/default-meal.png'
import IndianFlag from '../assets/indian-flag.png'
import PropTypes from 'prop-types';

const PlateCard = ({ product }) => {
    console.log(product)
    return (
        <div className="plate-card">
            <img src={DefaultMealImg} alt="plate xxxxx" className='plate-image' />
            <div className='plate-info-container'>
                <h1 className='plate-title'>{product.name}</h1>
                <p className='plate-description'>{product.description}</p>
                <p className='plate-price'>$250.00</p>
                <img src={IndianFlag} alt="flag xxxx" className='cousine-flag' />
            </div>
        </div>
    )
}

PlateCard.propTypes = {
    product: PropTypes.node.isRequired,
};

export default PlateCard