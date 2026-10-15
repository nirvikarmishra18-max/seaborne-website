import Link from "next/link";
import { pm } from "@/lib/content";
import { SecHead, Prose, Checks, PageHero } from "@/components/Blocks";
import Contact from "@/components/Contact";

export const metadata = { title: "Project Management" };

export default function ProjectManagement() {
  const { drydocking, research, control } = pm;
  return (
    <>
      <PageHero
        crumb="Project Management"
        title={<>From pre-docking planning <em>to controlled close-out.</em></>}
        body={drydocking.sub}
      >
        <div className="hero-cta">
          <Link href="#drydocking" className="btn btn-brass">Explore services <span className="arrow">→</span></Link>
          <Link href="#contact" className="btn btn-ghost">Discuss a project</Link>
        </div>
      </PageHero>

      <section className="section" id="drydocking">
        <div className="wrap split">
          <div className="sticky">
            <SecHead num="01" eyebrow="Drydocking" title={drydocking.title} lede={drydocking.lead} />
          </div>
          <div>
            <Prose paras={drydocking.body} />
            <div style={{ marginTop: 48 }}>
              <Checks items={drydocking.items} />
            </div>
          </div>
        </div>
      </section>

      <section className="section ink" id="research">
        <div className="wrap split">
          <div>
            <SecHead num="02" eyebrow="Market research" title={research.title} lede={research.lead} />
            <p className="reveal" style={{ fontSize: 17 }}>{research.body}</p>
          </div>
          <div className="reveal">
            <span className="eyebrow">Objective</span>
            <p className="pull" style={{ fontSize: 26, margin: "18px 0 36px" }}>{research.objective}</p>
            <Checks items={research.items} />
          </div>
        </div>
      </section>

      <section className="section alt" id="control">
        <div className="wrap">
          <SecHead num="03" eyebrow="Commercial & project control" title={control.title} lede={control.lead} />
          <div className="split even reveal" style={{ marginBottom: 80 }}>
            {control.cards.map(([h, sub, body]) => (
              <div className="panel" key={h}>
                <h3>{h}</h3>
                <p className="sub">{sub}</p>
                <p className="muted">{body}</p>
              </div>
            ))}
          </div>
          <div className="steps reveal">
            {control.steps.map((s, i) => (
              <div className="step" key={s}>
                <span className="dot">{String(i + 1).padStart(2, "0")}</span>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact
        title="Discuss your next maritime project."
        lede="Use this section as the enquiry point for drydocking, commercial support, market analysis, project coordination or integrated execution requirements."
        interestLabel="Service Requirement"
        options={pm.formOptions}
        messageLabel="Project Details"
      />
    </>
  );
}
