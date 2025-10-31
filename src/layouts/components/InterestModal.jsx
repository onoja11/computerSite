import React, { useState } from "react";

const InterestModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({ email: '', phone: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Interest submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"></div>
        
        <div className="p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-400 hover:text-gray-900"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-3">
              EXPRESS INTEREST
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product?.name || "This Product"}
            </h2>
            <p className="text-gray-500 text-sm">
              Fill in your details and we'll get back to you shortly
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gray-900 transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gray-900 transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white font-semibold py-3.5 rounded-xl hover:bg-gray-800 active:scale-98 transition-all duration-200 shadow-lg hover:shadow-xl mt-6"
            >
              Submit Interest
            </button>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-400 text-center mt-6">
            We respect your privacy and won't share your information
          </p>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const sampleProduct = {
    name: "Premium Wireless Headphones"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      
      
      <InterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={sampleProduct}
      />
    </div>
  );
}