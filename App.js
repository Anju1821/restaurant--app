import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    setCartItems([...cartItems, food]);
  };

  return (
    <div className="container">
      <Navbar />
      <Home />
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;