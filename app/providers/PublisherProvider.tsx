"use client";
import { useClientService } from "@/services/client.service";
import { useQuery } from "@tanstack/react-query";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface PublisherProviderProps {
  children: ReactNode;
}

interface PublisherContextProps {
  setPublisherId: (id: number) => void;
  config: ClientSettingsDTO | null;
  error: any;
}

const PublisherContext = createContext<PublisherContextProps | undefined>(
  undefined
);

export const PublisherProvider = ({ children }: PublisherProviderProps) => {
  const [publisherId, setPublisherId] = useState<number>(6);
  const [config, setConfig] = useState<any>();

  const { getSettings } = useClientService();

  const { error } = useQuery({
    queryKey: ["getPublisherConfig", publisherId],
    queryFn: async () => {
      if (publisherId === 0) return;
      const data = await getSettings(publisherId);

      if (data) {
        setConfig(data.data);
      }

      console.log(data.data);
      return data;
    },
  });

  return (
    <PublisherContext.Provider value={{ config, error, setPublisherId }}>
      {children}
    </PublisherContext.Provider>
  );
};

export const usePublisher = () => {
  const context = useContext(PublisherContext);
  if (context === undefined) {
    throw new Error("usePublisher must be used within a PublisherProvider");
  }
  return context;
};
