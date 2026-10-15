"use client";

import { useState } from "react";
import { Contours } from "./Graphics";

export default function Contact({
  title = "Connect with Seaborne International.",
  lede = "Tell us about your vessel, project or requirement and our team will get back to you.",
  interestLabel = "Area of Interest",
  options,
  messageLabel = "Message",
}) {
  const [sent, setSent] = useState(false);

  return (
    <section className="section contact" id="contact">
      <Contours opacity={0.6} />
      <div className="wrap split" style={{ position: "relative" }}>
        <div>
          <span className="eyebrow">Seaborne International · Marine &amp; Offshore Solutions</span>
          <h2>{title}</h2>
          <p className="muted" style={{ fontSize: 17, maxWidth: 440 }}>{lede}</p>
          <div className="contact-meta">
            <div><span>Head office</span><span>Dubai, United Arab Emirates</span></div>
            <div><span>Presence</span><span>5 countries · 3 continents</span></div>
            <div><span>Serving</span><span>Europe, the Middle East &amp; the Indian subcontinent</span></div>
          </div>
        </div>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            e.currentTarget.reset();
          }}
        >
          <div className="field">
            <label htmlFor="c-name">Name / Company</label>
            <input id="c-name" name="name" required autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email / Contact</label>
            <input id="c-email" name="contact" required autoComplete="email" />
          </div>
          <div className="field full">
            <label htmlFor="c-interest">{interestLabel}</label>
            {options ? (
              <select id="c-interest" name="interest" defaultValue="">
                <option value="" disabled>Select an option</option>
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input id="c-interest" name="interest" />
            )}
          </div>
          <div className="field full">
            <label htmlFor="c-msg">{messageLabel}</label>
            <textarea id="c-msg" name="message" required />
          </div>
          {sent && (
            <div className="form-ok" role="status">
              Thank you — your enquiry has been captured (demo mode).
            </div>
          )}
          <div className="form-foot">
            <span className="form-note">Demo form only — connect to your live corporate email/CRM before publication.</span>
            <button type="submit" className="btn btn-brass">Submit enquiry <span className="arrow">→</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}
