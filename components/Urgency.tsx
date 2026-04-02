"use client";

/* Seção 8 — Urgência final */

export default function Urgency() {
  const scrollToOffer = () => {
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Chamada final"
      style={{
        padding: "100px 5%",
        background: "#150000",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "rgba(246,227,206,0.95)",
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          Sábado, 02 de maio.{" "}
          <strong style={{ fontWeight: 600 }}>8h da manhã.</strong>
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "rgba(246,227,206,0.6)",
            maxWidth: 600,
            margin: "0 auto 48px",
            lineHeight: 1.75,
          }}
        >
          Você pode estar lendo um ECG com segurança — ou pode estar exatamente onde está
          hoje.
          <br />
          Essa aula não vai se repetir nesse formato. É ao vivo, é um dia, e quando fechar,
          fechou.
        </p>

        <button
          onClick={scrollToOffer}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            padding: "0 52px",
            background: "#00C853",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.04em",
            borderRadius: 59,
            border: "3px solid rgba(255,255,255,0.25)",
            cursor: "pointer",
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
          GARANTIR MINHA VAGA AGORA
        </button>
      </div>
    </section>
  );
}
