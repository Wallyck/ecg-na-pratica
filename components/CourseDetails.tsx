import { Calendar, Award, Clock } from "lucide-react";

/* CourseDetails — fundo #470600, duas colunas */
export default function CourseDetails() {
  return (
    <section
      aria-label="Sobre o evento"
      style={{ background: "#470600", padding: "80px 0" }}
    >
      <div className="container">
        <div
          className="course-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "477px 391px",
            gap: 125,
            alignItems: "start",
            maxWidth: 1043,
            margin: "0 auto",
          }}
        >
          {/* Coluna esquerda — texto */}
          <div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 35px)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: "52px",
                marginBottom: 24,
              }}
              className="course-headline"
            >
              ECG na Prática é uma Imersão ao vivo, do zero ao avançado, em um único dia.
            </h2>
            <p style={{ fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
              8 horas de imersão completa, com raciocínio clínico aplicado à realidade do
              enfermeiro no plantão.
            </p>
          </div>

          {/* Coluna direita — 3 badges com border-left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {/* Badge largo — data */}
            <div
              style={{
                background: "#9D0E0F",
                borderLeft: "2px solid #F6E3CE",
                borderRadius: 6,
                padding: "25px 30px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                boxShadow: "0px 4px 7.3px rgba(0,0,0,0.37)",
              }}
            >
              <Calendar size={22} color="#F6E3CE" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
                Sábado, 02 de maio
              </span>
            </div>

            {/* Badge — certificado */}
            <div
              style={{
                background: "#7E0001",
                borderLeft: "2px solid #F6E3CE",
                borderRadius: 6,
                padding: "25px 30px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <Award size={22} color="#F6E3CE" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
                Com certificado
              </span>
            </div>

            {/* Badge — horário */}
            <div
              style={{
                background: "#7E0001",
                borderLeft: "2px solid #F6E3CE",
                borderRadius: 6,
                padding: "25px 30px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <Clock size={22} color="#F6E3CE" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
                Das 8h às 18h
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .course-grid { grid-template-columns: 1fr !important; gap: 48px !important; max-width: 560px !important; }
          .course-headline { line-height: 1.3 !important; }
        }
      `}</style>
    </section>
  );
}
