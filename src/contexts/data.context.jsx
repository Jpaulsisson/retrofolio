import { createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const handleClick = (event) => {
    console.log(event);
  } 

  const goToNext = () => {
    console.log('next');
  }

  const goToPrev = () => {
    console.log('prev')
  }

  return (
  <DataContext.Provider value={{ handleClick, goToNext, goToPrev }}>
    {children}
  </DataContext.Provider>
  )
}

export default DataContext;