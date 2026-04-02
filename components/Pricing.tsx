"use client";

/* Pricing — fundo #FFF4E8, 2 lotes lado a lado */
export default function Pricing() {
  const scrollToOffer = () =>
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="garantir"
      aria-label="Opções de compra"
      style={{ background: "#FFF4E8", padding: "80px 0" }}
    >
      <div className="container">
        {/* Título */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 35px)",
            fontWeight: 600,
            color: "#7E0001",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Garanta sua vaga agora antes que o lote vire
        </h2>

        {/* Dois cards lado a lado */}
        <div
          className="pricing-grid"
          style={{
            display: "flex",
            gap: 26,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* ── Lote 1 — ativo ── */}
          <div
            style={{
              background: "#7E0001",
              border: "1px solid rgba(255,255,255,0.56)",
              borderRadius: 11,
              width: 392,
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header do card */}
            <div
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.56)",
                height: 65,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 24, fontWeight: 600, color: "#FFFFFF" }}>
                1º LOTE
              </span>
            </div>

            {/* Corpo */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px 24px",
                gap: 28,
              }}
            >
              {/* Preço */}
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.75)", marginBottom: 4 }}>
                  Por apenas
                </p>
                <p
                  style={{
                    fontSize: "clamp(2rem, 3vw, 34px)",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: "66px",
                  }}
                >
                  R$ 29,99
                </p>
                <p style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.75)" }}>
                  à vista ou no cartão
                </p>
              </div>

              {/* Botão CTA */}
              <button
                onClick={scrollToOffer}
                className="btn-cta"
                style={{
                  width: 341,
                  maxWidth: "100%",
                  height: 74,
                  fontSize: 18,
                  fontWeight: 600,
                  borderRadius: 300,
                }}
              >
                QUERO PARTICIPAR
              </button>
            </div>
          </div>

          {/* ── Lote 2 — bloqueado ── */}
          <div
            style={{
              background: "#FFF4E8",
              border: "1px solid rgba(0,0,0,0.56)",
              borderRadius: 11,
              width: 392,
              maxWidth: "100%",
              opacity: 0.7,
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
            }}
            aria-hidden="true"
          >
            {/* Header */}
            <div
              style={{
                borderBottom: "1px solid rgba(45,45,45,0.56)",
                height: 65,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 24, fontWeight: 600, color: "#2D2D2D" }}>
                2º LOTE
              </span>
            </div>

            {/* Corpo */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px 24px",
                gap: 28,
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(45,45,45,0.65)", marginBottom: 4 }}>
                  Por apenas
                </p>
                <p
                  style={{
                    fontSize: "clamp(2rem, 3vw, 34px)",
                    fontWeight: 600,
                    color: "#2D2D2D",
                    lineHeight: "66px",
                  }}
                >
                  R$ 39,90
                </p>
                <p style={{ fontSize: 15, fontWeight: 400, color: "rgba(45,45,45,0.65)" }}>
                  à vista ou no cartão
                </p>
              </div>

              {/* Botão desabilitado */}
              <button
                disabled
                style={{
                  width: 341,
                  maxWidth: "100%",
                  height: 74,
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#2D2D2D",
                  borderRadius: 300,
                  border: "none",
                  cursor: "not-allowed",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
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
