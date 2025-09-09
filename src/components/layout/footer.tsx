"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Copyright */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Nandha Kumar Reddy Kaipa. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60">
              Credits to Bjorn Melin
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:kaipanandha9491@gmail.com"
                className="text-sm text-foreground/60 hover:text-foreground flex items-center gap-2"
              >
                <Mail size={16} />
                kaipanandha9491@gmail.com
              </a>
              <a
                href="mailto:kaipa@uwindsor.ca"
                className="text-sm text-foreground/60 hover:text-foreground flex items-center gap-2"
              >
                <Mail size={16} />
                kaipa@uwindsor.ca (University)
              </a>
              <a
                href="tel:519-567-9924"
                className="text-sm text-foreground/60 hover:text-foreground flex items-center gap-2"
              >
                <Phone size={16} />
                519-567-9924
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/Nandha2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/kaipanandhakumarreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}