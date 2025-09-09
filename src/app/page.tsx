import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nandha Kumar Reddy Kaipa - AI & Machine Learning Engineer | Data Analytics Specialist",
  description:
    "Portfolio of Nandha Kumar Reddy Kaipa, an AI & Machine Learning Engineer and Data Analytics Specialist pursuing Master's in AI at University of Windsor. Specialized in computer vision, NLP, IoT automation, and cross-lingual phishing detection.",
  openGraph: {
    type: 'website',
    title: 'Nandha Kumar Reddy Kaipa - AI & Machine Learning Engineer',
    description: 'Portfolio of Nandha Kumar Reddy Kaipa, an AI & Machine Learning Engineer and Data Analytics Specialist pursuing Master\'s in AI at University of Windsor.',
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
    description: 'Portfolio of Nandha Kumar Reddy Kaipa, an AI & Machine Learning Engineer and Data Analytics Specialist pursuing Master\'s in AI at University of Windsor.',
    images: ['/screenshots/hero-preview.png']
  }
};

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <FeaturedProjects />
    </div>
  );
}