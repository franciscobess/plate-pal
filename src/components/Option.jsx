import PropTypes from 'prop-types';

const Option = ({ optionData }) => {
    return (
        <div className='option-container'>
            <h1 className='option-title'>{optionData.name}</h1>
            <p className='option-price'>${optionData.price}</p>
            <input type="checkbox" name="" id="" className="checkbox-option" />
        </div>
    )
}

Option.propTypes = {
    optionData: PropTypes.node.isRequired,
};

export default Option