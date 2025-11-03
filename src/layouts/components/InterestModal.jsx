import React, { useState } from "react";
import { useAPI } from "../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";


const InterestModal = ({ isOpen, onClose, product }) => {
    const notify = () => toast.success("Message Sent successfully!");

  const { messageAPI } = useAPI();
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      // Construct the message automatically
    const messageText = `A user with name <b>${formData.name}</b> and phone <b>${formData.phone}</b> is interested in the product "<b>${product?.name}</b>".`;

      // Send data to the API
      await messageAPI.create({
        email: formData.email,
        phone_number: formData.phone,
        message: messageText,
        product_id: product?.id, // include product ID
      });

      setFeedback("✅ Interest submitted successfully!");
      notify();
      setFormData({ email: "", phone: "" });

      // Close modal after short delay
      setTimeout(() => {
        setFeedback("");
        onClose();
      }, 1500);
    } catch (error) {
      console.error(error);
      setFeedback("❌ Failed to submit interest. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "modalBackdrop") onClose();
  };

  return (
    <div
      id="modalBackdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
    >
      <div className="bg-blue-950  rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden animate-fadeIn">
        <div className="h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"></div>

        <div className="p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-400 hover:text-gray-900"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-3">
              EXPRESS INTEREST
            </div>
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              {product?.name || "This Product"}
            </h2>
            <p className="text-gray-500 text-sm">
              Fill in your details and we'll get back to you shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-100">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gray-900 transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-100">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 800 000 0000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gray-900 transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white font-semibold py-3.5 rounded-xl hover:bg-gray-800 active:scale-98 transition-all duration-200 shadow-lg hover:shadow-xl mt-6"
            >
              {loading ? "Submitting..." : "Submit Interest"}
            </button>
          </form>

          {feedback && (
            <p className="text-sm text-center mt-4 text-gray-600">{feedback}</p>
          )}

          <p className="text-xs text-gray-400 text-center mt-6">
            We respect your privacy and won’t share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestModal;
