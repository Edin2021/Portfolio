import React, { useState } from "react";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [headerHeight, setHeaderHeight] = useState(150);

  return (
    <AppContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => React.useContext(AppContext);
