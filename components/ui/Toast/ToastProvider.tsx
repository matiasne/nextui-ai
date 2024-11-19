//provider to storage a selected property
import React, { createContext, useContext, useState } from "react";
import ToastNotification from "@/components/ui/Toast/Toast";
import { color } from "framer-motion";

interface OpenOptions {
  color: "primary" | "secondary" | "success" | "error";
  duration: number;
  content: any;
}

type ToastContextType = {
  openToast: ({ color, duration, content }: OpenOptions) => void;
};

const ToastContext = createContext<ToastContextType>({
  openToast: ({ color, duration, content }: OpenOptions) => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [duration, setDuration] = useState(3000);
  const [color, setColor] = useState<
    "primary" | "secondary" | "success" | "error"
  >("primary");
  const [contentInside, setContent] = useState();

  const handleOpen = ({ color, duration, content }: OpenOptions) => {
    setDuration(duration);
    setColor(color);
    setContent(content);
    setIsOpen(true);
  };

  const handleClose = () => {};

  return (
    <ToastContext.Provider
      value={{
        openToast({ color, duration, content }) {
          handleOpen({ color, duration, content });
        },
      }}
    >
      <ToastNotification
        color={color}
        content={contentInside}
        duration={duration}
        onClose={() => {
          handleClose();
        }}
        open={isOpen}
      ></ToastNotification>
      {children}
    </ToastContext.Provider>
  );
};
