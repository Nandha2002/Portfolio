// src/components/sections/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-primary/10">
          <Image
            src="/Portfolio/headshot/headshot-24.jpg"
            alt="Nandha Kumar Reddy Kaipa"
            fill
            className="object-cover"
            priority
            sizes="160px"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Hi, I’m <span className="text-primary">Nandha Kumar Reddy Kaipa</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-6">
            MAC (AI) @ University of Windsor. I build data-driven ML projects and
            robust Unix/Linux tools with Python, C, and SQL.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects">
            <Button size="lg">View My Projects</Button>
          </Link>
          {/* Same-page anchor is fine as <a> */}
          <a href="#contact">
            <Button variant="outline" size="lg">Contact Me</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
