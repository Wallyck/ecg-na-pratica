/* TargetAudience — fundo amarelo (#ffe17c) + dot-pattern, Neo-Brutalist */

const items = [
  { text: "É enfermeiro e ainda trava diante do ECG",                         primary: true },
  { text: "Quer ter segurança para interpretar traçados no plantão" },
  { text: "Trabalha ou quer trabalhar em UTI, emergência ou cardiologia" },
  { text: "Quer tomar decisões com autonomia, sem depender de médico ou colega" },
  { text: "É acadêmico de enfermagem e quer sair na frente" },
];

export default function TargetAudience() {
  return (
    <section className="bg-yellow dot-pattern border-b-2 border-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="lg:w-[440px] flex-shrink-0">
            <p className="font-body font-[700] text-xs uppercase tracking-widest text-black/40 mb-4">
              Para quem é
            </p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter text-black leading-tight mb-6">
              Essa aula{" "}
              <span className="text-stroke-black">é pra você</span>
              {" "}se:
            </h2>
            <p className="font-body font-[500] text-base text-black/70 leading-relaxed">
              Se você se encaixa em qualquer um desses perfis, você está no
              lugar certo.
            </p>
          </div>

          {/* Right — 5 cards empilhados */}
          <div className="flex-1 flex flex-col gap-3">
            {items.map(({ text, primary }) => (
              <div
                key={text}
                className={`border-2 border-black rounded-[0.75rem] px-6 py-4 flex items-center gap-4 font-body font-[500] text-base text-white leading-relaxed transition-transform hover:-translate-y-0.5 ${
                  primary
                    ? "bg-primary shadow-hard"
                    : "bg-crimson shadow-hard-sm"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Check.svg" alt="" width={28} height={28} style={{ width: 28, height: 28, flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
