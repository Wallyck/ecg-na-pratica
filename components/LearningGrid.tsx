/* LearningGrid — Dobra 4, fundo #FFF4E8 */

const topics = [
  { text: "Leitura sistemática do ECG — um método que você aplica em qualquer traçado, sem se perder", primary: true },
  { text: "Análise do ritmo — identificar com segurança o que está acontecendo no coração do paciente" },
  { text: "Reconhecimento das principais arritmias — as que você vai encontrar na UTI, emergência e clínica" },
  { text: "Raciocínio clínico integrado — correlacionar o ECG com o quadro do paciente de forma prática" },
  { text: "Condutas de enfermagem — o que fazer com o que você interpretou" },
  { text: "Alterações críticas — o que exige ação imediata e como você age nisso" },
];

export default function LearningGrid() {
  return (
    <section style={{ background: "#FFF4E8", padding: "80px 0" }}>
      <div style={{
        maxWidth: 848,
        margin: "0 auto",
        padding: "0 5%",
        display: "flex",
        flexDirection: "column",
        gap: 65,
      }}>

        {/* Título */}
        <h2 style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(1.4rem, 2.5vw, 35px)",
          fontWeight: 400,
          color: "#2D2D2D",
          textAlign: "center",
          lineHeight: 1.4,
        }}>
          O que você vai{" "}
          <span style={{ fontWeight: 600, color: "#7E0001" }}>dominar</span>
          {" "}nesse dia:
        </h2>

        {/* Grid 3 × 2 */}
        <div className="learn-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 278px)",
          gap: 15,
          justifyContent: "center",
        }}>
          {topics.map(({ text, primary }) => (
            <div
              key={text}
              className="card-h"
              style={{
                background: primary ? "#9D0E0F" : "#7E0001",
                boxShadow: primary ? "0px 4px 7.3px rgba(0,0,0,0.37)" : "none",
                borderRadius: 6,
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
              {/* Ícone Check.svg 38×38 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Check.svg"
                alt=""
                width={38}
                height={38}
                style={{ width: 38, height: 38, flexShrink: 0 }}
              />
              <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: 18,
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: "170%",
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .learn-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .learn-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
