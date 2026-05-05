import type { Metadata } from "next";
import "../index.css";
import { Providers } from "./providers";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { BackToTop } from "@/components/BackToTop";
import { FloatingCTA } from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Vision Verde Agency",
  description: "Diseño Web, Marketing Digital y Branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster />
          <Sonner />
          <BackToTop />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  );
}
