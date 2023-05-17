import { useContext, useState } from 'react';
import DefaultMealImg from '../assets/default-meal.png'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RestaurantContext } from './context/RestaurantContext';
import Option from './Option';

const OptionsModal = () => {
    const { setShowOptionsModal, selectedPlate, setSelectedPlate } = useContext(RestaurantContext)

    const [selectedOption, setSelectedOption] = useState("")

    const closeModal = () => {
        setSelectedPlate({})
        setShowOptionsModal(false)
    }

    const state = {
        selectedOption,
        setSelectedOption
    }

    let optionAlreadySelected = selectedOption !== ""

    return (
        <div className="options-modal-container">
            <div className="modal-content">
                <AiOutlineCloseCircle className='close-icon' onClick={closeModal} />
                <h1 className="modal-title">{selectedPlate.name} has those options</h1>
                <div className="options-container">
                    <img src={DefaultMealImg} alt="" className='options-plate-image' />
                    {selectedPlate["sub-items"].map((item) => (
                        <Option key={item.id} optionData={item} state={state} />
                    ))}
                </div>
                {optionAlreadySelected ?
                    <div className='choose-button-enabled'>
                        <p>Choose</p>
                    </div>
                    :
                    <div className='choose-button-disabled'>
                        <p>Choose</p>
                    </div>}
            </div>
        </div>
    )
}

export default OptionsModal