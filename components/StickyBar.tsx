"use client";

import { useEffect, useState } from "react";

/* Barra CTA fixa no bottom — aparece após scroll, some quando oferta está visível */

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Checar se o usuário já fechou anteriormente
    if (typeof window !== "undefined" && localStorage.getItem("ecg-sticky-closed")) {
      setDismissed(true);
      return;
    }

    const offerSection = document.getElementById("garantir");

    const handleScroll = () => {
      if (dismissed) return;

      const scrollY = window.scrollY;
      const inView = offerSection
        ? (() => {
            const r = offerSection.getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
          })()
        : false;

      setVisible(scrollY > 400 && !inView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("ecg-sticky-closed", "1");
    }
  };

  const scrollToOffer = () => {
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });
  };

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Oferta especial"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "linear-gradient(90deg, #2D0505 0%, #5a0a0a 100%)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          borderTop: "2px solid rgba(246,227,206,0.15)",
        }}
        className="sticky-inner"
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(246,227,206,0.9)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
          }}
        >
          🔥 1º Lote — Menor preço
        </span>

        <span
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "rgba(246,227,206,0.95)",
            whiteSpace: "nowrap",
          }}
        >
          R$ <strong style={{ fontWeight: 600 }}>29,99</strong>
        </span>

        {/* Spacer */}
        <div style={{ flex: 1 }} className="sticky-spacer" />

        <button
          onClick={scrollToOffer}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 48,
            padding: "0 28px",
            background: "#00C853",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.04em",
            borderRadius: 59,
            border: "2px solid rgba(255,255,255,0.22)",
            whiteSpace: "nowrap",
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
          GARANTIR AGORA
        </button>

        <button
          onClick={handleClose}
          aria-label="Fechar"
          style={{
            background: "none",
            border: "none",
            color: "rgba(246,227,206,0.35)",
            fontSize: 18,
            cursor: "pointer",
            padding: "6px 8px",
            lineHeight: 1,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(246,227,206,0.9)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(246,227,206,0.35)")}
        >
          ✕
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sticky-inner {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center;
            padding: 16px 20px !important;
          }
          .sticky-spacer { display: none !important; }
        }
      `}</style>
    </div>
  );
}
