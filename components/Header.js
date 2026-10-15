"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Brand } from "./Graphics";

export default function Header() {
  // trailingSlash export gives "/sales-services/"; nav hrefs have no slash.
  const pathname = usePathname().replace(/(.)\/$/, "$1");
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Marine &amp; Offshore Solutions</span>
          <span className="coords">25.2048° N · 55.2708° E — Dubai, UAE · Est. 2012</span>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <Link href="/" className="brand" aria-label="Seaborne International home">
            <Brand />
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <div className="nav-item" key={item.label}>
                <Link
                  href={item.href}
                  className={`nav-link${pathname === item.href ? " active" : ""}`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="caret" viewBox="0 0 8 8" aria-hidden="true">
                      <path d="M1 2.5 L4 5.5 L7 2.5" stroke="currentColor" fill="none" strokeWidth="1.4" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map(([label, href]) => (
                      <Link key={label} href={href}>{label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link href="#contact" className="btn btn-ink btn-cta">Contact us</Link>

          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {open ? <path d="M4 4 L16 16 M16 4 L4 16" /> : <path d="M2 6 H18 M2 14 H18" />}
            </svg>
          </button>
        </div>

        <div className={`mobile-nav${open ? " open" : ""}`}>
          {nav.map((item) =>
            item.children ? (
              <details key={item.label}>
                <summary>{item.label} <span aria-hidden="true">+</span></summary>
                <Link href={item.href} onClick={() => setOpen(false)}>Overview</Link>
                {item.children.map(([label, href]) => (
                  <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
                ))}
              </details>
            ) : (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            )
          )}
          <Link href="#contact" className="btn btn-brass" onClick={() => setOpen(false)}>Contact us</Link>
        </div>
      </header>
    </>
  );
}
