import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Nandha Kumar Reddy Kaipa",
    default: "Nandha Kumar Reddy Kaipa - AI & Machine Learning Engineer | Data Analytics Specialist",
  },
  description:
    "AI & Machine Learning Engineer and Data Analytics Specialist pursuing Master's in AI at University of Windsor. Specialized in computer vision, NLP, IoT automation, and data-driven solutions.",
  icons: {
    icon: '/headshot/headshot-2024.jpg',
    apple: '/headshot/headshot-2024.jpg',
  },
  openGraph: {
    type: 'website',
    title: 'Nandha Kumar Reddy Kaipa - AI & Machine Learning Engineer',
    description: 'AI & Machine Learning Engineer and Data Analytics Specialist pursuing Master\'s in AI at University of Windsor. Specialized in computer vision, NLP, IoT automation, and data-driven solutions.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Nandha Kumar Reddy Kaipa - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nandha Kumar Reddy Kaipa - AI & Machine Learning Engineer',
    description: 'AI & Machine Learning Engineer and Data Analytics Specialist pursuing Master\'s in AI at University of Windsor.',
    images: ['/screenshots/hero-preview.png']
  },
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision", 
    "Natural Language Processing",
    "Data Analytics",
    "Data Science",
    "Python Programming",
    "IoT Automation",
    "Facial Recognition",
    "Emotion Detection",
    "Phishing Detection",
    "Smart Irrigation",
    "TensorFlow",
    "PyTorch",
    "CNN",
    "LSTM",
    "SVM",
    "Random Forest",
    "MySQL",
    "Arduino",
    "University of Windsor",
    "Anna University",
    "Google Data Analytics",
    "Statistical Analysis",
    "Cross-lingual NLP",
    "Indic BERT",
    "Pattern Recognition",
    "Sensor Integration",
    "API Integration",
    "Spotify API",
    "Agricultural Technology",
    "Real-time Processing",
    "Data Visualization",
  ],
  authors: [{ name: "Nandha Kumar Reddy Kaipa" }],
  creator: "Nandha Kumar Reddy Kaipa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}