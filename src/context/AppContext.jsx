import React, { createContext, useContext } from "react";
import userAPI from "../api/userApi.js";
import messageAPI from "../api/messageApi.js";
import productAPI from "../api/productApi.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const api = { userAPI, messageAPI, productAPI };

  return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
};

export const useAPI = () => useContext(AppContext);
