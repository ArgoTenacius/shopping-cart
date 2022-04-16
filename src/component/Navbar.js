import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import ShopList from './ShopList'

const Navbar = () => {
  return (
    <header className='Homepage-header'>
    <div>
        <h1> PlaceHolder </h1>
    </div>
    <div className='Homepage-icon-div'>
        <ShopList />
        <AiFillGithub className='Homepage-icon' />
    </div>
    </header>
  )
}

export default Navbar