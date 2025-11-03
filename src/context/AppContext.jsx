import React, { createContext, useContext } from "react";
import userAPI from "../api/userAPI.js";
import messageAPI from "../api/messageAPI.js";
import productAPI from "../api/productAPI.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const api = { userAPI, messageAPI, productAPI };

  return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
};

export const useAPI = () => useContext(AppContext);
