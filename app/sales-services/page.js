import Link from "next/link";
import { sales } from "@/lib/content";
import { SecHead, Prose, Ledger, Cards, PageHero } from "@/components/Blocks";
import Contact from "@/components/Contact";

export const metadata = { title: "Sales & Services" };

export default function SalesServices() {
  const { competencies, edge, benefits, snp } = sales;
  return (
    <>
      <PageHero
        crumb="Sales & Services"
        title={<>Capabilities that <em>strengthen project outcomes</em></>}
        body={competencies.body[0]}
      >
        <div className="hero-cta">
          <Link href="#competencies" className="btn btn-brass">Our competencies <span className="arrow">→</span></Link>
          <Link href="#contact" className="btn btn-ghost">Start a conversation</Link>
        </div>
      </PageHero>

      <section className="section" id="competencies">
        <div className="wrap split">
          <div className="sticky">
            <SecHead num="01" eyebrow="Competencies" title={competencies.title} />
          </div>
          <Prose paras={competencies.body.slice(1)} />
        </div>
        <div className="wrap" style={{ marginTop: 64 }}>
          <Cards items={competencies.items} />
        </div>
      </section>

      <section className="section ink" id="edge">
        <div className="wrap split">
          <div>
            <SecHead num="02" eyebrow="Competitive edge" title={edge.title} lede={edge.lead} />
            <p className="pull reveal" style={{ fontSize: 24 }}>{edge.body}</p>
          </div>
          <Ledger items={edge.items} />
        </div>
      </section>

      <section className="section alt" id="benefits">
        <div className="wrap">
          <SecHead num="03" eyebrow="Shipowner benefits" title={benefits.title} />
          <Cards items={benefits.items} cols="three" />
        </div>
      </section>

      <section className="section tight" id="snp">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <SecHead num="04" eyebrow="Sales & Purchase" title={snp.title} />
          <div className="reveal">
            <p className="pull">From vessel evaluation to transaction close — <em>one point of contact</em> across the Sale &amp; Purchase cycle.</p>
            <Link href="#contact" className="btn btn-ink" style={{ marginTop: 28 }}>Discuss a transaction <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
