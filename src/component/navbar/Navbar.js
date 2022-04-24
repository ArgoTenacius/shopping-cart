import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import './navbar.css'


const Navbar = ({cartItems, openBasket}) => {
  return (
    <header className='navbar'>
        <AiFillShopping className='navbar__icon' onClick={openBasket}/>
        {cartItems.length <= 0 ? (<></>) : (
          <h4 className='navbar__item-count'>{cartItems.length}</h4>
        ) }
    </header>
  )
}

export default Navbar