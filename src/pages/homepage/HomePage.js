import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
  return (
    <section className='homepage'>
      <div className='homepage__description'>
        <h1 className='homepage__description-title'> Keyboard Shop </h1>
        <h2 className='homepage__description-phrase'> Where you can find the keyboard of the dreams </h2>
        <Link to={'/shopping-cart/shopPage'}>
          <button className='homepage__description-button'>Get yourself one</button>
        </Link>
      </div>
    </section>
  )
}

export default HomePage