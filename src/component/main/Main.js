import React from 'react'
import './main.css'
import { Product } from '../product/Product'

export const Main = ({data, addOn}) => {
  return (
    <main>
      <section className='product-grid'>
        {data.products.map((product) => (
            <Product key={product.id} product={product} addOn={addOn}/>
        ))}
      </section>
    </main>
  )
}