import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar';
import RouteSwitch from './RouteSwitch';
import { Basket } from "./component/basket/Basket";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [basketOpen, setBasketOpen] = useState(false);
    
    const openBasket = () => {
      basketOpen === false ? setBasketOpen(true) : setBasketOpen(false);
    };
    
    const addOn = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
    
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    };
    
    const removeOn = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.quantity === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
          )
        );
      }
    };
    
  return (
    <BrowserRouter basename='shopping-cart/'>
        <Navbar cartItems={cartItems} openBasket={openBasket} />
        { basketOpen === true ? <Basket cartItems={cartItems} openBasket={openBasket} addOn={addOn} removeOn={removeOn}/> : <></> }
        <RouteSwitch addOn={addOn} removeOn={removeOn}/>
    </BrowserRouter>
  )
}

export default App