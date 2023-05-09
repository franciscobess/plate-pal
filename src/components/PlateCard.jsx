import DefaultMealImg from '../assets/default-meal.png'
import IndianFlag from '../assets/indian-flag.png'

const PlateCard = () => {
    return (
        <div className="plate-card">
            <div className='plate-image-container'>
                <img src={DefaultMealImg} alt="plate xxxxx" className='plate-image' />
            </div>
            <div className='plate-info-container'>
                <h1 className='plate-title'>3 Chicken Wings</h1>
                <p className='plate-description'>Tender, Spicy and Juicy. Original or Peri-Crusted</p>
                <p className='plate-cousine'>Cousine: <img src={IndianFlag} alt="flag xxxx" className='cousine-flag' /></p>
                <p className='plate-price'>$250.00</p>
            </div>
        </div>
    )
}

export default PlateCard