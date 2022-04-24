import React, { useState } from 'react'
import { Basket } from '../../component/basket/Basket'
import data from '../../component/Data'
import { Main } from '../../component/main/Main'
import Navbar from '../../component/navbar/Navbar'

const ShopPage = () => {

  const [cartItems, setCartItems] = useState([]);
  const [basketOpen, setBasketOpen] = useState(false);

  const openBasket = () => {
    basketOpen === false ? setBasketOpen(true) : setBasketOpen(false);
  }

  const addOn = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if(exist) { 
      setCartItems(
        cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x)
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeOn = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.quantity === 1) { setCartItems(cartItems.filter((x) => x.id !== product.id)) }
    else { 
      setCartItems(
       cartItems.map(x => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x)
      );
    }
  }

  return (
    <section>
      <Navbar cartItems={cartItems} openBasket={openBasket}/>
      <Main data={data} addOn={addOn}/>
      {
        basketOpen === true ? <Basket cartItems={cartItems} openBasket={openBasket} addOn={addOn} removeOn={removeOn}/> : <></>
      }
    </section>
  )
}

export default ShopPage