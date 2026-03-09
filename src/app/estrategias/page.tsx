import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FUNDS, DISCLAIMER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Estratégias | Reach Capital",
  description:
    "Conheça as 10 estratégias de investimento da Reach Capital: ações, renda fixa, crédito e previdência.",
};

const CATEGORIES = [
  { key: "renda-variavel", label: "Renda Variável" },
  { key: "renda-fixa", label: "Renda Fixa" },
  { key: "credito", label: "Crédito" },
  { key: "previdencia", label: "Previdência" },
];

export default function EstrategiasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1440 400" fill="white" className="absolute bottom-0 w-full">
            <path d="M0 400L120 350L240 380L360 300L480 340L600 250L720 200L840 280L960 180L1080 240L1200 160L1320 220L1440 150V400H0Z" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-lime" />
            <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
              Estratégias
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Nossos Fundos
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            10 estratégias complementares para diferentes perfis e objetivos de
            investimento. Da renda variável ao crédito estruturado.
          </p>
        </div>
      </section>

      {/* Funds by Category */}
      {CATEGORIES.map((category) => {
        const categoryFunds = FUNDS.filter(
          (f) => f.category === category.key
        );
        if (categoryFunds.length === 0) return null;

        return (
          <section
            key={category.key}
            className="section-padding even:bg-cream odd:bg-white"
          >
            <div className="container-custom">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-px bg-lime" />
                  <h2 className="text-2xl md:text-3xl text-navy-900 font-bold">
                    {category.label}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categoryFunds.map((fund, i) => (
                  <ScrollReveal key={fund.name} delay={i * 100}>
                    <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-lime text-xs tracking-wider uppercase font-bold mb-1">
                            {fund.subtitle}
                          </p>
                          <h3 className="text-xl font-bold text-navy-900">
                            {fund.name}
                          </h3>
                        </div>
                        {fund.return && (
                          <div className="text-right">
                            <p className="text-lime text-2xl font-bold">
                              {fund.return}
                            </p>
                            {fund.benchmarkReturn && (
                              <p className="text-gray-400 text-xs">
                                vs {fund.benchmarkReturn}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {fund.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm border-t border-gray-100 pt-4">
                        <div>
                          <p className="text-gray-400 text-xs mb-1">
                            Benchmark
                          </p>
                          <p className="text-navy-900 font-semibold">
                            {fund.benchmark}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">
                            Invest. Mínimo
                          </p>
                          <p className="text-navy-900 font-semibold">
                            {fund.minInvest}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">
                            Tx. Admin
                          </p>
                          <p className="text-navy-900 font-semibold">
                            {fund.txAdmin}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">
                            Tx. Performance
                          </p>
                          <p className="text-navy-900 font-semibold">
                            {fund.txPerf}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">
                            Cotização
                          </p>
                          <p className="text-navy-900 font-semibold">
                            {fund.cotizacao}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs mb-1">
                            Resgate
                          </p>
                          <p className="text-navy-900 font-semibold">
                            {fund.resgate}
                          </p>
                        </div>
                        {fund.aum && (
                          <div>
                            <p className="text-gray-400 text-xs mb-1">
                              Patrimônio
                            </p>
                            <p className="text-navy-900 font-semibold">
                              {fund.aum}
                            </p>
                          </div>
                        )}
                        {fund.since && (
                          <div>
                            <p className="text-gray-400 text-xs mb-1">
                              Início
                            </p>
                            <p className="text-navy-900 font-semibold">
                              {fund.since}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Disclaimer */}
      <section className="py-12 bg-navy-900">
        <div className="container-custom">
          <p className="text-white/30 text-xs leading-relaxed">{DISCLAIMER}</p>
        </div>
      </section>
    </>
  );
}
