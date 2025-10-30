import React from 'react'
import { ShoppingCart, Eye } from "lucide-react"
import { Link } from 'react-router-dom'

const Product = () => {
  const product = {
    id: 1,
    name: "Kove X15 Ultra Laptop",
    description: "Powerful Intel i7, 16GB RAM, 1TB SSD – built for performance and durability.",
    pic: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 850000,
    stock: 5,
  }

  const isOutOfStock = product.stock < 1

  return (
    <div className={`bg-white shadow-lg rounded-2xl overflow-hidden group relative hover:shadow-2xl transition-all duration-300 ${isOutOfStock ? 'opacity-75' : ''}`}>
      {/* Image */}
      <div className="relative h-64">
        <img 
          src={product.pic} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-300 ${isOutOfStock ? 'grayscale' : 'group-hover:scale-105'}`} 
        />

      

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <p className="text-white text-lg font-bold">OUT OF STOCK</p>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <Link
            to="#"
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-105 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className={`font-bold text-xl ${isOutOfStock ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
            ₦{product.price.toLocaleString()}
          </span>

          <button
            disabled={isOutOfStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
              isOutOfStock 
                ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
                : 'bg-gray-800 hover:bg-gray-900 text-white hover:shadow-lg transform hover:scale-105'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
