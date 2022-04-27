import React from 'react'
import { AiFillShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({cartItems, openBasket}) => {
  return (
    <header className='navbar'>
        <Link to={'/'}>
          <h2>Home</h2>
        </Link>
        <Link to={'/shopPage'}>
          <h2>Shop</h2>
        </Link>
        
        <AiFillShopping className='navbar__icon' onClick={openBasket}/>
        {cartItems.length <= 0 ? (<></>) : (
          <h4 className='navbar__item-count'>{cartItems.length}</h4>
        ) }
    </header>
  )
}

export default Navbar