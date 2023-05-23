import { useContext, useState } from 'react';
import DefaultMealImg from '../assets/default-meal.png'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RestaurantContext } from './context/RestaurantContext';
import Option from './Option';
import _ from "lodash"

const OptionsModal = () => {
    const { myCart, setMyCart, selectedPlate, setSelectedPlate, saleValue, setSaleValue, setShowOptionsModal } = useContext(RestaurantContext)
    const [selectedOption, setSelectedOption] = useState({})

    const closeModal = () => {
        setSelectedPlate(null)
        setSelectedOption(null)
        setShowOptionsModal(false)
    }

    const state = {
        selectedOption,
        setSelectedOption
    }

    let optionAlreadySelected = !_.isEmpty(selectedOption)

    const addCurrentOptionToCart = () => {
        let currentOption = _.cloneDeep(selectedOption)

        currentOption.line = myCart.length + 1
        currentOption.name = `${selectedPlate.name} (${selectedOption.name})`
        setMyCart(myCart.concat(currentOption))
        setSaleValue(Number(saleValue) + Number(currentOption.price))
        closeModal()
    }

    return (
        <div className="options-modal-container">
            <div className="modal-content">
                <AiOutlineCloseCircle className='close-icon' onClick={closeModal} />
                <h1 className="modal-title">{selectedPlate.name} has those options</h1>
                <div className="options-container">
                    <img src={DefaultMealImg} alt="" className='options-plate-image' />
                    {selectedPlate["sub-items"].map((item) => (
                        <Option key={item.id} option={item} state={state} />
                    ))}
                </div>
                {optionAlreadySelected ?
                    <div className='choose-button-enabled' onClick={addCurrentOptionToCart}>
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