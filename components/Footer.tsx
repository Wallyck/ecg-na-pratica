import Image from "next/image";

/* Footer — fundo vinho (#470600), border-top cream, Neo-Brutalist */
export default function Footer() {
  return (
    <footer className="bg-wine border-t-2 border-cream/30" style={{ minHeight: 100 }}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <Image
          src="/images/LOGO-01.svg"
          alt="ECG na Prática"
          width={100}
          height={42}
          style={{ width: 100, height: "auto" }}
        />

        {/* Copyright */}
        <p className="font-body font-[500] text-sm text-cream/50 text-center">
          © 2025 ECG na Prática. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
