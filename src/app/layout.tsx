import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reach Capital | Gestora de Investimentos",
  description:
    "Gestora de recursos independente com R$ 3 bilhões sob gestão. Asset Management e Wealth Management. ANBIMA certificada.",
  keywords:
    "Reach Capital, gestora de investimentos, asset management, wealth management, fundos de investimento, ações, São Paulo",
  openGraph: {
    title: "Reach Capital | Gestora de Investimentos",
    description:
      "Gestora de recursos independente com R$ 3 bilhões sob gestão. Crescer é seguir evoluindo com consistência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body className={`${geistSans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
