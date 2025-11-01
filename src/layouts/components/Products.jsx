import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <section id="products" className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Products</span>
        </h2>
        <p className="text-blue-200 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Explore our premium collection of caps crafted with style, comfort, and quality in mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Product  />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  )
}

export default Products