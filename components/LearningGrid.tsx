/* Seção 4 — O que vai dominar */

const topics = [
  "Leitura sistemática do ECG — um método que você aplica em qualquer traçado, sem se perder",
  "Análise do ritmo — identificar com segurança o que está acontecendo no coração do paciente",
  "Reconhecimento das principais arritmias — as que você vai encontrar na UTI, emergência e clínica",
  "Alterações críticas — o que exige ação imediata e como você age nisso",
  "Raciocínio clínico integrado — correlacionar o ECG com o quadro do paciente de forma prática",
  "Condutas de enfermagem — o que fazer com o que você interpretou",
];

export default function LearningGrid() {
  return (
    <section
      id="aprender"
      aria-label="Conteúdo do curso"
      style={{
        padding: "80px 5%",
        background: "#3D0A0A",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.25rem)",
            fontWeight: 400,
            color: "rgba(246,227,206,0.95)",
            marginBottom: 40,
            lineHeight: 1.3,
          }}
        >
          O que você vai <strong style={{ fontWeight: 600 }}>dominar</strong> nesse dia:
        </h2>

        {/* Lista vertical com check circular */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginBottom: 40,
            maxWidth: 820,
          }}
        >
          {topics.map((topic) => (
            <div
              key={topic}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: "20px 24px",
                background: "rgba(45,5,5,0.5)",
                borderRadius: 12,
                border: "1px solid rgba(246,227,206,0.06)",
              }}
            >
              {/* Check circular verde */}
              <div
                style={{
                  width: 30,
                  height: 30,
                  minWidth: 30,
                  borderRadius: "50%",
                  background: "#00C853",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  marginTop: 1,
                }}
              >
                ✓
              </div>
              <span
                style={{
                  fontSize: 18,
                  color: "rgba(246,227,206,0.85)",
                  lineHeight: 1.55,
                }}
              >
                {topic}
              </span>
            </div>
          ))}
        </div>

        {/* Frase de fechamento com borda verde */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(246,227,206,0.9)",
            padding: "24px 28px",
            background: "rgba(0,200,83,0.06)",
            borderLeft: "4px solid #00C853",
            borderRadius: "0 12px 12px 0",
            maxWidth: 420,
          }}
        >
          No final do dia, você lê um ECG.{" "}
          <strong style={{ fontWeight: 700 }}>Ponto.</strong>
        </div>
      </div>
    </section>
  );
}
