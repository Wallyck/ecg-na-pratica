"use client";

/*
 * EcgAnimation — traçado PQRST animado com SVG + CSS keyframes.
 * stroke-dasharray/offset animado em loop infinito.
 */

const PATH_D = `
  M 0,80
  L 40,80
  C 50,80 52,68 60,68 C 68,68 70,80 80,80
  L 100,80
  L 108,80 L 112,30 L 116,130 L 120,50 L 126,80
  L 140,80
  C 150,80 154,62 162,62 C 170,62 174,80 184,80
  L 220,80 L 260,80
  C 270,80 272,68 280,68 C 288,68 290,80 300,80
  L 320,80
  L 328,80 L 332,30 L 336,130 L 340,50 L 346,80
  L 360,80
  C 370,80 374,62 382,62 C 390,62 394,80 404,80
  L 440,80 L 480,80
  C 490,80 492,68 500,68 C 508,68 510,80 520,80
  L 540,80
  L 548,80 L 552,30 L 556,130 L 560,50 L 566,80
  L 580,80
  C 590,80 594,62 602,62 C 610,62 614,80 624,80
  L 660,80
`.trim();

const PATH_LENGTH = 900;

export default function EcgAnimation() {
  return (
    <section
      style={{
        padding: "64px 5%",
        background: "#2D0505",
        borderTop: "1px solid rgba(246,227,206,0.06)",
        borderBottom: "1px solid rgba(246,227,206,0.06)",
        overflow: "hidden",
      }}
    >
      {/* Texto acima */}
      <p
        style={{
          textAlign: "center",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          fontWeight: 800,
          color: "rgba(246,227,206,0.9)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 32,
        }}
      >
        No final do dia, você lê um ECG
      </p>

      {/* Monitor */}
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div
          style={{
            background: "#050505",
            borderRadius: 12,
            border: "2px solid rgba(0,200,83,0.18)",
            padding: "24px 0",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Grade de fundo */}
          <svg
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }}
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="ecg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00C853" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ecg-grid)" />
          </svg>

          {/* Traçado animado */}
          <svg
            viewBox="0 0 660 160"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "auto", display: "block" }}
            aria-label="Traçado de eletrocardiograma animado"
          >
            <style>{`
              @keyframes ecg-draw {
                0%   { stroke-dashoffset: ${PATH_LENGTH}; opacity: 1; }
                80%  { stroke-dashoffset: 0; opacity: 1; }
                92%  { opacity: 0; }
                100% { stroke-dashoffset: ${PATH_LENGTH}; opacity: 0; }
              }
              .ecg-line {
                stroke-dasharray: ${PATH_LENGTH};
                stroke-dashoffset: ${PATH_LENGTH};
                animation: ecg-draw 3.5s linear infinite;
              }
              .ecg-glow {
                stroke-dasharray: ${PATH_LENGTH};
                stroke-dashoffset: ${PATH_LENGTH};
                animation: ecg-draw 3.5s linear infinite;
                filter: blur(4px);
                opacity: 0.35;
              }
            `}</style>
            {/* Glow */}
            <path className="ecg-glow" d={PATH_D} fill="none" stroke="#00C853" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            {/* Linha */}
            <path className="ecg-line" d={PATH_D} fill="none" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
