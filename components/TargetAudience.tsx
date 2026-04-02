/* TargetAudience — Dobra 6, fundo #FFF4E8 */

const items = [
  { text: "É enfermeiro e ainda trava diante do ECG",                         primary: true },
  { text: "Quer ter segurança para interpretar traçados no plantão" },
  { text: "Trabalha ou quer trabalhar em UTI, emergência ou cardiologia" },
  { text: "Quer tomar decisões com autonomia, sem depender de médico ou colega" },
  { text: "É acadêmico de enfermagem e quer sair na frente" },
];

export default function TargetAudience() {
  return (
    <section style={{ background: "#FFF4E8", padding: "80px 0" }}>
      <div style={{
        maxWidth: 938,
        margin: "0 auto",
        padding: "10px 5%",
        display: "flex",
        flexDirection: "column",
        gap: 65,
      }}>

        {/* Título */}
        <h2 style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(1.4rem, 2.5vw, 35px)",
          fontWeight: 400,
          color: "#2D2D2D",
          textAlign: "center",
          lineHeight: 1.4,
        }}>
          Essa aula{" "}
          <span style={{ fontWeight: 600, color: "#7E0001" }}>é pra você</span>
          {" "}se:
        </h2>

        {/* 5 cards em flex-wrap, cada um 459px, último centralizado */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 15,
          justifyContent: "center",
        }}>
          {items.map(({ text, primary }) => (
            <div
              key={text}
              className="card-h"
              style={{
                width: 459,
                maxWidth: "100%",
                background: primary ? "#9D0E0F" : "#7E0001",
                boxShadow: primary ? "0px 4px 7.3px rgba(0,0,0,0.37)" : "none",
                borderRadius: 6,
                padding: "25px 30px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              {/* Ícone Check.svg 38×38 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Check.svg"
                alt=""
                width={38}
                height={38}
                style={{ width: 38, height: 38, flexShrink: 0 }}
              />
              <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: 18,
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: "170%",
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
