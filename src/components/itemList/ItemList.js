import React from 'react'
import './itemList.css'
import KeyboardPlaceholder from '../../img/Mechanical_keyboard.webp'

const ItemList = () => {
  return (
    <section className='itemList--section'>
        <img src={KeyboardPlaceholder} className='itemList--image' alt='keyboard'/>
        <div className='itemList--details'>
            <h1 className='itemList-description'>Keyboard Placeholder</h1>
            <h3 className='itemList-description'>299$</h3>
            <div className='itemList--quantity'>
              <button className='itemList--minus'>-</button>
              <input type={'number'} className='itemList--quantity-input'></input>
              <button className='itemList--plus'>+</button>
            </div>
        </div>
    </section>
  )
}

export default ItemList