"use client";

import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ReactQueryClientProvider client={queryClient}>
        {children}
      </ReactQueryClientProvider>
  );
}