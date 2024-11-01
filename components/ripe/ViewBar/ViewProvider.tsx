import { createContext, useContext, useState } from "react";

export const ViewContext = createContext<any>({});

import { ReactNode } from "react";

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState(false);
  const value = {
    view,
    setView,
  };
  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
};
