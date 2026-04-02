"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(45, 5, 5, 0.9)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(246,227,206,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
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

        <button
          onClick={() => {
            document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 42,
            padding: "0 20px",
            background: "#00C853",
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.04em",
            borderRadius: 59,
            border: "2px solid rgba(255,255,255,0.25)",
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          GARANTIR VAGA
        </button>
      </div>
    </header>
  );
}
