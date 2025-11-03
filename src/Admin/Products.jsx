import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Save, Loader2 } from 'lucide-react';
import { useAPI } from '../context/AppContext';

const AdminProducts = () => {
  const { productAPI } = useAPI();
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', image: null });
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await productAPI.getAll();
      setProducts(res.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to load products.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({ name: product.name, description: product.description, image: null });
    } else {
      setEditingProduct(null);
      setFormData({ name: '', description: '', image: null });
    }
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('description', formData.description);
      if (formData.image) payload.append('image', formData.image); // Only append if a new image is selected

      if (editingProduct) {
        await productAPI.update(editingProduct.id, payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Product updated successfully!');
      } else {
        await productAPI.create(payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Product added successfully!');
      }

      setIsModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Failed to save product. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await productAPI.delete(id);
      alert('Product deleted successfully!');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Products Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="bg-blue-900 rounded-xl p-6 shadow-lg">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-400"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10 text-blue-300">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            Loading products...
          </div>
        ) : filteredProducts.length === 0 ? (
          <p className="text-blue-300 text-center py-10">No products found.</p>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-4 bg-blue-950 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{product.name}</h3>
                  <p className="text-blue-200 text-sm">{product.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-blue-900 rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-blue-200 text-sm mb-2">Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-blue-200 text-sm mb-2">Description</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-blue-200 text-sm mb-2">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                  className="w-full px-4 py-2 bg-blue-950 border border-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-5 h-5" />
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
