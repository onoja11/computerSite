import React, { createContext, useContext } from "react";
import userAPI from "../api/UserApi";
import messageAPI from "../api/messageApi";
import productAPI from "../api/productApi";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const api = { userAPI, messageAPI, productAPI };

  return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
};

export const useAPI = () => useContext(AppContext);
