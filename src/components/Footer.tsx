"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { footerTagline, navLinks, site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

const socials: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "LinkedIn", href: site.links.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: site.links.github, icon: GitHubIcon },
  { label: "X (Twitter)", href: site.links.x, icon: XIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--surface-border)] bg-[var(--surface-raised)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-[var(--ink)]">{site.name}</p>
            <p className="text-sm text-[var(--ink-faint)] mt-1">{site.title}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank" } : {})}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--ink-faint)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="text-sm text-[var(--ink-faint)] hover:text-[var(--accent)] transition-colors animated-underline">
                {label}
              </a>
            ))}
          </nav>
          <div className="text-center border-t border-[var(--surface-border)] pt-6 w-full">
            <p className="text-xs text-[var(--ink-faint)]">© {new Date().getFullYear()} {site.name}.</p>
            <p className="text-xs text-[var(--ink-faint)] mt-1">{footerTagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
