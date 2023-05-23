import PropTypes from 'prop-types';
import { useRef } from 'react';

const Option = ({ option, state }) => {
    const optionTitleRef = useRef()
    const checkBoxRef = useRef()

    const checkThisOption = () => {
        if (checkBoxRef.current && checkBoxRef.current.checked) {
            state.setSelectedOption(option)
        } else {
            checkBoxRef.current.checked = false;
            state.setSelectedOption({})
        }
    }

    return (
        <div className='option-container'>
            <h1 className={`option-title ${option.name.length > 7 && 'option-title-sm'}`} ref={optionTitleRef}>{option.name}</h1>
            <p className='option-price'>${option.price}</p>
            <input type="checkbox" name="" id="" className="checkbox-option" ref={checkBoxRef} onChange={checkThisOption}/>
        </div>
    )
}

Option.propTypes = {
    option: PropTypes.node.isRequired,
    state: PropTypes.node.isRequired,
};

export default Option