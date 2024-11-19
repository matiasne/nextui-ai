"use client";
import { Button } from "@nextui-org/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

import { ReactNode } from "react";

export default function DoubleColumnPanel({
  columnLeft,
  columnRight,
}: {
  columnLeft: any;
  columnRight: any;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => setIsOpen(!isOpen);

  const defaultMapContainerStyle = {
    width: "100%",
    height: "100vh",
  };

  return (
    <main className="relative flex-grow overflow-hidden">
      {/* Botón para abrir/cerrar el panel en dispositivos móviles */}
      <Button
        className="fixed top-4 left-4 z-50 md:hidden"
        variant="bordered"
        onClick={togglePanel}
      >
        {isOpen ? (
          <div className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        <span className="sr-only">
          {isOpen ? "Cerrar panel" : "Abrir panel"}
        </span>
      </Button>

      {/* Panel lateral */}
      <div
        className={`absolute h-[100%] overflow-y-scroll top-0 left-0 z-40  w-4/5 max-w-xs transform bg-background p-2 shadow-lg transition-transform duration-300 ease-in-out md:w-[20%] md:max-w-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-grow mt-8 md:mt-0 overflow-y-auto">
          {columnLeft}
        </div>

        <Button
          className="absolute top-4 right-4 md:hidden"
          variant="ghost"
          onClick={togglePanel}
        >
          <div className="h-4 w-4" />
          <span className="sr-only">Cerrar panel</span>
        </Button>
      </div>

      {/* Contenido principal */}
      <div
        className={`relative  transition-all duration-300 ease-in-out ${isOpen ? "md:ml-[20%]" : ""}`}
      >
        {/* Botón para abrir/cerrar el panel en dispositivos de escritorio */}
        <div
          className="absolute flex flex-col justify-center text-primary-foreground top-1/4 left-0 z-50 hidden md:flex h-[100px] bg-primary rounded-r-md cursor-pointer"
          onClick={togglePanel}
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isOpen ? "Cerrar panel" : "Abrir panel"}
          </span>
        </div>
        <div className="flex-grow w-full">{columnRight}</div>
      </div>
    </main>
  );
}
