import foods from "../data/foods";

function Menu({ addToCart }) {
  return (
    <div>
      <h2>Menu</h2>

      {foods.map((food) => (
        <div className="menu-card" key={food.id}>
          <h3>{food.name}</h3>
          <p>₹{food.price}</p>

          <button onClick={() => addToCart(food)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;