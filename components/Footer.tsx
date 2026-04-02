import Image from "next/image";

/* Footer — fundo #FFF4E8, linha decorativa no topo */
export default function Footer() {
  return (
    <footer
      style={{
        background: "#FFF4E8",
        borderTop: "2px solid rgba(71,6,0,0.17)",
        height: 120,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1143,
        }}
      >
        {/* Logo */}
        <Image
          src="/images/LOGO-02.svg"
          alt="ECG na Prática"
          width={103}
          height={85}
          style={{ height: 85, width: "auto" }}
        />

        {/* Copyright */}
        <p style={{ fontSize: 13, fontWeight: 400, color: "#2D2D2D" }}>
          © 2025 ECG na Prática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
