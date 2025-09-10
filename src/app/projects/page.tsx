// src/app/projects/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects in machine learning/AI, IoT & automation, and data science.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  // Optional: you can compute categories from your data
  const categories = ["All", "AI & Machine Learning", "IoT & Automation", "Data Science"];

  return (
    <main>
      {/* Header */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          A collection of projects showcasing my work in machine learning and AI,
          cloud architecture, and web development, as well as open source contributions.
        </p>

        {/* Filters row (dummy UI – hook up later if you want) */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm transition ${
                i === 0
                  ? "bg-foreground text-background"
                  : "bg-background hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto">
            <div className="inline-flex items-center rounded-md border px-3 py-2 text-sm">
              Featured First
              <svg className="ml-2 h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-md"
            >
              {/* Image wrapper with fixed aspect ratio so cards align */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  priority={p.featured}
                />
              </div>

              <div className="p-5">
                {p.featured && (
                  <span className="mb-2 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs">
                    Featured Project
                  </span>
                )}
                <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 5 && (
                    <span className="rounded-md border px-2 py-1 text-xs text-foreground/60">
                      +{p.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-3">
                  {p.links?.github && (
                    <Link
                      href={p.links.github}
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      View Code →
                    </Link>
                  )}
                  {p.links?.demo && (
                    <Link
                      href={p.links.demo}
                      target="_blank"
                      className="text-sm text-primary hover:underline"
                    >
                      Live Demo →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
