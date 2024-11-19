//provider to storage a selected property
import React, { createContext, useContext, useState } from "react";
import { Property } from "@/services/dtos/property-dto";

type PropertiesContextType = {
  focusedProperty: Property | null;
  propertiesList: Property[];
  setPropertiesList: (properties: Property[]) => void;
  setFocusedProperty: (property: Property) => void;
};

const PropertiesContext = createContext<PropertiesContextType>({
  focusedProperty: null,
  propertiesList: [],
  setPropertiesList: () => {},
  setFocusedProperty: () => {},
});

export const useProperties = () => useContext(PropertiesContext);

export const PropertiesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [propertiesList, setPropertiesList] = useState<Property[]>([]);
  const [focusedProperty, setFocusedProperty] = useState<Property | null>(null);

  return (
    <PropertiesContext.Provider
      value={{
        focusedProperty,
        setFocusedProperty,
        propertiesList,
        setPropertiesList,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
