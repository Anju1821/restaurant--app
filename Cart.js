function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart-box">
      <h2>🛒 Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))}

          <hr />

          <p className="total">
            Total Items: {cartItems.length}
          </p>

          <p className="total">
            Total Price: ₹{totalPrice}
          </p>
        </>
      )}
    </div>
  );
}

export default Cart;