import React, { useState, useEffect } from "react";
import userAPI from "../api/userApi.js"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// import Swal from "sweetalert2";

const AdminSettings = () => {
  const [admin, setAdmin] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // Load current admin details
  useEffect(() => {
    const user = userAPI.getCurrentUser();
    if (user) {
      setAdmin({
        ...admin,
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (admin.password && admin.password !== admin.confirmPassword) {
      // Swal.fire("Error", "Passwords do not match!", "error");
      return;
    }

    setLoading(true);
    try {
      const updatedData = {
        name: admin.name,
        email: admin.email,
      };
      if (admin.password) {
        updatedData.password = admin.password;
      }

      const response = await userAPI.update(admin.id, updatedData);
      localStorage.setItem("user", JSON.stringify(response.data));

      // Swal.fire("Success", "Account updated successfully!", "success");
      toast.success("Account updated successfully!");
    } catch (error) {
      console.error("Error updating admin:", error);
      // Swal.fire("Error", "Failed to update account.", "error");
      toast.error("Failed to update account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-white mb-6">Account Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-blue-200 text-sm mb-2">Admin Name</label>
            <input
              type="text"
              name="name"
              value={admin.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-blue-200 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={admin.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-blue-200 text-sm mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={admin.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-blue-200 text-sm mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={admin.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
