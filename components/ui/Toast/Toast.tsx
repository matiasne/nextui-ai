"use client";
import { Card } from "@nextui-org/card";
import { useEffect, useState } from "react";

type Props = {
  color: "primary" | "secondary" | "success" | "error";
  content: React.ReactNode;
  duration: number;
  onClose: () => void;
  open: boolean;
};

export default function ToastNotification({
  color,
  open,
  content,
  duration,
  onClose,
}: Props) {
  const [status, setStatus] = useState<"open" | "closing" | "close">("close");

  const [timeoutA, setTimeoutA] = useState<any>(null);

  const [backgroundColor, setBackgroundColor] = useState("");

  const startClosing = () => {
    if (open) {
      setStatus("closing");
      if (timeoutA) clearTimeout(timeoutA);
      setTimeout(() => {
        setStatus("close");
        onClose();
      }, 800);
    }
  };

  useEffect(() => {
    if (open) {
      setBackgroundColor(color);

      if (color == "error") setBackgroundColor("red-500");

      if (color == "success") setBackgroundColor("green-500");

      console.log(color);

      setStatus("open");
      let t2 = setTimeout(() => {
        startClosing();
      }, duration);
      setTimeoutA(t2);
    } else {
      setStatus("closing");
      startClosing();
    }
  }, [open, duration]);

  const closeToast = () => {
    startClosing();
    onClose();
  };

  return (
    <Card
      className={`fixed top-2 text-background bg-${backgroundColor}  text-sm font-bold rounded-xl p-2 justify-center align-middle mx-auto inset-x-0 w-fit z-50   ${
        status == "open" ? "animate-appearance-in " : "animate-appearance-out"
      }`}
    >
      <div className="flex flex-row gap-2 align-middle">
        {content}
        {/* <span className="relative flex h-3 w-3 mt-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-65"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span> */}
      </div>
    </Card>
  );
}
