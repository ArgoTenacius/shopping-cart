import React, { useState } from 'react'
import './navbar.css'
import { AiFillShopping } from 'react-icons/ai'
import ShopList from '../shoplist/ShopList'

const Navbar = () => {
    //shopList
    const [shopList, setShopList] = useState(false);

    //opens the shop list clicking on the shop icon
    const openList = () => {
        shopList === false ? setShopList(true) : setShopList(false);
        console.log(`Is shop list open ? ${shopList}`);
    }

    return (
    <section className='navbar--section'>
        {shopList === false 
         ? <AiFillShopping className='navbar--icons' onClick={openList}/>
         : <ShopList openButton={openList}/>
        }
    </section>
    )
}

export default Navbar