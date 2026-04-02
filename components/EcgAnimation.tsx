"use client";

import Image from "next/image";

/*
 * EcgAnimation
 * ─ Fundo: gradiente creme/areia
 * ─ Imagem do monitor 3D com drop-shadow
 * ─ Sobreposição com fundo vinho simulando a tela do monitor
 * ─ Traçado ECG (PQRST) animado via stroke-dasharray/offset
 * ─ Texto "NO FINAL DO DIA, VOCÊ LÊ UM ECG" em Anton 74px
 */

const PATH_D = `
  M 0,55
  L 30,55
  C 38,55 40,44 48,44 C 56,44 58,55 66,55
  L 82,55
  L 88,55 L 92,15 L 96,95 L 100,28 L 106,55
  L 118,55
  C 126,55 130,42 138,42 C 146,42 150,55 158,55
  L 185,55 L 215,55
  C 223,55 225,44 233,44 C 241,44 243,55 251,55
  L 267,55
  L 273,55 L 277,15 L 281,95 L 285,28 L 291,55
  L 303,55
  C 311,55 315,42 323,42 C 331,42 335,55 343,55
  L 370,55 L 400,55
`.trim();

const PATH_LENGTH = 620;

export default function EcgAnimation() {
  return (
    <section
      aria-label="Animação ECG"
      style={{
        background: "linear-gradient(194.99deg, #F6E3CE -75.26%, #C3AD8A 89.44%)",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Texto em Anton */}
        <p
          style={{
            fontFamily: "var(--font-anton), Anton, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 74px)",
            fontWeight: 400,
            color: "#F6E3CE",
            textTransform: "uppercase",
            lineHeight: "131%",
            textAlign: "center",
            marginBottom: 40,
            // drop-shadow sutil para legibilidade sobre o gradiente creme
            textShadow: "0 2px 12px rgba(71,6,0,0.35)",
            position: "relative",
            zIndex: 2,
          }}
        >
          NO FINAL DO DIA,
          <br />
          VOCÊ LÊ UM ECG
        </p>

        {/* Monitor 3D + tela animada */}
        <div
          style={{
            position: "relative",
            maxWidth: 560,
            width: "100%",
          }}
        >
          {/* Imagem do monitor 3D */}
          <Image
            src="/images/equipamento-medico-isometrico-3d-render.png"
            alt="Monitor cardíaco 3D"
            width={560}
            height={420}
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter:
                "drop-shadow(-74.56px 60.32px 38.54px rgba(0,0,0,0.03)) drop-shadow(-41.89px 34.35px 32.67px rgba(0,0,0,0.1))",
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* Tela do monitor — sobreposição com ECG animado */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "10%",
              left: "12%",
              width: "56%",
              height: "38%",
              background: "linear-gradient(84.46deg, #470600 16.6%, #7E0001 104.11%)",
              borderRadius: 10,
              boxShadow: "inset 0 4px 20px rgba(0,0,0,0.55)",
              zIndex: 2,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Grade de fundo do monitor */}
            <svg
              aria-hidden
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="monitor-grid" width="14" height="14" patternUnits="userSpaceOnUse">
                  <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#F6E3CE" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#monitor-grid)" />
            </svg>

            {/* SVG do traçado ECG animado */}
            <svg
              viewBox="0 0 400 110"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <style>{`
                @keyframes ecg-draw {
                  0%   { stroke-dashoffset: ${PATH_LENGTH}; opacity: 1; }
                  78%  { stroke-dashoffset: 0; opacity: 1; }
                  90%  { opacity: 0; }
                  100% { stroke-dashoffset: ${PATH_LENGTH}; opacity: 0; }
                }
                .ecg-trace {
                  stroke-dasharray: ${PATH_LENGTH};
                  stroke-dashoffset: ${PATH_LENGTH};
                  animation: ecg-draw 3.2s linear infinite;
                }
                .ecg-glow {
                  stroke-dasharray: ${PATH_LENGTH};
                  stroke-dashoffset: ${PATH_LENGTH};
                  animation: ecg-draw 3.2s linear infinite;
                  filter: blur(3px);
                  opacity: 0.4;
                }
              `}</style>
              {/* Glow */}
              <path
                className="ecg-glow"
                d={PATH_D}
                fill="none"
                stroke="#F6E3CE"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Linha principal */}
              <path
                className="ecg-trace"
                d={PATH_D}
                fill="none"
                stroke="#F6E3CE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
