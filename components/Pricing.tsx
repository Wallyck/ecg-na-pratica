"use client";

/* Pricing — Dobra 7, fundo #FFF4E8, 2 lotes */
export default function Pricing() {
  const scrollToGarantir = () =>
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="garantir" style={{ background: "#FFF4E8", padding: "80px 0" }}>
      <div style={{
        maxWidth: 810,
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
          color: "#2D2D2D",
          textAlign: "center",
          lineHeight: 1.4,
        }}>
          <span style={{ fontWeight: 600, color: "#7E0001" }}>Garanta sua vaga</span>
          {" "}agora antes que o lote vire
        </h2>

        {/* Dois cards lado a lado */}
        <div className="pricing-row" style={{
          display: "flex",
          gap: 26,
          justifyContent: "center",
          flexWrap: "wrap",
        }}>

          {/* ── Lote 1 — ativo ── */}
          <div style={{
            width: 392,
            maxWidth: "100%",
            height: 434,
            background: "#7E0001",
            border: "1px solid rgba(255,255,255,0.56)",
            borderRadius: 11,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              height: 65,
              borderBottom: "1px solid rgba(255,255,255,0.56)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 24, fontWeight: 600, color: "#FFFFFF" }}>
                1º LOTE
              </span>
            </div>

            {/* Preço — height 168px */}
            <div style={{
              height: 168,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 34.6, fontWeight: 400, color: "#FFFFFF" }}>
                Por apenas
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 71.5px)", fontWeight: 600, color: "#F2DEA2", lineHeight: 1 }}>
                R$ 29,90
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 27.8, fontWeight: 400, color: "#FFFFFF" }}>
                à vista ou no cartão
              </span>
            </div>

            {/* Botão */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
              <button
                onClick={scrollToGarantir}
                style={{
                  width: 341,
                  maxWidth: "100%",
                  height: 74,
                  background: "#0AA988",
                  border: "3px solid rgba(255,255,255,0.33)",
                  borderRadius: 300,
                  fontFamily: "var(--font-inter)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  transition: "opacity 0.15s, transform 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.01)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "scale(1)"; }}
              >
                QUERO PARTICIPAR
              </button>
            </div>
          </div>

          {/* ── Lote 2 — bloqueado ── */}
          <div
            aria-hidden="true"
            style={{
              width: 392,
              maxWidth: "100%",
              height: 434,
              background: "#FFF4E8",
              border: "1px solid rgba(0,0,0,0.56)",
              borderRadius: 11,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              opacity: 0.7,
              pointerEvents: "none",
            }}
          >
            {/* Header */}
            <div style={{
              height: 65,
              borderBottom: "1px solid rgba(45,45,45,0.56)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 24, fontWeight: 600, color: "#2D2D2D" }}>
                2º LOTE
              </span>
            </div>

            {/* Preço */}
            <div style={{
              height: 168,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 34.6, fontWeight: 400, color: "#2D2D2D" }}>
                Por apenas
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 71.5px)", fontWeight: 600, color: "#2D2D2D", lineHeight: 1 }}>
                R$ 39,90
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 27.8, fontWeight: 400, color: "#2D2D2D" }}>
                à vista ou no cartão
              </span>
            </div>

            {/* Botão desabilitado */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
              <button
                disabled
                style={{
                  width: 341,
                  maxWidth: "100%",
                  height: 74,
                  background: "#2D2D2D",
                  border: "none",
                  borderRadius: 300,
                  fontFamily: "var(--font-inter)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  cursor: "not-allowed",
                }}
              >
                PRÓXIMO LOTE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
