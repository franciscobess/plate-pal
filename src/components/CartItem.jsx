const CartItem = ({ item }) => {
  console.log(item)

  return (
    <div className="cart-item-card">
      <p className="cart-item-name">{item.name}</p>
    </div>
  )
}

export default CartItem