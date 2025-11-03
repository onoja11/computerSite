import axiosClient from "./axiosClient";

const userAPI = {
  getAll: () => axiosClient.get("/users"),
  getById: (id) => axiosClient.get(`/users/${id}`),
  create: (data) => axiosClient.post("/users", data),
  update: (id, data) => axiosClient.put(`/users/${id}`, data),
  delete: (id) => axiosClient.delete(`/users/${id}`),
  login: (data) => axiosClient.post('/login', data),
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  logout: async () => {
  try {
    await axiosClient.post('/logout');

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    window.location.href = '/';
  } catch (error) {
    console.error('Logout failed:', error);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
},

};

export default userAPI;
