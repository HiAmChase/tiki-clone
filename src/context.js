import React, { createContext, useReducer, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ initialState, reducer, children }) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
