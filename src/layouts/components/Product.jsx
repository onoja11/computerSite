import React, { useState } from "react";
import { MessageSquareHeart } from "lucide-react";
import InterestModal from "./InterestModal";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="bg-blue-900 shadow-md rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-2xl">
        <div className="relative h-64">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300"></div>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-white text-lg mb-2">
            {product.name}
          </h3>

          <p className="text-blue-200 text-sm mb-4">
            {isExpanded
              ? product.description
              : `${product.description.slice(0, 100)}${
                  product.description.length > 100 ? "..." : ""
                }`}
          </p>

          {product.description.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 text-sm hover:underline focus:outline-none"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      {/* ✅ Fixed “Show Interest” button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50"
      >
        <MessageSquareHeart className="w-5 h-5" />
        Show Interest
      </button>

      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default Product;
