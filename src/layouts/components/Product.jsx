import React, { useState } from "react";
import { MessageSquareHeart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import InterestModal from "./InterestModal";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="bg-blue-900 shadow-md rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-2xl">
        {/* Product Image */}
        <div className="relative h-64">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay (optional for view button) */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
            {/* Uncomment this if you want a "view product" link */}
            {/* <Link
              to={`/product/${product.id}`}
              className="bg-white text-gray-800 p-3 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-transform"
            >
              <Eye className="w-5 h-5" />
            </Link> */}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <h3 className="font-semibold text-white text-lg mb-2">
            {product.name}
          </h3>

          {/* Product Description with Read More / Less */}
          <p
            className={`text-blue-200 text-sm mb-3 transition-all duration-300 ${
              isExpanded ? "line-clamp-none" : "line-clamp-2"
            }`}
          >
            {product.description}
          </p>

          {/* Read More / Less Button */}
          {product.description && product.description.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium mb-4 transition"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-2">
            {/* Price placeholder if you want to add it later */}
            <span className="font-bold text-lg text-white"></span>

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

      {/* Interest Modal */}
      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default Product;
