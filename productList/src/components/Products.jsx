import React from 'react'
import Cardsdata from '../data/data'
import './Products.scss'

const products = () => {
  return (
    <div className="container mx-auto">
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {Cardsdata.map((product) => (
          <div className="product-card border p-4 rounded-lg shadow-lg" key={product.id}>
            <img src={product.imgdata} alt={product.rname} className="product-image w-full h-64 object-cover rounded-lg mb-4" />
            <h5 className="text-xl font-semibold  mb-2">{product.rname}</h5>
            <p className="text-gray-600 mb-2">{product.address}</p>
            <p className="text-lg font-bold text-green-600">Fiyat: {product.price} TL</p>
            <p className="text-yellow-500 mb-4">Derecelendirme: {product.rating} ⭐</p>
            <button className="w-full text-lg add-to-cart-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sepete Ekle</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default products
