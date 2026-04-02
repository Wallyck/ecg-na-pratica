import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECG na Prática | Aprenda a Interpretar Qualquer ECG em Um Dia",
  description:
    "Imersão ao vivo para enfermeiros. Do zero ao avançado em 8 horas. Sábado, 02 de maio, das 8h às 18h. Com certificado.",
  openGraph: {
    title: "ECG na Prática | Aprenda a Interpretar Qualquer ECG em Um Dia",
    description:
      "Imersão ao vivo para enfermeiros. Do zero ao avançado em 8 horas. Sábado, 02 de maio, das 8h às 18h. Com certificado.",
    type: "website",
    locale: "pt_BR",
    siteName: "ECG na Prática",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  );
}
