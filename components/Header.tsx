"use client";

import Image from "next/image";

/* Header sticky — fundo #470600, logo à esquerda, CTA à direita */
export default function Header() {
  const scrollToOffer = () =>
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#470600",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo clicável */}
        <a href="#" aria-label="ECG na Prática — início">
          <Image
            src="/images/LOGO-01.svg"
            alt="ECG na Prática"
            width={140}
            height={48}
            priority
            style={{ height: 40, width: "auto" }}
          />
        </a>

        {/* Botão CTA */}
        <button
          className="btn-cta"
          onClick={scrollToOffer}
          style={{ height: 42, padding: "0 20px", fontSize: 13 }}
        >
          GARANTIR VAGA
        </button>
      </div>
    </header>
  );
}
