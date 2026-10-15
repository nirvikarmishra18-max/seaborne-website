export function BrandMark({ className = "brand-mark" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 5 L23 20 L20 35 L17 20 Z" fill="#b8893b" />
      <path d="M5 20 L20 17.5 L35 20 L20 22.5 Z" fill="currentColor" opacity=".55" />
      <path d="M8 27c3 2 6 2 9 0s6-2 9 0 4.5 1.6 6 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Brand() {
  return (
    <>
      <BrandMark />
      <span>
        <span className="brand-name">Seaborne</span>
        <span className="brand-sub">International</span>
      </span>
    </>
  );
}

// Bathymetric-style contour lines used behind dark sections.
export function Contours({ opacity = 1 }) {
  const lines = Array.from({ length: 14 }, (_, i) => i);
  return (
    <svg className="hero-contours" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" style={{ opacity }} aria-hidden="true">
      <g className="wave-anim" fill="none" stroke="#e3c58c" strokeWidth="0.8">
        {lines.map((i) => {
          const y = 120 + i * 48;
          const a = 26 + (i % 4) * 9;
          return (
            <path
              key={i}
              opacity={0.08 + (i / lines.length) * 0.22}
              d={`M-80 ${y} C 200 ${y - a}, 380 ${y + a}, 620 ${y} S 1040 ${y - a * 1.4}, 1260 ${y + a * 0.4} S 1560 ${y - a}, 1600 ${y}`}
            />
          );
        })}
      </g>
      <g fill="none" stroke="#9fb0c0" strokeWidth="0.6" opacity=".18">
        {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="800" strokeDasharray="2 6" />
        ))}
      </g>
    </svg>
  );
}

export function Compass() {
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  return (
    <svg className="compass" viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <g className="spin">
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeOpacity=".35" />
        <circle cx="200" cy="200" r="168" stroke="currentColor" strokeOpacity=".2" />
        {ticks.map((d) => (
          <line
            key={d}
            x1="200" y1="10" x2="200" y2={d % 45 === 0 ? 34 : d % 15 === 0 ? 26 : 20}
            stroke="currentColor" strokeOpacity={d % 45 === 0 ? 0.9 : 0.4}
            transform={`rotate(${d} 200 200)`}
          />
        ))}
      </g>
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeOpacity=".25" strokeDasharray="3 5" />
      <g fill="currentColor">
        <path d="M200 52 L216 200 L200 348 L184 200 Z" opacity=".95" />
        <path d="M200 52 L216 200 L200 200 Z" fill="#0b1a2b" opacity=".35" />
        <path d="M52 200 L200 186 L348 200 L200 214 Z" opacity=".45" />
        <path d="M95 95 L206 194 L305 305 L194 206 Z" opacity=".18" />
        <path d="M305 95 L206 206 L95 305 L194 194 Z" opacity=".18" />
      </g>
      <circle cx="200" cy="200" r="7" fill="#0b1a2b" stroke="currentColor" strokeWidth="2" />
      <g fill="currentColor" fontFamily="monospace" fontSize="14" textAnchor="middle" letterSpacing="2">
        <text x="200" y="66" dy="-22">N</text>
        <text x="200" y="356" dy="22">S</text>
        <text x="362" y="205">E</text>
        <text x="38" y="205">W</text>
      </g>
    </svg>
  );
}

const icons = {
  design: <path d="M4 28 L16 6 L28 28 Z M10 20 H22 M16 6 V28" />,
  specs: <path d="M7 4 H22 L27 9 V28 H7 Z M22 4 V9 H27 M11 15 H23 M11 20 H23 M11 25 H18" />,
  yard: <path d="M4 26 C8 29 12 29 16 26 S24 23 28 26 M8 22 V10 L16 6 L24 10 V22 M16 6 V22 M12 14 H20" />,
  green: <path d="M8 26 C8 14 16 6 28 6 C28 18 20 26 8 26 Z M8 26 L20 14 M4 28 L8 26" />,
};

export function Icon({ name }) {
  return (
    <svg className="ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
