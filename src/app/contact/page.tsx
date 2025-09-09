// src/app/contact/page.tsx
import { type Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form"; // <-- your component

export const metadata: Metadata = {
  title: "Contact | Nandha Kumar Reddy Kaipa",
  description:
    "Get in touch about internships, collaborations, or questions. I usually respond quickly.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Nandha Kumar Reddy Kaipa",
    description:
      "Reach out about internships, collaborations, or any questions.",
  },
};

export default function ContactPage() {
  return (
    <main id="contact" className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Contact Me</h1>
          <p className="text-muted-foreground">
            Have a question or want to get in touch? Fill out the form below and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
