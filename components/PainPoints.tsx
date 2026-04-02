/* PainPoints — Dobra 2, fundo #FFF4E8 */

const cards = [
  { text: "O monitor apita e você espera alguém dizer o que é", primary: true },
  { text: "Você correlaciona o traçado com o quadro clínico... devagar demais" },
  { text: "Em situações críticas, o tempo que você leva pra interpretar pode custar caro" },
  { text: "Você se posiciona menos do que deveria, porque não tem certeza" },
];

export default function PainPoints() {
  return (
    <section style={{ background: "#FFF4E8", padding: "80px 0" }}>
      <div style={{ maxWidth: 1043, margin: "0 auto", padding: "0 5%" }}>

        {/* ── Duas colunas ── */}
        <div className="pain-row" style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 81,
          alignItems: "flex-start",
        }}>

          {/* Coluna esquerda — texto */}
          <div style={{ width: 477, flexShrink: 0 }} className="pain-left">
            <h2 style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1.4rem, 2.5vw, 35px)",
              fontWeight: 400,
              color: "#2D2D2D",
              lineHeight: "52px",
              marginBottom: 24,
            }} className="pain-h2">
              Se você é enfermeiro e ainda trava diante do ECG,{" "}
              <span style={{ fontWeight: 600, color: "#7E0001" }}>
                isso não é culpa sua
              </span>
              .
            </h2>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: 18,
              fontWeight: 400,
              color: "#2D2D2D",
              lineHeight: "170%",
            }}>
              A graduação passou rápido por isso. Os plantões não param pra te
              ensinar. E ficar vendo vídeo solto no YouTube não fecha o raciocínio
              clínico.
            </p>
          </div>

          {/* Coluna direita — 4 cards empilhados */}
          <div style={{ width: 437, flexShrink: 0, display: "flex", flexDirection: "column", gap: 15 }} className="pain-right">
            {cards.map(({ text, primary }) => (
              <div
                key={text}
                className="card-h"
                style={{
                  background: primary ? "#9D0E0F" : "#7E0001",
                  boxShadow: primary ? "0px 4px 7.3px rgba(0,0,0,0.37)" : "none",
                  borderRadius: 6,
                  padding: "25px 30px",
                  fontFamily: "var(--font-inter)",
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
        <div style={{
          maxWidth: 752,
          margin: "60px auto 0",
          borderTop: "1px solid rgba(45,45,45,0.45)",
          borderBottom: "1px solid rgba(45,45,45,0.45)",
          height: 172,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(1.3rem, 2.5vw, 35px)",
            fontWeight: 400,
            color: "#2D2D2D",
            textAlign: "center",
            lineHeight: 1.5,
          }}>
            Isso não é falta de esforço.{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600 }}>É falta de método</em>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pain-row   { flex-direction: column !important; gap: 40px !important; }
          .pain-left  { width: 100% !important; }
          .pain-right { width: 100% !important; }
          .pain-h2    { line-height: 1.3 !important; }
        }
      `}</style>
    </section>
  );
}
