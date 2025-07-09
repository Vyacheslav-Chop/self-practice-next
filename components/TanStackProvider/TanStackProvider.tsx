"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type TanStackProviderProps = {
  children: React.ReactNode;
};
export default function TanStackProvider({ children }: TanStackProviderProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
