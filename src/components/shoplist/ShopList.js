import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import ItemList from '../itemList/ItemList'
import './shopList.css'

const ShopList = ({openButton}) => {
  return (
    <section className='shopList--section'>
        <AiOutlineClose className='shopList--icon' onClick={openButton} />
        <h1 className='shopList--title'>Your cart</h1>
        <ItemList />
        <button className='shopList--checkout'>Checkout</button>
    </section>
  )
}

export default ShopList