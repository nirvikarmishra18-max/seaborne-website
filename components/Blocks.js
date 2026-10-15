import Link from "next/link";
import { Contours } from "./Graphics";

const pad = (i) => String(i + 1).padStart(2, "0");

export function SecHead({ num, eyebrow, title, lede, children }) {
  return (
    <div className="sec-head reveal">
      <span className="eyebrow">{num && <>{num} — </>}{eyebrow}</span>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </div>
  );
}

export function Prose({ paras }) {
  return (
    <div className="prose reveal">
      {paras.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
    </div>
  );
}

export function Ledger({ items }) {
  return (
    <div className="ledger reveal">
      {items.map(([h, p], i) => (
        <div className="ledger-row" key={h}>
          <span className="n">{pad(i)}</span>
          <h4>{h}</h4>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}

export function Cards({ items, cols }) {
  return (
    <div className={`cards${cols ? ` ${cols}` : ""} reveal`}>
      {items.map(([h, p], i) => (
        <div className="card" key={h}>
          <span className="n">{pad(i)}</span>
          <h3>{h}</h3>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}

export function Checks({ items }) {
  return (
    <ul className="checks reveal">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

export function Tags({ items }) {
  return <div className="tags">{items.map((t) => <span className="tag" key={t}>{t}</span>)}</div>;
}

export function PageHero({ crumb, title, body, children }) {
  return (
    <section className="page-hero">
      <Contours />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="crumbs"><Link href="/">Home</Link> &nbsp;/&nbsp; {crumb}</div>
        <h1>{title}</h1>
        {body && <p>{body}</p>}
        {children}
      </div>
    </section>
  );
}
