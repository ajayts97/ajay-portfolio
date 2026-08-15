"use client";

import { useState } from "react";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#log", label: "Release log" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.dot} aria-hidden="true" />
          ajayts<span className={styles.brandFaint}>.dev</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" className={styles.resumeBtn}>
            Resume ↓
          </a>
        </nav>

        <button
          className={styles.menuBtn}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Primary mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Resume ↓
          </a>
        </nav>
      )}
    </header>
  );
}
