/* Seção 2 — Problema/Dor */

const pains = [
  "O monitor apita e você espera alguém dizer o que é",
  "Você correlaciona o traçado com o quadro clínico... devagar demais",
  "Em situações críticas, o tempo que você leva pra interpretar pode custar caro",
  "Você se posiciona menos do que deveria — porque não tem certeza",
];

export default function PainPoints() {
  return (
    <section
      aria-label="Identificação do problema"
      style={{
        padding: "80px 5%",
        background: "#3D0A0A",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        {/* Headline itálica */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 600,
            lineHeight: 1.35,
            color: "rgba(246,227,206,0.95)",
            marginBottom: 28,
            fontStyle: "italic",
          }}
        >
          Se você é enfermeiro e ainda trava diante do ECG, isso não é culpa sua.
        </h2>

        <p style={{ fontSize: 20, color: "rgba(246,227,206,0.72)", lineHeight: 1.65, marginBottom: 12 }}>
          A graduação passou rápido por isso. Os plantões não param pra te ensinar. E ficar vendo vídeo solto no YouTube não fecha o raciocínio clínico.
        </p>
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "rgba(246,227,206,0.9)",
            marginTop: 8,
            marginBottom: 20,
          }}
        >
          O resultado é sempre o mesmo:
        </p>

        {/* Cards com borda esquerda */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
          {pains.map((text) => (
            <div
              key={text}
              style={{
                padding: "18px 20px 18px 24px",
                background: "rgba(45,5,5,0.6)",
                borderLeft: "4px solid #7E1010",
                borderRadius: "0 12px 12px 0",
                fontSize: 18,
                lineHeight: 1.5,
                color: "rgba(246,227,206,0.85)",
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Frase de fechamento */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: "rgba(246,227,206,0.9)",
            padding: "24px 28px",
            background: "rgba(0,0,0,0.25)",
            borderRadius: 12,
            borderLeft: "4px solid #7E1010",
          }}
        >
          Isso não é falta de esforço.{" "}
          <strong style={{ fontWeight: 700 }}>É falta de método.</strong>
        </div>
      </div>
    </section>
  );
}
