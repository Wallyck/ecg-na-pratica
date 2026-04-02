/* Instructor — fundo #470600, duas colunas */
export default function Instructor() {
  return (
    <section
      aria-label="Sobre o professor"
      style={{ background: "#470600", padding: "80px 0" }}
    >
      <div className="container">
        <div
          className="instructor-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "523px 510px",
            gap: 130,
            alignItems: "start",
            maxWidth: 1163,
            margin: "0 auto",
          }}
        >
          {/* ── Coluna esquerda: texto ── */}
          <div>
            {/* Badge pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 96,
                padding: "6px 16px",
                fontSize: 12,
                color: "#FFFFFF",
                marginBottom: 20,
              }}
            >
              Prof. Raphael Marinho
            </div>

            {/* Título */}
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 35px)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: "146%",
                marginBottom: 32,
              }}
            >
              Conheça seu Professor
            </h2>

            {/* 4 parágrafos */}
            {[
              "O Prof. Raphael Marinho é enfermeiro especialista em Terapia Intensiva (AMIB/ABENTI) e Emergência (COBEEM), Fellow premiado da Sociedade Brasileira de Medicina de Emergência e coautor da resolução que liberou o enfermeiro a manejar ventilação mecânica no Brasil.",
              "Com 15 anos de experiência na linha de frente – hoje no Hospital Universitário do Maranhão – ele transformou o conhecimento que salvou incontáveis vidas em um método didático, direto ao ponto e ancorado nas melhores evidências científicas.",
              "Raphael já percorreu 23 dos 26 estados brasileiros com cursos e palestras, liderou lives que figuraram entre as mais assistidas do mundo durante a pandemia e, em 2019, fundou a NurseFlix, plataforma que já formou mais de 40.000 profissionais em 17 países.",
              "Seu propósito é claro: resgatar a vocação dos heróis da Enfermagem, devolvendo-lhes confiança clínica, autonomia nas decisões e o reconhecimento que sempre mereceram.",
            ].map((p) => (
              <p
                key={p.slice(0, 30)}
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: "32px",
                  marginBottom: 20,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* ── Coluna direita: card com foto ── */}
          <div
            className="instructor-photo-card"
            style={{
              background: "linear-gradient(194.99deg, #F6E3CE -75.26%, #C3AD8A 89.44%)",
              border: "1px solid #FFFFFF",
              borderRadius: 20,
              width: 510,
              maxWidth: "100%",
              height: 775,
              overflow: "hidden",
              position: "relative",
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
            />
            {/* Vinheta inferior */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "35%",
                background: "linear-gradient(180deg, rgba(52,45,34,0) 0%, #342D22 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .instructor-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
            max-width: 960px !important;
          }
          .instructor-photo-card { width: 100% !important; height: 500px !important; }
        }
        @media (max-width: 768px) {
          .instructor-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .instructor-photo-card { height: 380px !important; }
        }
      `}</style>
    </section>
  );
}
