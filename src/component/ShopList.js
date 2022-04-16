import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineShopping } from 'react-icons/ai'
import ItemList from './ItemList';
import './shopList.css'

const ShopList = () => {
    const [ shopListVisible, setShopListVisible ] = useState(false);

    const ShopList = () => {
        if(shopListVisible === true) {
            return ( 
                <div className='Shoplist-div'>
                    <section className='Shoplist-section'>
                        <AiOutlineClose className='Homepage-icon' id='ShopListButton'/>
                        <h1>Your shopping list</h1>
                        <ItemList />
                        <button className='Shoplist-checkout-button'>Checkout</button>
                    </section>
                </div>
            )
        }else{
            return (
                <AiOutlineShopping className='Homepage-icon' id='ShopListButton'/>
            )
        }
    }

    useEffect(() => {
        const tab = document.getElementById('ShopListButton');

        tab.onclick = () => {
            if(shopListVisible === false) { setShopListVisible(true) }
            else { setShopListVisible(false) }
        }
    })

    return (
    <div>
        <ShopList />
    </div>
  )
}

export default ShopList