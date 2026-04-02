"use client";

/* Pricing — fundo amarelo (#ffe17c) + dot-pattern, Neo-Brutalist, 2 lotes */
export default function Pricing() {
  const scrollToGarantir = () =>
    document.getElementById("garantir")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="garantir" className="bg-yellow dot-pattern border-b-2 border-black py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-body font-[700] text-xs uppercase tracking-widest text-black/40 mb-4">
            Inscrição
          </p>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tighter text-black leading-tight">
            <span className="text-stroke-black">Garanta sua vaga</span>
            {" "}antes que o lote vire
          </h2>
        </div>

        {/* Cards row */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">

          {/* ── Lote 1 — ativo ── */}
          <div className="border-2 border-black rounded-[0.75rem] overflow-hidden shadow-hard flex flex-col w-full sm:w-[392px]"
            style={{ background: "#7E0001" }}>

            {/* Header */}
            <div className="border-b-2 border-black/30 flex items-center justify-center h-16 flex-shrink-0">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-white">
                1º LOTE
              </span>
            </div>

            {/* Preço */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 py-10">
              <span className="font-body font-[500] text-white/80 text-lg">Por apenas</span>
              <span className="font-display font-extrabold text-yellow leading-none"
                style={{ fontSize: "clamp(2.5rem,5vw,72px)" }}>
                R$ 29,90
              </span>
              <span className="font-body font-[500] text-white/80 text-lg">à vista ou no cartão</span>
            </div>

            {/* CTA */}
            <div className="px-6 pb-8 flex justify-center">
              <button
                onClick={scrollToGarantir}
                className="btn-push w-full max-w-xs h-16 bg-cta border-2 border-black rounded-[0.75rem] shadow-hard font-body font-[700] uppercase tracking-wide text-white"
                style={{ fontSize: 16 }}
              >
                QUERO PARTICIPAR →
              </button>
            </div>
          </div>

          {/* ── Lote 2 — bloqueado ── */}
          <div
            aria-hidden="true"
            className="border-2 border-black rounded-[0.75rem] overflow-hidden flex flex-col w-full sm:w-[392px] opacity-50 pointer-events-none"
            style={{ background: "#f5f0e8" }}
          >
            {/* Header */}
            <div className="border-b-2 border-black/20 flex items-center justify-center h-16 flex-shrink-0">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-black/60">
                2º LOTE
              </span>
            </div>

            {/* Preço */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 py-10">
              <span className="font-body font-[500] text-black/50 text-lg">Por apenas</span>
              <span className="font-display font-extrabold text-black/60 leading-none"
                style={{ fontSize: "clamp(2.5rem,5vw,72px)" }}>
                R$ 39,90
              </span>
              <span className="font-body font-[500] text-black/50 text-lg">à vista ou no cartão</span>
            </div>

            {/* Botão desabilitado */}
            <div className="px-6 pb-8 flex justify-center">
              <button
                disabled
                className="w-full max-w-xs h-16 border-2 border-black/30 rounded-[0.75rem] font-body font-[700] uppercase tracking-wide text-black/40 cursor-not-allowed"
                style={{ fontSize: 16, background: "transparent" }}
              >
                PRÓXIMO LOTE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
