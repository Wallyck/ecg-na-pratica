import { Activity, Brain, Timer, ShieldAlert } from "lucide-react";

const pains = [
  {
    icon: Activity,
    text: "O monitor apita e você espera alguém dizer o que é",
  },
  {
    icon: Brain,
    text: "Você correlaciona o traçado com o quadro clínico... devagar demais",
  },
  {
    icon: Timer,
    text: "Em situações críticas, o tempo que você leva pra interpretar pode custar caro",
  },
  {
    icon: ShieldAlert,
    text: "Você se posiciona menos do que deveria, porque não tem certeza",
  },
];

export default function PainPoints() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="container">
        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 800,
            color: "#fff",
            maxWidth: "700px",
            marginBottom: "1.25rem",
            lineHeight: 1.25,
          }}
        >
          Se você é enfermeiro e ainda trava diante do ECG,{" "}
          <span style={{ color: "#c9a0a0" }}>isso não é culpa sua.</span>
        </h2>

        {/* Parágrafo explicativo */}
        <p
          style={{
            color: "#c9a0a0",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "640px",
            marginBottom: "3rem",
          }}
        >
          A graduação passou rápido por isso. Os plantões não param pra te
          ensinar. E ficar vendo vídeo solto no YouTube não fecha o raciocínio
          clínico.
        </p>

        {/* Grid de cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {pains.map(({ icon: Icon, text }) => (
            <div
              key={text}
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "rgba(0,200,83,0.1)",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={20} color="#00C853" />
              </div>
              <p style={{ color: "#e0d0d0", lineHeight: 1.55, fontSize: "0.95rem" }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de impacto */}
        <p
          style={{
            textAlign: "center",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 700,
            color: "#fff",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2rem",
          }}
        >
          Isso não é falta de esforço.{" "}
          <span style={{ color: "#00C853" }}>É falta de método.</span>
        </p>
      </div>
    </section>
  );
}
