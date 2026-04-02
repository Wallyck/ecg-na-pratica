/* Instructor — Dobra 8, fundo #470600 */

const paragraphs = [
  "O Prof. Raphael Marinho é enfermeiro especialista em Terapia Intensiva (AMIB/ABENTI) e Emergência (COBEEM), Fellow premiado da Sociedade Brasileira de Medicina de Emergência e coautor da resolução que liberou o enfermeiro a manejar ventilação mecânica no Brasil.",
  "Com 15 anos de experiência na linha de frente – hoje no Hospital Universitário do Maranhão – ele transformou o conhecimento que salvou incontáveis vidas em um método didático, direto ao ponto e ancorado nas melhores evidências científicas.",
  "Raphael já percorreu 23 dos 26 estados brasileiros com cursos e palestras, liderou lives que figuraram entre as mais assistidas do mundo durante a pandemia e, em 2019, fundou a NurseFlix, plataforma que já formou mais de 40.000 profissionais em 17 países.",
  "Seu propósito é claro: resgatar a vocação dos heróis da Enfermagem, devolvendo-lhes confiança clínica, autonomia nas decisões e o reconhecimento que sempre mereceram.",
];

export default function Instructor() {
  return (
    <section style={{ background: "#470600", padding: "80px 0" }}>
      <div style={{ maxWidth: 1163, margin: "0 auto", padding: "0 5%" }}>
        <div className="inst-row" style={{
          display: "flex",
          gap: 130,
          alignItems: "center",
        }}>

          {/* ── Coluna esquerda — texto ── */}
          <div style={{ width: 523, flexShrink: 0 }} className="inst-left">

            {/* Badge pill */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              width: 179,
              height: 29,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 96,
              justifyContent: "center",
              marginBottom: 20,
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#FFFFFF" }}>
                Prof. Raphael Marinho
              </span>
            </div>

            {/* Título */}
            <h2 style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1.4rem, 2.5vw, 35px)",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: "146%",
              marginBottom: 32,
            }}>
              Conheça seu{" "}
              <span style={{ color: "#F6E3CE" }}>Professor</span>
            </h2>

            {/* 4 parágrafos */}
            <div style={{ display: "flex", flexDirection: "column", gap: 23 }}>
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 20)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#FFFFFF",
                    lineHeight: "32px",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* ── Coluna direita — foto ── */}
          <div
            className="inst-photo"
            style={{
              width: 510,
              height: 775,
              flexShrink: 0,
              background: "linear-gradient(194.99deg, #F6E3CE -75.26%, #C3AD8A 89.44%)",
              border: "1px solid #FFFFFF",
              borderRadius: 20,
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
            {/* Vinheta base */}
            <div aria-hidden style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "35%",
              background: "linear-gradient(180deg, rgba(52,45,34,0) 64.89%, #342D22 115.74%)",
              pointerEvents: "none",
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .inst-row   { gap: 60px !important; }
          .inst-left  { width: 100% !important; flex: 1; }
          .inst-photo { width: 340px !important; height: 520px !important; }
        }
        @media (max-width: 768px) {
          .inst-row   { flex-direction: column !important; gap: 40px !important; }
          .inst-left  { width: 100% !important; }
          .inst-photo { width: 100% !important; height: 420px !important; }
        }
      `}</style>
    </section>
  );
}
