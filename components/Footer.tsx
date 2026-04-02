import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 5%",
        background: "#2D0505",
        borderTop: "1px solid rgba(246,227,206,0.06)",
        textAlign: "center",
      }}
    >
      <Image
        src="/images/LOGO-02.svg"
        alt="ECG na Prática"
        width={120}
        height={40}
        style={{ height: 36, width: "auto", margin: "0 auto 12px", opacity: 0.65 }}
      />
      <p style={{ fontSize: 14, color: "rgba(246,227,206,0.45)" }}>
        © 2025 ECG na Prática. Todos os direitos reservados.
      </p>
    </footer>
  );
}
