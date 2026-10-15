import Link from "next/link";
import { footerCols, products } from "@/lib/content";
import { Brand } from "./Graphics";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand"><Brand /></Link>
            <p style={{ marginTop: 20, maxWidth: 280 }}>
              Marine &amp; Offshore Solutions.<br />Established in Dubai, UAE • 2012
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}><Link href={href}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-products">
          <h5>Products</h5>
          {products.map((p) => (
            <Link key={p} href="/#products">{p}</Link>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 Seaborne International. All Rights Reserved.</span>
          <span><Link href="/">Home</Link> &nbsp;•&nbsp; <Link href="#contact">Contact Us</Link></span>
        </div>
      </div>
    </footer>
  );
}
