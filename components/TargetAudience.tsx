/* Seção 6 — Para quem é */

const targets = [
  "✅ É enfermeiro e ainda trava diante do ECG",
  "✅ Quer ter segurança para interpretar traçados no plantão",
  "✅ Trabalha ou quer trabalhar em UTI, emergência ou cardiologia",
  "✅ Quer tomar decisões com autonomia, sem depender de médico ou colega",
  "✅ É acadêmico de enfermagem e quer sair na frente",
];

export default function TargetAudience() {
  return (
    <section
      aria-label="Público do curso"
      style={{
        padding: "80px 5%",
        background: "#2D0505",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.25rem)",
            fontWeight: 400,
            color: "rgba(246,227,206,0.95)",
            marginBottom: 36,
            lineHeight: 1.3,
          }}
        >
          Essa aula é{" "}
          <strong style={{ fontWeight: 600 }}>pra você</strong> se:
        </h2>

        {/* Lista simples */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 720,
            marginBottom: 32,
          }}
        >
          {targets.map((item) => (
            <li
              key={item}
              style={{
                padding: "16px 20px",
                background: "rgba(61,10,10,0.8)",
                borderRadius: 12,
                fontSize: 18,
                fontWeight: 600,
                color: "rgba(246,227,206,0.88)",
                border: "1px solid rgba(246,227,206,0.07)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Divisor + nota negativa */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "rgba(246,227,206,0.15)",
            borderRadius: 100,
            marginBottom: 20,
          }}
        />
        <p
          style={{
            fontSize: 16,
            color: "rgba(246,227,206,0.4)",
            fontStyle: "italic",
            maxWidth: 600,
          }}
        >
          Não é pra você se só quer mais um certificado pra colocar no currículo sem aplicar na prática.
        </p>
      </div>
    </section>
  );
}
