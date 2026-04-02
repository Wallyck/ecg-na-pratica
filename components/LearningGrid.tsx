/* LearningGrid — fundo amarelo (#ffe17c) + dot-pattern, Neo-Brutalist */

const topics = [
  { text: "Leitura sistemática do ECG — um método que você aplica em qualquer traçado, sem se perder", primary: true },
  { text: "Análise do ritmo — identificar com segurança o que está acontecendo no coração do paciente" },
  { text: "Reconhecimento das principais arritmias — as que você vai encontrar na UTI, emergência e clínica" },
  { text: "Raciocínio clínico integrado — correlacionar o ECG com o quadro do paciente de forma prática" },
  { text: "Condutas de enfermagem — o que fazer com o que você interpretou" },
  { text: "Alterações críticas — o que exige ação imediata e como você age nisso" },
];

export default function LearningGrid() {
  return (
    <section className="bg-yellow dot-pattern border-b-2 border-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="lg:w-[440px] flex-shrink-0">
            <p className="font-body font-[700] text-xs uppercase tracking-widest text-black/40 mb-4">
              O conteúdo
            </p>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter text-black leading-tight mb-6">
              O que você vai{" "}
              <span className="text-stroke-black">dominar</span>
              {" "}nesse dia:
            </h2>
            <p className="font-body font-[500] text-base text-black/70 leading-relaxed">
              6 pilares de conhecimento aplicado, do básico ao avançado, em uma
              única imersão de 8 horas.
            </p>
          </div>

          {/* Right — grid 2 colunas */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topics.map(({ text, primary }) => (
              <div
                key={text}
                className={`border-2 border-black rounded-[0.75rem] p-5 flex flex-col gap-4 transition-transform hover:-translate-y-0.5 ${
                  primary
                    ? "bg-primary shadow-hard col-span-1 sm:col-span-2"
                    : "bg-crimson shadow-hard-sm"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Check.svg" alt="" width={32} height={32} style={{ width: 32, height: 32, flexShrink: 0 }} />
                <p className="font-body font-[500] text-base text-white leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
