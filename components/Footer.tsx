import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a0303",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2.5rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Image
          src="/images/LOGO-02.svg"
          alt="ECG na Prática"
          width={120}
          height={40}
          style={{ height: "36px", width: "auto", opacity: 0.8 }}
        />

        {/* Copyright */}
        <p
          style={{
            color: "#7a5555",
            fontSize: "0.8rem",
          }}
        >
          © 2025 ECG na Prática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
