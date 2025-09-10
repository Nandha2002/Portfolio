import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const PUBLIC_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://your-vercel-project.vercel.app";

export const metadata: Metadata = {
  title: { default: "Nandha Kumar Reddy Kaipa | Portfolio", template: "%s | Nandha Kumar Reddy Kaipa" },
  description: "MAC (AI) @ University of Windsor. I build data-driven ML projects and robust Unix/Linux tools.",
  metadataBase: new URL(PUBLIC_BASE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[70vh] pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
