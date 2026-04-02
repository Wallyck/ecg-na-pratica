import { Check } from "lucide-react";

/* TargetAudience — fundo #FFF4E8, 5 cards em 2 colunas (último centralizado) */

const items = [
  { text: "É enfermeiro e ainda trava diante do ECG", primary: true },
  { text: "Quer ter segurança para interpretar traçados no plantão" },
  { text: "Trabalha ou quer trabalhar em UTI, emergência ou cardiologia" },
  { text: "Quer tomar decisões com autonomia, sem depender de médico ou colega" },
  { text: "É acadêmico de enfermagem e quer sair na frente" },
];

export default function TargetAudience() {
  const firstFour = items.slice(0, 4);
  const last      = items[4];

  return (
    <section
      aria-label="Público do curso"
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
          Essa aula é pra você se:
        </h2>

        <div style={{ maxWidth: 933, margin: "0 auto" }}>
          {/* Grid 2 × 2 (primeiros 4) */}
          <div
            className="who-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 15,
              marginBottom: 15,
            }}
          >
            {firstFour.map(({ text, primary }) => (
              <Card key={text} text={text} primary={!!primary} />
            ))}
          </div>

          {/* 5º card centralizado */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "calc(50% - 7.5px)" }} className="who-last">
              <Card text={last.text} primary={false} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; }
          .who-last { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}

/* Sub-componente de card */
function Card({ text, primary }: { text: string; primary: boolean }) {
  return (
    <div
      style={{
        background: primary ? "#9D0E0F" : "#7E0001",
        boxShadow: primary ? "0px 4px 7.3px rgba(0,0,0,0.37)" : "none",
        borderRadius: 6,
        padding: "25px 30px",
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 38, height: 38, minWidth: 38,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginTop: 2,
        }}
      >
        <Check size={28} color="#F6E3CE" strokeWidth={2.5} />
      </div>
      <p style={{ fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
        {text}
      </p>
    </div>
  );
}
