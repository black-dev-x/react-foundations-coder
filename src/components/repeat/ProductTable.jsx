import React from 'react'
import products from '../../data/products'
import './ProductTable.css'
const ProductTable = () => (
  <div className='ProductTable'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price.toFixed(2)} $</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default ProductTable
