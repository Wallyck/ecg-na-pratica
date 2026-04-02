"use client";

import Image from "next/image";

/*
 * Hero — Dobra 1
 * Desktop: coluna de texto à esquerda (left: 390px, width: 529px),
 *          imagem do Raphael à direita (absoluta, left: 744px, top: -56px).
 * Mobile:  bloco de imagem 193px no topo + logo + conteúdo centralizado abaixo.
 */
export default function Hero() {
  const scrollToGarantir = () =>
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ── Estilos de responsividade ── */}
      <style>{`
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.5; transform:scale(.8); }
        }

        /* ── Desktop ── */
        .hero-section {
          position: relative;
          min-height: 782px;
          overflow: hidden;
          background: linear-gradient(84.46deg, #470600 16.6%, #7E0001 104.11%);
          border-bottom: 5px solid #F6E3CE;
        }

        /* Coluna de texto: absoluta, left 390px */
        .hero-text-col {
          position: absolute;
          left: 390px;
          top: 0;
          width: 529px;
          display: flex;
          flex-direction: column;
          gap: 0;
          z-index: 2;
        }

        /* Menu (logo) */
        .hero-menu {
          height: 103px;
          display: flex;
          align-items: center;
        }

        /* Itens abaixo do menu com gap 57px entre eles */
        .hero-body {
          display: flex;
          flex-direction: column;
          gap: 57px;
          padding-bottom: 57px;
        }

        /* Imagem: absoluta, fora do fluxo */
        .hero-img-wrap {
          position: absolute;
          left: 744px;
          top: -56px;
          width: 990px;
          height: 1486px;
          z-index: 1;
        }
        .hero-img-wrap picture,
        .hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        /* Bloco mobile de imagem — oculto no desktop */
        .hero-mobile-top { display: none; }

        /* ── Mobile / Tablet ── */
        @media (max-width: 768px) {
          .hero-section {
            background: linear-gradient(183deg, #470600 25%, #7E0001 116%);
            min-height: unset;
          }
          .hero-text-col {
            position: static;
            width: 100%;
            left: unset;
            padding: 28px 24px 52px;
            text-align: center;
            align-items: center;
          }
          .hero-menu { display: none; }
          .hero-body { gap: 32px; width: 100%; align-items: center; }

          .hero-img-wrap { display: none; }

          .hero-mobile-top {
            display: flex;
            position: relative;
            height: 193px;
            overflow: hidden;
            align-items: center;
          }
          .hero-mobile-logo {
            position: absolute;
            left: 48px;
            z-index: 2;
          }
          .hero-mobile-photo {
            position: absolute;
            right: 0;
            top: 0;
            width: 65%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
          }

          .hero-title    { font-size: 36px !important; line-height: 1.2 !important; text-align: center; }
          .hero-subtitle { font-size: 18px !important; text-align: center; max-width: 100% !important; }
          .hero-cta-btn  { width: 100% !important; max-width: 363px !important; }
          .hero-price    { font-size: 18px !important; text-align: center; }
        }

        /* ── Ajuste intermediate (1024–1200px) ── */
        @media (min-width: 769px) and (max-width: 1280px) {
          .hero-text-col { left: clamp(40px, 27vw, 390px); width: clamp(300px, 40vw, 529px); }
          .hero-img-wrap { left: clamp(500px, 52vw, 744px); }
        }
      `}</style>

      <section className="hero-section" aria-label="Apresentação do curso">

        {/* ── Mobile: bloco topo com imagem + logo ── */}
        <div className="hero-mobile-top" aria-hidden="true">
          {/* Gradiente sobre a imagem */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, #470600 30%, transparent 60%)",
            pointerEvents: "none",
          }} />
          {/* Logo mobile */}
          <div className="hero-mobile-logo" style={{ zIndex: 2 }}>
            <Image
              src="/images/LOGO-01.svg"
              alt="ECG na Prática"
              width={122}
              height={50}
              priority
              style={{ height: 50, width: "auto" }}
            />
          </div>
          {/* Foto mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/IMAGE-MOBILE.png"
            alt=""
            className="hero-mobile-photo"
          />
        </div>

        {/* ── Coluna de texto ── */}
        <div className="hero-text-col">

          {/* Menu — logo (desktop) */}
          <div className="hero-menu">
            <Image
              src="/images/LOGO-01.svg"
              alt="ECG na Prática"
              width={77}
              height={64}
              priority
              style={{ width: 77, height: 64 }}
            />
          </div>

          {/* Corpo: tag + título + subtítulo + CTA */}
          <div className="hero-body">

            {/* Tag pill com ponto pulsante */}
            <div style={{
              width: 380,
              maxWidth: "100%",
              height: 36,
              background: "rgba(246,227,206,0.12)",
              border: "1px solid rgba(246,227,206,0.25)",
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 16px",
              flexShrink: 0,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#FF6B6B", flexShrink: 0,
                animation: "pulse-dot 1.8s ease-in-out infinite",
              }} />
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 600,
                color: "#F6E3CE",
                textTransform: "uppercase",
                letterSpacing: "0.918px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                AULA AO VIVO | SÁBADO, 02 DE MAIO | 8H ÀS 18H
              </span>
            </div>

            {/* Título */}
            <h1 className="hero-title" style={{
              fontFamily: "var(--font-inter)",
              fontSize: 50.7,
              lineHeight: "77px",
              margin: 0,
            }}>
              <span style={{ fontWeight: 600, color: "#F6E3CE" }}>
                Aprenda a interpretar qualquer ECG
              </span>
              <span style={{ fontWeight: 400, color: "#FFFFFF" }}>
                {" "}em um único dia de aula
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="hero-subtitle" style={{
              fontFamily: "var(--font-inter)",
              fontSize: 20,
              fontWeight: 400,
              lineHeight: "170%",
              color: "#FFFFFF",
              maxWidth: 480,
            }}>
              Em um dia de aula você vai saber interpretar qualquer traçado com
              segurança — e nunca mais depender de ninguém no plantão
            </p>

            {/* CTA + preço */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Botão CTA */}
              <button
                onClick={scrollToGarantir}
                className="hero-cta-btn"
                style={{
                  width: 363,
                  height: 70,
                  background: "#0AA988",
                  border: "3px solid rgba(255,255,255,0.33)",
                  borderRadius: 59,
                  fontFamily: "var(--font-inter)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  transition: "opacity 0.15s, transform 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "scale(1.01)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "scale(1)"; }}
              >
                QUERO GARANTIR MINHA VAGA
              </button>

              {/* Linha de preço: justify-between em 463px */}
              <div className="hero-price" style={{
                display: "flex",
                justifyContent: "space-between",
                width: 463,
                maxWidth: "100%",
                fontFamily: "var(--font-inter)",
                color: "#FFFFFF",
              }}>
                <span style={{ fontSize: 14, fontWeight: 400 }}>1º Lote por </span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>R$ 29,99</span>
              </div>
            </div>

          </div>{/* /hero-body */}
        </div>{/* /hero-text-col */}

        {/* ── Imagem do Raphael (desktop) ── */}
        <div className="hero-img-wrap" aria-hidden="true">
          <picture>
            <source media="(max-width: 480px)"  srcSet="/images/IMAGE-MOBILE.png" />
            <source media="(max-width: 768px)"  srcSet="/images/TABLET-CC.png" />
            <source media="(max-width: 1024px)" srcSet="/images/NOTEBOOK-CC.png" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/IMAGE-DOBRA1-DESKTOP.png" alt="" />
          </picture>

          {/* Vinheta inferior sobre a imagem */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 874,
            background: "linear-gradient(180deg, rgba(71,6,0,0) 67.22%, #470600 125.06%)",
            pointerEvents: "none",
            zIndex: 1,
          }} />
        </div>

      </section>
    </>
  );
}
