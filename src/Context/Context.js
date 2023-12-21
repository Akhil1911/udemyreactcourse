import React, { createContext } from "react";

const MyContext = createContext();

const AppProvider = ({ children }) => {
  const data = [
    {
      name: "abc",
      age: 18,
    },
    {
      name: "abc2",
      age: 19,
    },
    {
      name: "abc3",
      age: 20,
    },
  ];

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export { AppProvider, MyContext };
