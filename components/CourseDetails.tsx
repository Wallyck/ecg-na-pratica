import { Calendar, Award, Clock } from "lucide-react";

/* CourseDetails — Dobra 3, fundo #470600 */
export default function CourseDetails() {
  return (
    <section style={{ background: "#470600", padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
        <div className="course-row" style={{
          display: "flex",
          gap: 125,
          alignItems: "center",
        }}>

          {/* Coluna esquerda — texto */}
          <div style={{ width: 477, flexShrink: 0 }} className="course-left">
            <h2 style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1.4rem, 2.5vw, 35px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: "52px",
              marginBottom: 24,
            }} className="course-h2">
              ECG na Prática é uma{" "}
              <span style={{ fontWeight: 600, color: "#FFF4E8" }}>Imersão ao vivo</span>
              , do zero ao avançado, em um único dia.
            </h2>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: 18,
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: "170%",
            }}>
              8 horas de imersão completa, com raciocínio clínico aplicado à
              realidade do enfermeiro no plantão.
            </p>
          </div>

          {/* Coluna direita — badges */}
          <div style={{ width: 391, flexShrink: 0, display: "flex", flexWrap: "wrap", gap: 7 }} className="course-right">

            {/* Badge largo — data */}
            <div className="card-h" style={{
              width: "100%",
              background: "#9D0E0F",
              boxShadow: "0px 4px 7.3px rgba(0,0,0,0.37)",
              borderLeft: "2px solid #F6E3CE",
              borderRadius: 6,
              padding: "25px 30px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}>
              <Calendar size={19} color="#F6E3CE" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
                Sábado, 02 de maio
              </span>
            </div>

            {/* Badge — certificado (201px) */}
            <div className="card-h" style={{
              width: 201,
              background: "#7E0001",
              borderLeft: "2px solid #F6E3CE",
              borderRadius: 6,
              padding: "25px 30px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}>
              <Award size={17} color="#F6E3CE" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
                Com certificado
              </span>
            </div>

            {/* Badge — horário (184px) */}
            <div className="card-h" style={{
              width: 184,
              background: "#7E0001",
              borderLeft: "2px solid #F6E3CE",
              borderRadius: 6,
              padding: "25px 30px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}>
              <Clock size={20} color="#F6E3CE" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 18, fontWeight: 400, color: "#FFFFFF", lineHeight: "170%" }}>
                Das 8h às 18h
              </span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .course-row   { flex-direction: column !important; gap: 48px !important; }
          .course-left  { width: 100% !important; }
          .course-right { width: 100% !important; }
          .course-right > div { width: 100% !important; }
          .course-h2    { line-height: 1.3 !important; }
        }
      `}</style>
    </section>
  );
}
