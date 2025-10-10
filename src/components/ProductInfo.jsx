import React from 'react'
import Greeting from './Greeting'

const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 999.99,
        description: "A high-performance laptop for all your needs."
    }

  return (
    <>
    <Greeting />
    <div>{product.name}</div>
    <div>{product.price}</div>
    <div>{product.description}</div>
    </>
  )
}

export default ProductInfo