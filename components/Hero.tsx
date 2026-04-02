"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "3rem 0 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          {/* Tag de evento */}
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(0, 200, 83, 0.15)",
              border: "1px solid rgba(0, 200, 83, 0.4)",
              color: "#00C853",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
            }}
          >
            Aula ao vivo &nbsp;|&nbsp; Sábado, 02 de maio &nbsp;|&nbsp; 8h às 18h
          </span>

          {/* Título principal */}
          <h1
            style={{
              fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "760px",
              color: "#fff",
            }}
          >
            Aprenda a interpretar{" "}
            <span style={{ color: "#00C853" }}>qualquer ECG</span> em um único
            dia de aula
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#c9a0a0",
              maxWidth: "600px",
              lineHeight: 1.7,
            }}
          >
            Em um dia de aula você vai saber interpretar qualquer traçado com
            segurança — e nunca mais depender de ninguém no plantão
          </p>

          {/* CTA + Badge */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <button
              className="btn-cta"
              onClick={() => {}}
              style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}
            >
              QUERO GARANTIR MINHA VAGA
            </button>

            {/* Badge de preço */}
            <span
              style={{
                backgroundColor: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(0,200,83,0.3)",
                borderRadius: "999px",
                padding: "0.35rem 1rem",
                fontSize: "0.85rem",
                color: "#00C853",
                fontWeight: 700,
              }}
            >
              1º Lote por R$ 29,99
            </span>
          </div>
        </div>

        {/* Imagem responsiva usando <picture> com breakpoints */}
        <div style={{ marginTop: "2.5rem", lineHeight: 0 }}>
          <picture>
            {/* Desktop lg+ */}
            <source
              media="(min-width: 1024px)"
              srcSet="/images/IMAGE-DOBRA1-DESKTOP.png"
            />
            {/* Notebook md */}
            <source
              media="(min-width: 768px)"
              srcSet="/images/NOTEBOOK-CC.png"
            />
            {/* Tablet sm */}
            <source
              media="(min-width: 480px)"
              srcSet="/images/TABLET-CC.png"
            />
            {/* Mobile base */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/IMAGE-MOBILE.png"
              alt="Imersão ECG na Prática — enfermeiro interpretando eletrocardiograma"
              style={{
                width: "100%",
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
