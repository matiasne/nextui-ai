"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ViewProvider } from "@/components/ripe/ViewBar/ViewProvider";
import { MapProvider } from "./providers/MapProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropertiesProvider } from "./providers/PropertiesProvider";
import { ToastProvider } from "@/components/ui/Toast/ToastProvider";
import { PublisherProvider } from "./providers/PublisherProvider";

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
            <ToastProvider>
              <PublisherProvider>
                <PropertiesProvider>
                  <MapProvider>{children}</MapProvider>
                </PropertiesProvider>
              </PublisherProvider>
            </ToastProvider>
          </ViewProvider>
        </NextThemesProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
