"use client";

export default function Pricing() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-card)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "5rem 0",
      }}
    >
      <div className="container">
        {/* Título */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Garanta sua vaga agora antes que o lote vire
        </h2>

        {/* Dois cards lado a lado */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {/* Lote 1 — em destaque */}
          <div
            style={{
              backgroundColor: "#2D0505",
              border: "2px solid #00C853",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              textAlign: "center",
              position: "relative",
              boxShadow: "0 0 24px rgba(0,200,83,0.15)",
            }}
          >
            {/* Badge de lote ativo */}
            <span
              style={{
                position: "absolute",
                top: "-14px",
                backgroundColor: "#00C853",
                color: "#000",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                padding: "0.25rem 1rem",
                borderRadius: "999px",
              }}
            >
              DISPONÍVEL AGORA
            </span>

            <p
              style={{
                color: "#00C853",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.06em",
              }}
            >
              1º LOTE
            </p>

            <p
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                lineHeight: 1,
              }}
            >
              R$ 29,99
            </p>

            <p style={{ color: "#c9a0a0", fontSize: "0.85rem" }}>
              à vista ou no cartão
            </p>

            <button
              className="btn-cta"
              onClick={() => {}}
              style={{ width: "100%", marginTop: "0.5rem" }}
            >
              QUERO PARTICIPAR
            </button>
          </div>

          {/* Lote 2 — bloqueado */}
          <div
            style={{
              backgroundColor: "#2D0505",
              border: "2px solid rgba(255,255,255,0.1)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              textAlign: "center",
              opacity: 0.5,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Overlay de bloqueado */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backdropFilter: "grayscale(1)",
              }}
            />

            <p
              style={{
                color: "#aaa",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.06em",
                position: "relative",
              }}
            >
              2º LOTE
            </p>

            <p
              style={{
                color: "#bbb",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                lineHeight: 1,
                position: "relative",
              }}
            >
              R$ 39,90
            </p>

            <p
              style={{
                color: "#888",
                fontSize: "0.85rem",
                position: "relative",
              }}
            >
              à vista ou no cartão
            </p>

            {/* Botão desabilitado */}
            <button
              disabled
              style={{
                width: "100%",
                marginTop: "0.5rem",
                backgroundColor: "#555",
                color: "#999",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "not-allowed",
                position: "relative",
              }}
            >
              PRÓXIMO LOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
