import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import ClientProviders from "./client-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self Tutor",
  description: "Take Control of Your Learning Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
