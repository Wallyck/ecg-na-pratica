import Image from "next/image";

/* Footer — fundo #FFF4E8, border-top decorativa, altura 120px */
export default function Footer() {
  return (
    <footer style={{
      background: "#FFF4E8",
      borderTop: "2px solid rgba(71,6,0,0.17)",
      height: 120,
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{
        maxWidth: 1143,
        width: "100%",
        margin: "0 auto",
        padding: "0 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Image
          src="/images/LOGO-02.svg"
          alt="ECG na Prática"
          width={103}
          height={85}
          style={{ width: 103, height: 85 }}
        />

        {/* Copyright */}
        <p style={{
          fontFamily: "var(--font-inter)",
          fontSize: 13.1,
          fontWeight: 400,
          color: "#2D2D2D",
        }}>
          © 2025 ECG na Prática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
