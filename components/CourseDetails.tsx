import { CalendarDays, Award, Clock } from "lucide-react";

const badges = [
  { icon: CalendarDays, label: "Sábado, 02 de maio" },
  { icon: Award, label: "Com certificado" },
  { icon: Clock, label: "Das 8h às 18h" },
];

export default function CourseDetails() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-card)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "4.5rem 0",
      }}
    >
      <div
        className="container"
        style={{ textAlign: "center" }}
      >
        {/* Texto principal */}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "1rem",
            maxWidth: "700px",
            margin: "0 auto 1rem",
            lineHeight: 1.2,
          }}
        >
          ECG na Prática é uma{" "}
          <span style={{ color: "#00C853" }}>Imersão ao vivo</span>, do zero ao
          avançado, em um único dia.
        </h2>

        {/* Subtexto */}
        <p
          style={{
            color: "#c9a0a0",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}
        >
          8 horas de imersão completa, com raciocínio clínico aplicado à
          realidade do enfermeiro no plantão.
        </p>

        {/* Badges/Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(0,200,83,0.08)",
                border: "1px solid rgba(0,200,83,0.25)",
                borderRadius: "999px",
                padding: "0.6rem 1.25rem",
                color: "#00C853",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              <Icon size={16} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
