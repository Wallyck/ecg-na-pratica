import { CheckCircle2 } from "lucide-react";

const targets = [
  "É enfermeiro e ainda trava diante do ECG",
  "Quer ter segurança para interpretar traçados no plantão",
  "Trabalha ou quer trabalhar em UTI, emergência ou cardiologia",
  "Quer tomar decisões com autonomia, sem depender de médico ou colega",
  "É acadêmico de enfermagem e quer sair na frente",
];

export default function TargetAudience() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="container">
        {/* Título */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "2.5rem",
            textAlign: "center",
          }}
        >
          Essa aula é pra você se:
        </h2>

        {/* Grid de 5 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {targets.map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "var(--color-card)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              <CheckCircle2
                size={20}
                color="#00C853"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <p style={{ color: "#e0d0d0", lineHeight: 1.55, fontSize: "0.95rem" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
