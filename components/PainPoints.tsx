/* PainPoints — fundo #FFF4E8, duas colunas + frase de impacto */

const cards = [
  {
    text: "O monitor apita e você espera alguém dizer o que é",
    primary: true,
  },
  { text: "Você correlaciona o traçado com o quadro clínico... devagar demais" },
  { text: "Em situações críticas, o tempo que você leva pra interpretar pode custar caro" },
  { text: "Você se posiciona menos do que deveria, porque não tem certeza" },
];

export default function PainPoints() {
  return (
    <section
      aria-label="Identificação do problema"
      style={{ background: "#FFF4E8", padding: "80px 0" }}
    >
      <div className="container">
        {/* ── Duas colunas ── */}
        <div
          className="pain-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "477px 1fr",
            gap: 60,
            alignItems: "start",
            maxWidth: 1043,
            margin: "0 auto",
          }}
        >
          {/* Coluna esquerda — texto */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 35px)",
                fontWeight: 400,
                color: "#2D2D2D",
                lineHeight: "52px",
                marginBottom: 24,
              }}
              className="pain-headline"
            >
              Se você é enfermeiro e ainda trava diante do ECG, isso não é culpa sua.
            </h2>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#2D2D2D", lineHeight: "170%" }}>
              A graduação passou rápido por isso. Os plantões não param pra te ensinar. E
              ficar vendo vídeo solto no YouTube não fecha o raciocínio clínico.
            </p>
          </div>

          {/* Coluna direita — cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            {cards.map(({ text, primary }) => (
              <div
                key={text}
                style={{
                  background: primary ? "#9D0E0F" : "#7E0001",
                  boxShadow: primary ? "0px 4px 7.3px rgba(0,0,0,0.37)" : "none",
                  borderRadius: 6,
                  padding: "25px 30px",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: "170%",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Frase de impacto ── */}
        <div
          style={{
            maxWidth: 752,
            margin: "60px auto 0",
            borderTop: "1px solid rgba(45,45,45,0.45)",
            borderBottom: "1px solid rgba(45,45,45,0.45)",
            minHeight: 172,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 35px)",
              fontWeight: 400,
              color: "#2D2D2D",
              textAlign: "center",
              lineHeight: 1.5,
              padding: "32px 0",
            }}
          >
            Isso não é falta de esforço. É falta de método.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pain-grid { grid-template-columns: 1fr !important; gap: 40px !important; max-width: 600px !important; }
          .pain-headline { line-height: 1.3 !important; }
        }
      `}</style>
    </section>
  );
}
