import axiosClient from "./axiosClient";

const productAPI = {
  getAll: () => axiosClient.get("/products/"),
  getById: (id) => axiosClient.get(`/products/${id}`),
  create: (data) => axiosClient.post("/products", data,  {
      headers: { "Content-Type": "multipart/form-data" },
    }), 
  update: (id, data) => axiosClient.put(`/products/${id}`, data),
  delete: (id) => axiosClient.delete(`/products/${id}`),
};

export default productAPI;
