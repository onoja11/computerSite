import React, { useState } from "react";
import { MessageSquareHeart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import InterestModal from "./InterestModal";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = {
    id: 1,
    name: "Xlock Pro 15 Laptop",
    description:
      "Experience ultimate performance with the Xlock Pro 15 featuring Intel i9, 32GB RAM, and 1TB SSD.",
    pic: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 950000,
  };

  return (
    <>
      <div className="bg-blue-900 shadow-md rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-2xl">
        <div className="relative h-64">
          <img
            src={product.pic}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
            <Link
              to={`/product/${product.id}`}
              className="bg-white text-gray-800 p-3 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-transform"
            >
              <Eye className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-white text-lg mb-2">
            {product.name}
          </h3>
          <p className="text-blue-200 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-white">
              {/* ₦{product.price.toLocaleString()} */}
            </span>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <MessageSquareHeart className="w-4 h-4" />
              Show Interest
            </button>
          </div>
        </div>
      </div>

      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default Product;