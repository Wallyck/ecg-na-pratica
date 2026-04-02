"use client";

export default function Hero() {
  const scrollToOffer = () => {
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      aria-label="Apresentação do curso"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(76.6deg, #2D0505 16.6%, #5a0a0a 104.1%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(246,227,206,0.1)",
      }}
    >
      {/* ── Foto responsiva — ocupa metade direita no desktop ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "56%",
          zIndex: 1,
          overflow: "hidden",
        }}
        className="hero-photo-wrap"
      >
        {/* Gradiente esquerda que funde a foto com o fundo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #2D0505 0%, rgba(45,5,5,0.6) 30%, transparent 55%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Gradiente inferior */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "28%",
            background: "linear-gradient(to top, #2D0505 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <picture style={{ display: "block", width: "100%", height: "100%" }}>
          <source media="(min-width: 1280px)" srcSet="/images/IMAGE-DOBRA1-DESKTOP.png" />
          <source media="(min-width: 1024px)" srcSet="/images/NOTEBOOK-CC.png" />
          <source media="(min-width: 768px)"  srcSet="/images/TABLET-CC.png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/IMAGE-MOBILE.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </picture>
      </div>

      {/* ── Luzes difusas decorativas ── */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
      >
        <div style={{
          position: "absolute", width: 680, height: 520,
          background: "radial-gradient(ellipse at center, rgba(120,20,10,0.6) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(90px)", mixBlendMode: "plus-lighter",
          opacity: 0.7, right: -80, top: -80, transform: "rotate(-25deg)",
        }} />
        <div style={{
          position: "absolute", width: 500, height: 700,
          background: "radial-gradient(ellipse at center, rgba(140,30,10,0.45) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(90px)", mixBlendMode: "plus-lighter",
          opacity: 0.7, right: 250, bottom: -180, transform: "rotate(18deg)",
        }} />
      </div>

      {/* ── Linha ECG decorativa ── */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          pointerEvents: "none", display: "flex", alignItems: "center",
        }}
        className="hero-ecg-deco"
      >
        <svg viewBox="0 0 1920 120" fill="none" style={{ width: "100%" }}>
          <polyline
            points="0,60 180,60 220,60 240,14 262,106 282,8 302,112 322,60 380,60 560,60 600,60 622,16 644,104 664,9 684,111 704,60 760,60 940,60 980,60 1002,14 1024,106 1044,8 1064,112 1084,60 1140,60 1320,60 1360,60 1382,16 1404,104 1424,9 1444,111 1464,60 1520,60 1700,60 1740,60 1762,15 1784,105 1804,8 1824,113 1844,60 1920,60"
            stroke="#F6E3CE"
            strokeWidth="2"
            strokeOpacity="0.12"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Conteúdo ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 5%",
        }}
      >
        <div
          style={{ maxWidth: 560, padding: "120px 0 80px" }}
          className="hero-content-inner"
        >
          {/* Tag de evento com ponto pulsante */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(246,227,206,0.1)",
              border: "1px solid rgba(246,227,206,0.22)",
              borderRadius: 100,
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(246,227,206,0.9)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#FF6B6B", flexShrink: 0,
                animation: "pulse-dot 1.8s ease-in-out infinite",
              }}
            />
            AULA AO VIVO | SÁBADO, 02 DE MAIO | 8H ÀS 18H
          </div>

          {/* Headline */}
          <h1 style={{ marginBottom: 24, display: "block" }}>
            <span
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                color: "rgba(246,227,206,0.95)",
                fontSize: "clamp(2rem, 3.5vw, 3.1rem)",
                lineHeight: 1.2,
              }}
            >
              Aprenda a interpretar qualquer ECG
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                color: "#fff",
                fontSize: "clamp(2rem, 3.5vw, 3.1rem)",
                lineHeight: 1.2,
              }}
            >
              em um único dia de aula
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "rgba(246,227,206,0.75)",
              lineHeight: 1.65,
              maxWidth: 480,
              marginBottom: 40,
            }}
            className="hero-subtitle"
          >
            Em um dia de aula você vai saber interpretar qualquer traçado com
            segurança — e nunca mais depender de ninguém no plantão
          </p>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
            className="hero-cta-row"
          >
            <button
              onClick={scrollToOffer}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 70,
                padding: "0 32px",
                background: "#00C853",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                borderRadius: 59,
                border: "3px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                whiteSpace: "nowrap",
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
              className="hero-btn"
            >
              QUERO GARANTIR MINHA VAGA
            </button>
            <span
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(246,227,206,0.6)",
              }}
            >
              1º Lote por R$ 29,99
            </span>
          </div>
        </div>
      </div>

      {/* ── Foto mobile — aparece acima do conteúdo em telas pequenas ── */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(.8); }
        }

        /* Mobile: foto em bloco, conteúdo abaixo */
        @media (max-width: 767px) {
          .hero-photo-wrap {
            position: relative !important;
            width: 100% !important;
            height: 240px !important;
            top: auto !important; bottom: auto !important;
          }
          .hero-photo-wrap > div { display: none !important; }
          .hero-ecg-deco { display: none !important; }
          .hero-content-inner {
            padding: 32px 0 52px !important;
            max-width: 100% !important;
            text-align: center;
          }
          .hero-subtitle { max-width: 100% !important; margin-left: auto; margin-right: auto; }
          .hero-cta-row { flex-direction: column; align-items: center; gap: 12px; }
          .hero-btn { width: 100%; max-width: 400px; }
        }
      `}</style>
    </section>
  );
}
