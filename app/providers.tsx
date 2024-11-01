"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ViewProvider } from "@/components/ripe/ViewBar/ViewProvider";
import { MapProvider } from "./providers/MapProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  const queryClient = new QueryClient();

  return (
    <NextUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider {...themeProps}>
          <ViewProvider>
            <MapProvider>{children}</MapProvider>
          </ViewProvider>
        </NextThemesProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
