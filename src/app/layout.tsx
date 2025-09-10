// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ✅ correct imports (named exports)
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const PUBLIC_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://your-vercel-project.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Nandha Kumar Reddy Kaipa | Portfolio",
    template: "%s | Nandha Kumar Reddy Kaipa",
  },
  description:
    "MAC (AI) @ University of Windsor. I build data-driven ML projects and robust Unix/Linux tools.",
  metadataBase: new URL(PUBLIC_BASE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nandha Kumar Reddy Kaipa | Portfolio",
    description:
      "MAC (AI) @ University of Windsor. I build data-driven ML projects and robust Unix/Linux tools.",
    url: PUBLIC_BASE_URL,
    siteName: "Nandha Kumar Reddy Kaipa",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandha Kumar Reddy Kaipa | Portfolio",
    description:
      "MAC (AI) @ University of Windsor. I build data-driven ML projects and robust Unix/Linux tools.",
    images: ["/og.png"],
  },
  authors: [{ name: "Nandha Kumar Reddy Kaipa" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="min-h-[70vh] pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
