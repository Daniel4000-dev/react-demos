import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 999.99 },
        { id: 2, name: "Smartphone", price: 699.99 },
        { id: 3, name: "Tablet", price: 399.99 },
        { id: 4, name: "Monitor", price: 199.99 }
    ]
  return (
    <div>
        {products.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList