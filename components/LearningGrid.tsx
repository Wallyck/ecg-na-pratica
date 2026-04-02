import { CheckCircle2 } from "lucide-react";

const topics = [
  "Leitura sistemática do ECG — um método que você aplica em qualquer traçado, sem se perder",
  "Análise do ritmo — identificar com segurança o que está acontecendo no coração do paciente",
  "Reconhecimento das principais arritmias — as que você vai encontrar na UTI, emergência e clínica",
  "Raciocínio clínico integrado — correlacionar o ECG com o quadro do paciente de forma prática",
  "Condutas de enfermagem — o que fazer com o que você interpretou",
  "Alterações críticas — o que exige ação imediata e como você age nisso",
];

export default function LearningGrid() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="container">
        {/* Título */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          O que você vai dominar nesse dia:
        </h2>

        {/* Grid de 6 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {topics.map((topic) => (
            <div
              key={topic}
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                display: "flex",
                gap: "0.875rem",
                alignItems: "flex-start",
              }}
            >
              <CheckCircle2
                size={20}
                color="#00C853"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <p style={{ color: "#e0d0d0", lineHeight: 1.6, fontSize: "0.95rem" }}>
                {topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
