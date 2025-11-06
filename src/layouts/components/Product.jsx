import React, { useState } from "react";
import { MessageSquareHeart } from "lucide-react";
import InterestModal from "./InterestModal";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="bg-blue-900 shadow-md rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
        {/* Image */}
        <div className="relative h-64">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-semibold text-white text-lg mb-2">
            {product.name}
          </h3>

          <p className="text-blue-200 text-sm mb-4 flex-grow">
            {isExpanded
              ? product.description
              : `${product.description.slice(0, 100)}${
                  product.description.length > 100 ? "..." : ""
                }`}
          </p>

          {product.description.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-blue-400 text-sm hover:underline focus:outline-none mb-3"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}

          {/* Button always at bottom */}
          <div className="mt-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <MessageSquareHeart className="w-4 h-4" />
              Show Interest
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default Product;
