import DefaultMealImg from '../assets/default-meal.png'
import { AiOutlineCloseCircle } from "react-icons/ai";

const OptionsModal = () => {
    return (
        <div className="options-modal-container">
            <div className="modal-content">
                <AiOutlineCloseCircle className='close-icon' />
                <h1 className="modal-title">3 Chicken Wings has those options</h1>
                <div className="options-container">
                    <img src={DefaultMealImg} alt="" className='options-plate-image' />
                    <div className='option-container'>
                        <h1 className='option-title'>Regular</h1>
                        <p className='option-price'>$250.00</p>
                        <input type="checkbox" name="" id="" className="checkbox-option" />
                    </div>
                    <div className='option-container'>
                        <h1 className='option-title'>Large</h1>
                        <p className='option-price'>$280.00</p>
                        <input type="checkbox" name="" id="" className="checkbox-option" />
                    </div>
                    <div className='option-container'>
                        <h1 className='option-title'>Extra large</h1>
                        <p className='option-price'>$360.00</p>
                        <input type="checkbox" name="" id="" className="checkbox-option" />
                    </div>
                </div>
                <div className='choose-button'>
                    <p>Choose</p>
                </div>
            </div>
        </div>
    )
}

export default OptionsModal