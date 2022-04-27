import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({cartItems, openBasket}) => {

  const getItemAmount = (list) => {
    let value = list.reduce((x, list) =>  x + list.quantity, 0 )
    return (value);
  }

  return (
    <header className='navbar'>
        <Link to={'/shopping-cart'} className='navbar__link'>
          <h2>Home</h2>
        </Link>
        <Link to={'/shopping-cart/shopPage'} className='navbar__link'>
          <h2>Shop</h2>
        </Link>
        
        <AiFillShopping className='navbar__icon' onClick={openBasket}/>
        {cartItems.length <= 0 ? (<></>) : (
          <h4 className='navbar__item-count'>{getItemAmount(cartItems)}</h4>
        ) }
    </header>
  )
}

export default Navbar