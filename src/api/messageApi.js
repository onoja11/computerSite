import axiosClient from "./axiosClient";

const messageAPI = {
  getAll: () => axiosClient.get("/messages"),
  getById: (id) => axiosClient.get(`/messages/${id}`),
  create: (data) => axiosClient.post("/messages", data),
  update: (id, data) => axiosClient.put(`/messages/${id}`, data),
  delete: (id) => axiosClient.delete(`/messages/${id}`),
};

export default messageAPI;
