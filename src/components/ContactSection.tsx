"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { contact, site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icons";

type ContactCard = {
  label: string;
  value: string;
  href: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  external: boolean;
};

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const cards: ContactCard[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, color: "#ef4444", icon: Mail, external: false },
  { label: "LinkedIn", value: displayUrl(site.links.linkedin), href: site.links.linkedin, color: "#0a66c2", icon: LinkedInIcon, external: true },
  { label: "GitHub", value: displayUrl(site.links.github), href: site.links.github, color: "#6e7681", icon: GitHubIcon, external: true },
  { label: "X", value: displayUrl(site.links.x), href: site.links.x, color: "#6e7681", icon: XIcon, external: true },
].filter((c) => c.href);

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-4">
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">05 — Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--ink)]">
              {contact.heading}
              <span className="gradient-text">{contact.headingAccent}</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--ink-muted)] text-lg leading-relaxed mb-12"
          >
            {contact.body}
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--accent)] text-white font-semibold text-lg hover:opacity-90 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-[var(--ink-faint)] mb-12"
          >
            <MapPin className="w-4 h-4" />
            Based in {site.location} · {contact.availability}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-3 text-left"
          >
            {cards.map(({ label, value, href, color, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank" } : {})}
                rel="noopener noreferrer"
                className="bento-card glass rounded-xl p-4 flex items-center gap-3 hover:border-[var(--accent)] transition-all duration-200 group relative z-10"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: `${color}20`, color }}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[var(--ink-faint)] font-mono">{label}</p>
                  <p className="text-sm text-[var(--ink)] font-medium truncate group-hover:text-[var(--accent)] transition-colors">{value}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[var(--ink-faint)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
