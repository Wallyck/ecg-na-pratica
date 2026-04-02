/* Instructor — fundo vinho (#470600) + dot-pattern-dark, Neo-Brutalist */

const paragraphs = [
  "O Prof. Raphael Marinho é enfermeiro especialista em Terapia Intensiva (AMIB/ABENTI) e Emergência (COBEEM), Fellow premiado da Sociedade Brasileira de Medicina de Emergência e coautor da resolução que liberou o enfermeiro a manejar ventilação mecânica no Brasil.",
  "Com 15 anos de experiência na linha de frente – hoje no Hospital Universitário do Maranhão – ele transformou o conhecimento que salvou incontáveis vidas em um método didático, direto ao ponto e ancorado nas melhores evidências científicas.",
  "Raphael já percorreu 23 dos 26 estados brasileiros com cursos e palestras, liderou lives que figuraram entre as mais assistidas do mundo durante a pandemia e, em 2019, fundou a NurseFlix, plataforma que já formou mais de 40.000 profissionais em 17 países.",
  "Seu propósito é claro: resgatar a vocação dos heróis da Enfermagem, devolvendo-lhes confiança clínica, autonomia nas decisões e o reconhecimento que sempre mereceram.",
];

export default function Instructor() {
  return (
    <section className="bg-wine dot-pattern-dark border-b-2 border-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — texto */}
          <div className="flex-1">
            <div className="inline-flex items-center border-2 border-cream/40 rounded-full px-4 h-8 mb-6 shadow-[4px_4px_0px_0px_rgba(246,227,206,0.2)]"
              style={{ background: "rgba(246,227,206,0.08)" }}>
              <span className="font-body font-[700] text-xs uppercase tracking-widest text-cream/70">
                Prof. Raphael Marinho
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter text-white leading-tight mb-8">
              Conheça seu{" "}
              <span className="text-stroke-cream">Professor</span>
            </h2>

            <div className="flex flex-col gap-5">
              {paragraphs.map((p) => (
                <p
                  key={p.slice(0, 20)}
                  className="font-body font-[500] text-base text-white/75 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right — foto */}
          <div
            className="inst-photo border-2 border-cream/60 rounded-[0.75rem] overflow-hidden flex-shrink-0 shadow-[8px_8px_0px_0px_#F6E3CE] relative"
            style={{ width: 380, height: 560 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rapha.webp"
              alt="Prof. Raphael Marinho"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% top", display: "block" }}
            />
            <div aria-hidden style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "30%",
              background: "linear-gradient(180deg, rgba(71,6,0,0) 0%, #470600 100%)",
              pointerEvents: "none",
            }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .inst-photo { width: 100% !important; height: 380px !important; }
        }
      `}</style>
    </section>
  );
}
