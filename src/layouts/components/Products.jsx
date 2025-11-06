import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useAPI } from '../../context/AppContext'

const Products = () => {
  const { productAPI } = useAPI();
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // Show 4 initially

  useEffect(() => {
    productAPI.getAll().then((res) => setProducts(res.data));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(products.length); // Show all
  };

  const handleSeeLess = () => {
    setVisibleCount(4); // Collapse back to 4
  };

  return (
    <section id="products" className="py-16 bg-blue-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Products
          </span>
        </h2>
        <p className="text-blue-200 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Explore our premium collection of laptops expertly designed to combine
          style, comfort, and reliable performance for every need.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {products.slice(0, visibleCount).map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>

        {/* See More / See Less Buttons */}
        {products.length > 4 && (
          <button
            onClick={
              visibleCount < products.length ? handleSeeMore : handleSeeLess
            }
            className="px-6 py-2 bg-blue-400 hover:bg-blue-300 text-blue-950 font-semibold rounded-full transition duration-300"
          >
            {visibleCount < products.length ? "See More" : "See Less"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
