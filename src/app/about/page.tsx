// src/app/about/page.tsx
import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Nandha Kumar Reddy Kaipa | MAC (AI) Student & Aspiring Data Engineer",
  description:
    "Learn more about Nandha Kumar Reddy Kaipa, a Master of Applied Computing (AI stream) student at the University of Windsor with experience in data analytics, machine learning, and systems programming.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About - Nandha Kumar Reddy Kaipa",
    description:
      "Nandha Kumar Reddy Kaipa — MAC (AI) student at University of Windsor with hands-on projects in AI/ML, data analytics, and systems programming.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
