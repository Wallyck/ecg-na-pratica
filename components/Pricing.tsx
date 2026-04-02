"use client";

/* Seção 7 — Oferta / 3 lotes */

const lotes = [
  {
    badge: "🔥 Disponível agora",
    badgeActive: true,
    lote: "1º LOTE",
    desc: "Menor valor disponível",
    price: "29,99",
    btnLabel: "QUERO GARANTIR PELO MENOR PREÇO",
    active: true,
  },
  {
    badge: "⚠️ 2º LOTE",
    badgeActive: false,
    lote: "2º LOTE",
    desc: "Quando o 1º lote fechar, o valor sobe",
    price: "39,90",
    btnLabel: "GARANTIR ANTES DO PREÇO SUBIR",
    active: false,
  },
  {
    badge: "🚨 3º LOTE",
    badgeActive: false,
    lote: "3º LOTE — Última chamada",
    desc: "Última chamada",
    price: "49,99",
    btnLabel: "QUERO PARTICIPAR MESMO ASSIM",
    active: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="garantir"
      aria-label="Opções de compra"
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
            marginBottom: 48,
            lineHeight: 1.3,
            maxWidth: 680,
          }}
        >
          Garanta sua vaga agora. O preço sobe{" "}
          <strong style={{ fontWeight: 600 }}>conforme os lotes fecham.</strong>
        </h2>

        {/* Grid 3 colunas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            maxWidth: 960,
          }}
          className="offer-grid"
        >
          {lotes.map(({ badge, badgeActive, lote, desc, price, btnLabel, active }) => (
            <div
              key={lote}
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                border: `2px solid ${active ? "#00C853" : "rgba(246,227,206,0.1)"}`,
                background: active
                  ? "rgba(246,227,206,0.05)"
                  : "rgba(246,227,206,0.02)",
                boxShadow: active ? "0 0 36px rgba(0,200,83,0.14)" : "none",
                opacity: active ? 1 : 0.6,
              }}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  width: "fit-content",
                  background: badgeActive
                    ? "rgba(0,200,83,0.12)"
                    : "rgba(246,227,206,0.06)",
                  color: badgeActive ? "#00C853" : "rgba(246,227,206,0.4)",
                  border: `1px solid ${badgeActive ? "rgba(0,200,83,0.28)" : "rgba(246,227,206,0.12)"}`,
                }}
              >
                {badge}
              </div>

              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: active ? "#00C853" : "rgba(246,227,206,0.55)",
                }}
              >
                {lote}
              </p>

              <p style={{ fontSize: 14, color: "rgba(246,227,206,0.55)", lineHeight: 1.45 }}>
                {desc}
              </p>

              {/* Preço */}
              <div>
                <span style={{ fontSize: 14, color: "rgba(246,227,206,0.4)" }}>R$ </span>
                <strong
                  style={{
                    display: "block",
                    fontSize: 44,
                    fontWeight: 600,
                    lineHeight: 1.1,
                    color: "rgba(246,227,206,0.95)",
                  }}
                >
                  {price}
                </strong>
              </div>

              {/* Botão */}
              {active ? (
                <button
                  onClick={() => {}}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 56,
                    padding: "0 20px",
                    borderRadius: 59,
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    textAlign: "center",
                    border: "2px solid rgba(255,255,255,0.22)",
                    cursor: "pointer",
                    background: "#00C853",
                    color: "#fff",
                    lineHeight: 1.3,
                    transition: "transform 0.15s, opacity 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.opacity = "0.92";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  {btnLabel}
                </button>
              ) : (
                <button
                  disabled
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 56,
                    padding: "0 20px",
                    borderRadius: 59,
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    textAlign: "center",
                    border: "2px solid rgba(246,227,206,0.1)",
                    cursor: "not-allowed",
                    background: "rgba(246,227,206,0.04)",
                    color: "rgba(246,227,206,0.25)",
                    lineHeight: 1.3,
                  }}
                >
                  {btnLabel}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .offer-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
        }
      `}</style>
    </section>
  );
}
