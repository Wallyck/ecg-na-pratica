"use client";

import Image from "next/image";

/*
 * EcgMonitor — Dobra 5
 * Fundo: gradiente creme/areia
 * ECG.svg decorativo de fundo (baixa opacidade)
 * Monitor 3D com drop-shadow
 * Tela do monitor sobreposta com animação PQRST
 * Texto "NO FINAL DO DIA, VOCÊ LÊ UM ECG" em Anton 74px
 */

const PATH_D = `
  M 0,55
  L 28,55
  C 36,55 38,45 46,45 C 54,45 56,55 64,55
  L 78,55
  L 83,55 L 87,18 L 91,92 L 95,28 L 101,55
  L 114,55
  C 122,55 126,43 134,43 C 142,43 146,55 154,55
  L 178,55 L 208,55
  C 216,55 218,45 226,45 C 234,45 236,55 244,55
  L 258,55
  L 263,55 L 267,18 L 271,92 L 275,28 L 281,55
  L 294,55
  C 302,55 306,43 314,43 C 322,43 326,55 334,55
  L 358,55 L 390,55
`.trim();

const PATH_LENGTH = 580;

export default function EcgMonitor() {
  return (
    <section
      aria-label="Monitor ECG"
      style={{
        background: "linear-gradient(194.99deg, #F6E3CE -75.26%, #C3AD8A 89.44%)",
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <div style={{
        maxWidth: 952,
        height: 638,
        margin: "0 auto",
        padding: "0 5%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>

        {/* ECG.svg decorativo de fundo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ECG.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Monitor 3D */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 520, width: "100%" }}>
          <Image
            src="/images/equipamento-medico-isometrico-3d-render.png"
            alt="Monitor cardíaco"
            width={520}
            height={390}
            unoptimized
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter:
                "drop-shadow(-74.56px 60.32px 38.54px rgba(0,0,0,0.03)) " +
                "drop-shadow(-41.89px 34.35px 32.67px rgba(0,0,0,0.10)) " +
                "drop-shadow(-18.43px 15.08px 24.30px rgba(0,0,0,0.16)) " +
                "drop-shadow(-5.03px 4.19px 13.40px rgba(0,0,0,0.19))",
            }}
          />

          {/* Tela do monitor — overlay com ECG animado */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "9.5%",
              left: "11%",
              width: "56%",
              height: "37%",
              background: "linear-gradient(84.46deg, #470600 16.6%, #7E0001 104.11%)",
              borderRadius: 10,
              boxShadow: "inset 0 3px 18px rgba(0,0,0,0.6), inset 0 -2px 8px rgba(0,0,0,0.4)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Grade de fundo do monitor */}
            <svg
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }}
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="mg" width="13" height="13" patternUnits="userSpaceOnUse">
                  <path d="M 13 0 L 0 0 0 13" fill="none" stroke="#F6E3CE" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mg)" />
            </svg>

            {/* Traçado PQRST animado */}
            <svg
              viewBox="0 0 390 110"
              preserveAspectRatio="xMidYMid meet"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <style>{`
                @keyframes ecg-trace {
                  0%   { stroke-dashoffset: ${PATH_LENGTH}; opacity: 1; }
                  78%  { stroke-dashoffset: 0; opacity: 1; }
                  90%  { opacity: 0; }
                  100% { stroke-dashoffset: ${PATH_LENGTH}; opacity: 0; }
                }
                .ecg-main {
                  stroke-dasharray: ${PATH_LENGTH};
                  stroke-dashoffset: ${PATH_LENGTH};
                  animation: ecg-trace 3.2s linear infinite;
                }
                .ecg-blur {
                  stroke-dasharray: ${PATH_LENGTH};
                  stroke-dashoffset: ${PATH_LENGTH};
                  animation: ecg-trace 3.2s linear infinite;
                  filter: blur(3px);
                  opacity: 0.35;
                }
              `}</style>
              <path className="ecg-blur" d={PATH_D} fill="none" stroke="#F6E3CE" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path className="ecg-main" d={PATH_D} fill="none" stroke="#F6E3CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Texto Anton — centralizado sobre o monitor */}
        <div style={{
          position: "absolute",
          zIndex: 2,
          width: 368,
          textAlign: "center",
          pointerEvents: "none",
          top: "50%",
          right: "4%",
          transform: "translateY(-50%)",
        }} className="ecg-text-block">
          <p style={{
            fontFamily: "var(--font-anton), Anton, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 74px)",
            fontWeight: 400,
            color: "#F6E3CE",
            textTransform: "uppercase",
            lineHeight: "131%",
            textShadow: "0 2px 16px rgba(71,6,0,0.4)",
          }}>
            NO FINAL DO DIA, VOCÊ LÊ UM ECG
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ecg-text-block {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            padding: 32px 24px 0;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
