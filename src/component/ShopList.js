import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineShopping } from 'react-icons/ai'
import './shopList.css'

const ShopList = () => {
    const [ shopListVisible, setShopListVisible ] = useState(false);

    const ShopList = () => {
        if(shopListVisible === true) {
            return ( 
                <div>
                    <AiOutlineClose className='Homepage-icon' id='ShopListButton'/>
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