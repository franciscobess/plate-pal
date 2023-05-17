import PropTypes from 'prop-types';
import { useRef } from 'react';

const Option = ({ optionData, state }) => {
    const optionTitleRef = useRef()
    const checkBoxRef = useRef()

    const checkThisOption = () => {
        if (checkBoxRef.current && checkBoxRef.current.checked) {
            state.setSelectedOption(optionTitleRef.current.innerText)
        } else {
            state.setSelectedOption("")
        }
    }

    return (
        <div className='option-container'>
            <h1 className='option-title' ref={optionTitleRef}>{optionData.name}</h1>
            <p className='option-price'>${optionData.price}</p>
            <input type="checkbox" name="" id="" className="checkbox-option" ref={checkBoxRef} onChange={checkThisOption}/>
        </div>
    )
}

Option.propTypes = {
    optionData: PropTypes.node.isRequired,
    state: PropTypes.node.isRequired,
};

export default Option