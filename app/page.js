import Link from "next/link";
import { intro, who, mission, why, leads, principles, governance, products } from "@/lib/content";
import { Compass, Contours } from "@/components/Graphics";
import { SecHead, Prose, Ledger, Cards } from "@/components/Blocks";
import Contact from "@/components/Contact";

export default function Home() {
  const strip = [...who.audience, ...who.audience];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <Contours />
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Marine &amp; Offshore Solutions</span>
              <h1 style={{ marginTop: 24 }}>
                Connecting expertise, resources and opportunities <em>across the maritime world</em>
              </h1>
              <p className="lead">{intro}</p>
              <div className="hero-cta">
                <Link href="#who" className="btn btn-brass">Discover Seaborne <span className="arrow">→</span></Link>
                <Link href="#contact" className="btn btn-ghost">Start a conversation</Link>
              </div>
            </div>
            <Compass />
          </div>
          <div className="hero-foot">
            {who.stats.map(([b, s]) => (
              <div key={s}><b>{b}</b><span>{s}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section" id="who">
        <div className="wrap split">
          <div className="sticky">
            <SecHead num="01" eyebrow="Who we are" title={who.title} />
            <div className="stats reveal">
              {who.stats.map(([b, s]) => (
                <div key={s}><b>{b}</b><span>{s}</span></div>
              ))}
            </div>
          </div>
          <Prose paras={who.body} />
        </div>
      </section>

      <div className="strip" aria-label="Who we serve">
        <div className="strip-track">
          {strip.map((a, i) => <span key={i}>{a}</span>)}
        </div>
      </div>
      <p className="wrap muted" style={{ textAlign: "center", padding: "28px 24px", margin: 0, fontSize: 15 }}>
        {who.audienceNote}
      </p>

      {/* Mission & Vision */}
      <section className="section ink" id="mission">
        <Contours opacity={0.5} />
        <div className="wrap" style={{ position: "relative" }}>
          <SecHead num="02" eyebrow="Mission & Vision" title={mission.title} lede={`${mission.tagline} — ${mission.pillars}`} />
          <div className="mv reveal">
            <div>
              <span className="eyebrow">Our mission</span>
              <h3>{mission.mission.head}</h3>
              {mission.mission.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <div>
              <span className="eyebrow">Our vision</span>
              <h3>{mission.vision.head}</h3>
              {mission.vision.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Seaborne */}
      <section className="section" id="why">
        <div className="wrap">
          <SecHead num="03" eyebrow="Why Seaborne?" title={why.title} />
          <div className="split" style={{ marginBottom: 64 }}>
            <p className="pull reveal">
              Defined by <em>professionalism</em>, <em>responsiveness</em>, and a commitment to delivering measurable value.
            </p>
            <Prose paras={why.body} />
          </div>
          <Cards items={why.points} />
        </div>
      </section>

      {/* What leads us */}
      <section className="section alt" id="leads">
        <div className="wrap split">
          <div className="sticky">
            <SecHead num="04" eyebrow="What leads us" title={leads.title} />
            <Prose paras={leads.body} />
          </div>
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: 20 }}>{leads.goal}</p>
            <Ledger items={leads.points} />
          </div>
        </div>
      </section>

      {/* Guiding principles */}
      <section className="section" id="principles">
        <div className="wrap">
          <SecHead num="05" eyebrow="Guiding management principles" title={principles.title} />
          <div className="split even" style={{ marginBottom: 64 }}>
            <Prose paras={principles.body.slice(0, 2)} />
            <div className="prose reveal">
              {principles.body.slice(2).map((p) => <p key={p.slice(0, 20)} style={{ fontFamily: "inherit", fontSize: 17, color: "var(--text)" }}>{p}</p>)}
            </div>
          </div>
          <Cards items={principles.points} />
        </div>
      </section>

      {/* Governance */}
      <section className="section alt" id="governance">
        <div className="wrap">
          <div className="split">
            <SecHead num="06" eyebrow="Corporate governance" title={governance.title} />
            <Prose paras={governance.body} />
          </div>
          <div className="values reveal">
            {governance.values.map((v) => <div key={v}>{v}</div>)}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section ink" id="products">
        <div className="wrap">
          <SecHead
            num="07"
            eyebrow="Products"
            title="Equipment & supply across every system on board"
            lede="Sourced through our network of trusted manufacturers and suppliers."
          />
          <div className="products reveal">
            {products.map((p, i) => (
              <Link href="#contact" className="product" key={p}>
                {p}
                <small>{String(i + 1).padStart(2, "0")}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
