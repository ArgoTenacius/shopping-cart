import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Keyboard from '../../img/Mechanical_keyboard.webp'
import './shopPage.css'

const ShopPage = () => {

  const debugProduct = (
      <div className='shopPage--product'>
        <img src={Keyboard} alt='keyboard' className='shopPage--img'></img>
        <h2 className='shopPage--title'>Lorem Ipsum Inoldor...</h2>
        <h3 className='shopPage--price'>$109.95</h3>
        <button className='shopPage--buton'>Add to cart</button>
      </div> )

  return (
    <section className='shopPage--section'>
      <Navbar />
      <section className='shopPage--products'>
      {debugProduct}
      {debugProduct}
      {debugProduct}
      {debugProduct}
      </section>
    </section>
  )
}

export default ShopPage