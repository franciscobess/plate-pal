import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item-card">
      <p className="cart-item-name">{item.name}</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.node.isRequired,
};

export default CartItem