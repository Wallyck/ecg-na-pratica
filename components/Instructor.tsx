"use client";

/* Seção 5 — Autoridade / Professor */

const stats = [
  { value: "+470.000", label: "seguidores" },
  { value: "+42.000",  label: "alunos formados" },
  { value: "17",       label: "países" },
];

const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

export default function Instructor() {
  return (
    <section
      aria-label="Sobre o professor"
      style={{
        padding: "80px 5%",
        background: "#3D0A0A",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="auth-inner"
        >
          {/* Foto */}
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "3 / 4",
              background: "#2D0505",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rapha.webp"
              alt="Prof. Raphael Marinho"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "62% top",
                display: "block",
              }}
              onError={(e) => {
                // Fallback: esconde a imagem se não existir
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* Texto */}
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#7E1010",
                marginBottom: 10,
              }}
            >
              Quem vai te ensinar isso
            </p>

            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                fontWeight: 600,
                color: "rgba(246,227,206,0.95)",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Prof. Raphael Marinho
            </h2>

            <p
              style={{
                fontSize: 17,
                color: "rgba(246,227,206,0.65)",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              O Prof. Raphael Marinho é enfermeiro especialista em Terapia Intensiva
              (AMIB/ABENTI) e Emergência (COBEEM), Fellow premiado da Sociedade Brasileira
              de Medicina de Emergência e coautor da resolução que liberou o enfermeiro a
              manejar ventilação mecânica no Brasil. Com{" "}
              <strong style={{ color: "rgba(246,227,206,0.9)" }}>15 anos de experiência</strong>{" "}
              na linha de frente — hoje no Hospital Universitário do Maranhão — ele
              transformou o conhecimento que salvou incontáveis vidas em um método
              didático, direto ao ponto e ancorado nas melhores evidências científicas.
              Raphael já percorreu{" "}
              <strong style={{ color: "rgba(246,227,206,0.9)" }}>
                23 dos 26 estados brasileiros
              </strong>{" "}
              com cursos e palestras, liderou lives que figuraram entre as mais assistidas
              do mundo durante a pandemia e, em 2019, fundou a{" "}
              <strong style={{ color: "rgba(246,227,206,0.9)" }}>NurseFlix</strong>,
              plataforma que já formou mais de{" "}
              <strong style={{ color: "rgba(246,227,206,0.9)" }}>
                40.000 profissionais em 17 países
              </strong>
              .
            </p>

            {/* Stats cards */}
            <div style={{ display: "flex", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    padding: "16px 22px",
                    background: "#2D0505",
                    borderRadius: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    border: "1px solid rgba(246,227,206,0.08)",
                  }}
                >
                  <strong
                    style={{
                      fontSize: 26,
                      fontWeight: 600,
                      color: "rgba(246,227,206,0.95)",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </strong>
                  <span style={{ fontSize: 13, color: "rgba(246,227,206,0.5)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              style={{
                fontSize: 18,
                fontStyle: "italic",
                fontWeight: 600,
                color: "rgba(246,227,206,0.9)",
                padding: "20px 24px",
                borderLeft: "4px solid #7E1010",
                background: "rgba(45,5,5,0.5)",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <em>Raphael não ensina teoria. Ele ensina o que funciona no plantão.</em>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .auth-inner {
            grid-template-columns: 260px 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .auth-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
