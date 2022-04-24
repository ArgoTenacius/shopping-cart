import React from 'react'
import './product.css'

export const Product = ({product, addOn}) => {
  return (
    <section className='product'>
        <img src={product.img} alt='keyboard' className='product__img'/>
        <h2>{product.name}</h2>
        <h3>$ {product.price}.00</h3>
        <button onClick={() => addOn(product)}>Add to cart</button>
    </section>
  )
}