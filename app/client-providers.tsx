"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import Navbar from "./ui/navbar/Navbar";

export default function ClientProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = useMemo(() => new QueryClient(), []);
  const pathname = usePathname();
  return (
    <QueryClientProvider client={queryClient}>
      {pathname === "/" || pathname === "/learn-more" ? "" : <Navbar />}
      {children}
      <Toaster />
    </QueryClientProvider>
  );
}
