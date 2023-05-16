import { useContext } from 'react';
import DefaultMealImg from '../assets/default-meal.png'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RestaurantContext } from './context/RestaurantContext';
import Option from './Option';

const OptionsModal = () => {
    const { setShowOptionsModal, selectedPlate, setSelectedPlate } = useContext(RestaurantContext)

    const closeModal = () => {
        setSelectedPlate({})
        setShowOptionsModal(false)
    }

    const selectThisOption = () => {

    }

    console.log(selectedPlate)

    return (
        <div className="options-modal-container">
            <div className="modal-content">
                <AiOutlineCloseCircle className='close-icon' onClick={closeModal} />
                <h1 className="modal-title">3 Chicken Wings has those options</h1>
                <div className="options-container">
                    <img src={DefaultMealImg} alt="" className='options-plate-image' />
                    {selectedPlate["sub-items"].map((item) => (
                        <Option key={item.id} optionData={item} />
                    ))}
                </div>
                <div className='choose-button'>
                    <p>Choose</p>
                </div>
            </div>
        </div>
    )
}

export default OptionsModal