import React, { useState } from "react";
import { MessageSquareHeart } from "lucide-react";
import InterestModal from "./InterestModal";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  return (
    <>
      <div className="bg-blue-900 shadow-md rounded-2xl overflow-hidden group relative transition-all duration-300 hover:shadow-2xl flex flex-col justify-between h-[440px]">
        {/* Image Section */}
        <div className="relative h-64">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>

        {/* Text Section */}
        <div className="p-5 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">
              {product.name}
            </h3>

            <p className="text-blue-200 text-sm mb-2">
              {showFullDescription
                ? product.description
                : product.description.slice(0, 80) + 
                  (product.description.length > 80 ? "..." : "")}
            </p>

            {product.description.length > 80 && (
              <button
                onClick={toggleDescription}
                className="text-blue-300 text-xs underline hover:text-blue-100 transition-colors"
              >
                {showFullDescription ? "Show Less" : "Read More"}
              </button>
            )}
          </div>

          {/* Button (Fixed Position at Bottom) */}
          <div className="mt-auto pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
