import React from 'react'
import Cardsdata from '../data/data'
import './Products.scss'


const products = () => {
  return (
    <div className="product-list">
    {Cardsdata.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.imgdata} alt={product.rname} className="product-image" />
        <h5>{product.rname}</h5>
        <p>{product.address}</p>
        <p>Fiyat: {product.price} TL</p>
        <p>Derecelendirme: {product.rating} ⭐</p>
        <button className="add-to-cart-button">Sepete Ekle</button>
      </div>
    ))}
  </div>
  )
}

export default products
