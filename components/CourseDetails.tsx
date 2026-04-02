/* Seção 3 — Solução / Evento */

const cards = [
  { icon: "📅", label: "Sábado, 02 de maio" },
  { icon: "⏰", label: "Das 8h às 18h" },
  { icon: "💻", label: "Online e ao vivo" },
  { icon: "📄", label: "Com certificado" },
];

export default function CourseDetails() {
  return (
    <section
      aria-label="Sobre o evento"
      style={{
        padding: "80px 5%",
        background: "#2D0505",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
            fontWeight: 600,
            lineHeight: 1.25,
            color: "rgba(246,227,206,0.95)",
            marginBottom: 20,
            maxWidth: 720,
          }}
        >
          ECG na Prática é uma aula ao vivo,{" "}
          <em style={{ fontStyle: "italic" }}>do zero ao avançado,</em> em um único dia.
        </h2>

        <p
          style={{
            fontSize: 20,
            color: "rgba(246,227,206,0.7)",
            marginBottom: 48,
            maxWidth: 620,
            lineHeight: 1.65,
          }}
        >
          8 horas de imersão completa, com raciocínio clínico aplicado à realidade do
          enfermeiro no plantão.
        </p>

        {/* Grid 2×2 de cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            maxWidth: 860,
          }}
          className="event-grid"
        >
          {cards.map(({ icon, label }) => (
            <div
              key={label}
              style={{
                padding: "24px 20px",
                background: "rgba(246,227,206,0.06)",
                border: "1px solid rgba(246,227,206,0.12)",
                borderRadius: 16,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 26 }}>{icon}</span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "rgba(246,227,206,0.9)",
                  lineHeight: 1.4,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .event-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
