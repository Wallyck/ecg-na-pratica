"use client";

/* Hero — layout split: texto à esquerda, imagem à direita */
export default function Hero() {
  const scrollToOffer = () =>
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      aria-label="Apresentação do curso"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(84.46deg, #470600 16.6%, #7E0001 104.11%)",
        borderBottom: "5px solid #F6E3CE",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Foto: ocupa metade direita no desktop ── */}
      <div
        aria-hidden="true"
        className="hero-photo"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "56%",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Gradiente de fusão com o fundo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #470600 0%, rgba(71,6,0,0.55) 30%, transparent 55%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "28%",
            background: "linear-gradient(to top, #470600 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Imagem responsiva */}
        <picture style={{ display: "block", width: "100%", height: "100%" }}>
          <source media="(min-width: 1280px)" srcSet="/images/IMAGE-DOBRA1-DESKTOP.png" />
          <source media="(min-width: 1024px)" srcSet="/images/NOTEBOOK-CC.png" />
          <source media="(min-width: 768px)"  srcSet="/images/TABLET-CC.png" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/IMAGE-MOBILE.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        </picture>
      </div>

      {/* ── Linha ECG decorativa (desktop) ── */}
      <div
        aria-hidden
        className="hero-ecg-deco"
        style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", display: "flex", alignItems: "center" }}
      >
        <svg viewBox="0 0 1920 120" fill="none" style={{ width: "100%" }}>
          <polyline
            points="0,60 180,60 220,60 240,14 262,106 282,8 302,112 322,60 380,60 560,60 600,60 622,16 644,104 664,9 684,111 704,60 760,60 940,60 980,60 1002,14 1024,106 1044,8 1064,112 1084,60 1140,60 1320,60 1360,60 1382,16 1404,104 1424,9 1444,111 1464,60 1520,60 1700,60 1740,60 1762,15 1784,105 1804,8 1824,113 1844,60 1920,60"
            stroke="#F6E3CE"
            strokeWidth="2"
            strokeOpacity="0.15"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Conteúdo textual ── */}
      <div
        className="container"
        style={{ position: "relative", zIndex: 2, width: "100%" }}
      >
        <div
          className="hero-content"
          style={{ maxWidth: 529, padding: "120px 0 80px" }}
        >
          {/* Tag de evento com ponto pulsante */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(246,227,206,0.12)",
              border: "1px solid rgba(246,227,206,0.25)",
              borderRadius: 100,
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: 600,
              color: "#F6E3CE",
              textTransform: "uppercase",
              letterSpacing: "0.918px",
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
            Aula ao vivo | Sábado, 02 de maio | 8h às 18h
          </div>

          {/* Título */}
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 50.7px)",
              fontWeight: 600,
              color: "#F6E3CE",
              lineHeight: "77px",
              marginBottom: 24,
            }}
            className="hero-headline"
          >
            Aprenda a interpretar qualquer ECG em um único dia de aula
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: "170%",
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
            className="hero-cta-row"
            style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
          >
            <button
              className="btn-cta"
              onClick={scrollToOffer}
              style={{
                width: 363,
                maxWidth: "100%",
                height: 70,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              QUERO GARANTIR MINHA VAGA
            </button>
            <span style={{ fontSize: 14, fontWeight: 400, color: "#FFFFFF" }}>
              1º Lote por R$ 29,99
            </span>
          </div>
        </div>
      </div>

      {/* ── Responsivo mobile ── */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(.8); }
        }
        @media (max-width: 767px) {
          .hero-photo {
            position: relative !important;
            width: 100% !important;
            height: 240px !important;
          }
          .hero-photo > div { display: none !important; }
          .hero-ecg-deco { display: none !important; }
          .hero-content {
            padding: 36px 0 52px !important;
            max-width: 100% !important;
            text-align: center;
          }
          .hero-headline { line-height: 1.2 !important; }
          .hero-subtitle { max-width: 100% !important; margin-left: auto; margin-right: auto; }
          .hero-cta-row { flex-direction: column !important; align-items: center !important; gap: 12px !important; }
          .hero-cta-row .btn-cta { width: 100% !important; max-width: 360px !important; }
        }
      `}</style>
    </section>
  );
}
