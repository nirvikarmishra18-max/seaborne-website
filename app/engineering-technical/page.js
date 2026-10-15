import Link from "next/link";
import { eng } from "@/lib/content";
import { SecHead, Prose, Tags, PageHero } from "@/components/Blocks";
import { Icon } from "@/components/Graphics";
import Contact from "@/components/Contact";

export const metadata = { title: "Engineering & Technical" };

const iconKeys = ["design", "specs", "yard", "green"];

export default function EngineeringTechnical() {
  const { hero, tiles, design, specs, yardGreen } = eng;
  return (
    <>
      <PageHero
        crumb="Engineering & Technical"
        title={<>Technical clarity from vessel concept <em>to yard and financing.</em></>}
        body={hero.body}
      >
        <div className="hero-cta">
          <Link href="#design" className="btn btn-brass">Explore services <span className="arrow">→</span></Link>
          <Link href="#contact" className="btn btn-ghost">Discuss a project</Link>
        </div>
        <div className="tiles">
          {tiles.map(([h, p, href], i) => (
            <Link href={href} className="tile" key={h}>
              <Icon name={iconKeys[i]} />
              <h3>{h}</h3>
              <p>{p}</p>
              <span className="go">Read more →</span>
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="section" id="design">
        <div className="wrap split">
          <div>
            <SecHead num="01" eyebrow="Design partnerships" title={design.title} lede={design.lead} />
            <Prose paras={design.body} />
          </div>
          <div className="panel reveal" style={{ alignSelf: "start" }}>
            <span className="eyebrow">Design focus</span>
            <h3 style={{ marginTop: 14, marginBottom: 20 }}>{design.focusTitle}</h3>
            <div className="ledger">
              {design.focus.map((f, i) => (
                <div className="ledger-row" key={f} style={{ gridTemplateColumns: "48px 1fr", padding: "14px 0" }}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h4 style={{ fontSize: 18 }}>{f}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="specs">
        <div className="wrap split rev">
          <div>
            <SecHead num="02" eyebrow="Shipbuilding specifications" title={specs.title} lede={specs.lead} />
            <Prose paras={specs.body} />
            <div className="reveal" style={{ marginTop: 28 }}><Tags items={specs.tags} /></div>
          </div>
          <div className="flow reveal" style={{ alignSelf: "center" }}>
            {specs.flow.map((f, i) => (
              <div key={f}><b>{String(i + 1).padStart(2, "0")}</b>{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="yard">
        <div className="wrap">
          <SecHead num="03" eyebrow="Shipyard selection & green financing" title={yardGreen.title} lede={yardGreen.lead} />
          <div className="split even reveal">
            {[yardGreen.yard, yardGreen.green].map((b, i) => (
              <div className="panel" key={b.head} id={i === 1 ? "green" : undefined}>
                <h3>{b.head}</h3>
                <p className="sub">{b.sub}</p>
                <p className="muted">{b.body}</p>
                <Tags items={b.tags} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact
        title="Discuss your vessel concept, yard or financing requirement."
        lede="Use this enquiry point for design collaboration, shipbuilding specifications, shipyard evaluation or green-financing and subsidy advisory."
        options={eng.formOptions}
        messageLabel="Project Requirement"
      />
    </>
  );
}
