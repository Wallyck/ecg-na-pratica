import Image from "next/image";

// blurDataURL genérico para fallback enquanto a imagem carrega
const BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

export default function Instructor() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="container">
        {/* Badge */}
        <p
          style={{
            textAlign: "center",
            color: "#00C853",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Seu Professor
        </p>

        {/* Título */}
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Conheça seu Professor
        </h2>

        {/* Layout foto + texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="instructor-layout"
        >
          {/* Foto */}
          <div
            style={{
              flexShrink: 0,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(0,200,83,0.3)",
              width: "200px",
              height: "200px",
              position: "relative",
            }}
          >
            <Image
              src="/images/rapha.webp"
              alt="Prof. Raphael Marinho"
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              unoptimized
            />
          </div>

          {/* Texto bio */}
          <div style={{ maxWidth: "720px" }}>
            <p
              style={{
                color: "#c9a0a0",
                lineHeight: 1.85,
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              O{" "}
              <strong style={{ color: "#fff" }}>Prof. Raphael Marinho</strong>{" "}
              é enfermeiro especialista em Terapia Intensiva (AMIB/ABENTI) e
              Emergência (COBEEM), Fellow premiado da Sociedade Brasileira de
              Medicina de Emergência e coautor da resolução que liberou o
              enfermeiro a manejar ventilação mecânica no Brasil. Com{" "}
              <strong style={{ color: "#fff" }}>15 anos de experiência</strong>{" "}
              na linha de frente — hoje no Hospital Universitário do Maranhão —
              ele transformou o conhecimento que salvou incontáveis vidas em um
              método didático, direto ao ponto e ancorado nas melhores
              evidências científicas.
            </p>
            <p
              style={{
                color: "#c9a0a0",
                lineHeight: 1.85,
                fontSize: "1rem",
                textAlign: "center",
                marginTop: "1.25rem",
              }}
            >
              Raphael já percorreu{" "}
              <strong style={{ color: "#fff" }}>
                23 dos 26 estados brasileiros
              </strong>{" "}
              com cursos e palestras, liderou lives que figuraram entre as mais
              assistidas do mundo durante a pandemia e, em 2019, fundou a{" "}
              <strong style={{ color: "#fff" }}>NurseFlix</strong>, plataforma
              que já formou mais de{" "}
              <strong style={{ color: "#fff" }}>
                40.000 profissionais em 17 países
              </strong>
              . Seu propósito é claro: resgatar a vocação dos heróis da
              Enfermagem, devolvendo-lhes confiança clínica, autonomia nas
              decisões e o reconhecimento que sempre mereceram.
            </p>
          </div>
        </div>
      </div>

      {/* Responsividade do layout foto+texto: em md+ fica lado a lado */}
      <style>{`
        @media (min-width: 768px) {
          .instructor-layout {
            flex-direction: row !important;
            align-items: flex-start !important;
          }
          .instructor-layout p {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
