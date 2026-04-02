"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(45, 5, 5, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.25rem",
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
            style={{ height: "40px", width: "auto" }}
          />
        </a>

        {/* CTA botão */}
        <button
          className="btn-cta"
          onClick={() => {}}
          style={{ fontSize: "0.85rem", padding: "0.65rem 1.25rem" }}
        >
          GARANTIR VAGA
        </button>
      </div>
    </header>
  );
}
