import { Check } from "lucide-react";

/* LearningGrid — fundo #FFF4E8, 6 cards em 3 colunas */

const topics = [
  {
    text: "Leitura sistemática do ECG — um método que você aplica em qualquer traçado, sem se perder",
    primary: true,
  },
  { text: "Análise do ritmo — identificar com segurança o que está acontecendo no coração do paciente" },
  { text: "Reconhecimento das principais arritmias — as que você vai encontrar na UTI, emergência e clínica" },
  { text: "Raciocínio clínico integrado — correlacionar o ECG com o quadro do paciente de forma prática" },
  { text: "Condutas de enfermagem — o que fazer com o que você interpretou" },
  { text: "Alterações críticas — o que exige ação imediata e como você age nisso" },
];

export default function LearningGrid() {
  return (
    <section
      aria-label="Conteúdo do curso"
      style={{ background: "#FFF4E8", padding: "80px 0" }}
    >
      <div className="container">
        {/* Título centralizado */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 35px)",
            fontWeight: 400,
            color: "#2D2D2D",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          O que você vai dominar nesse dia:
        </h2>

        {/* Grid 3 × 2 */}
        <div
          className="learn-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 15,
            maxWidth: 848,
            margin: "0 auto",
          }}
        >
          {topics.map(({ text, primary }) => (
            <div
              key={text}
              style={{
                background: primary ? "#9D0E0F" : "#7E0001",
                boxShadow: primary ? "0px 4px 7.3px rgba(0,0,0,0.37)" : "none",
                borderRadius: 6,
                padding: 30,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Ícone check */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  minWidth: 38,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Check size={28} color="#F6E3CE" strokeWidth={2.5} />
              </div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: "170%",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .learn-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
        }
        @media (min-width: 769px) and (max-width: 1023px) {
          .learn-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 640px !important; }
        }
      `}</style>
    </section>
  );
}
