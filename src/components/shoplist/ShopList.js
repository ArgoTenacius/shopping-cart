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
        <h5 className='shopList--total'>Total to pay: 0$</h5>
        <button className='shopList--checkout'>Checkout</button>
    </section>
  )
}

export default ShopList