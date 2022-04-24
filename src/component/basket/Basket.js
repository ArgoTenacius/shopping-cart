import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './basket.css'

export const Basket = ({cartItems, openBasket, addOn, removeOn}) => {
  const totalPrice = cartItems.reduce((x, y) => x + y.quantity * y.price, 0);
  return (
    <section className='basketBackground'>
      <div className='basket'>
        <span className='basket__list'>
          <AiOutlineClose onClick={openBasket} className='basket__list-icon'/>
          {cartItems.map((x) => (
            <div key={x.id} className='basket__list-item'>
              <img src={x.img} alt='item_image' className='basket__list-item--image'/>
              <div className='basket__list-item--description'>
                <div className='basket__list-item--description---title'>
                  <h4>{x.name}</h4>
                  <h4>{x.price}$</h4>
                </div>
                <div className='basket__list-item--description---quantity'>
                  <button onClick={() => removeOn(x)}>-</button>
                  <h6>{x.quantity}</h6>
                  <button onClick={() => addOn(x)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </span>
        <div className='basket__footer'>
          <h2>Total price: {totalPrice}$</h2>
          <button className='basket__footer-button'>Checkout</button>
        </div>
      </div>
    </section>
  )
}