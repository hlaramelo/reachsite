import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { INVESTMENT_PROCESS, DECISION_PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Processo de Investimento | Reach Capital",
  description:
    "Conheça o processo de investimento da Reach Capital: filtro, pesquisa, investment memo e comitê de investimentos.",
};

export default function ProcessoPage() {
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
              Processo
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Processo de Investimento
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            Um processo rigoroso e disciplinado, com 4 etapas sequenciais que
            garantem profundidade analítica e decisões colegiadas.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {INVESTMENT_PROCESS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 150}>
                <div className="flex gap-8 mb-16 last:mb-0">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center">
                      <span className="text-navy-900 font-bold text-xl">
                        {step.step}
                      </span>
                    </div>
                    {i < INVESTMENT_PROCESS.length - 1 && (
                      <div className="w-px flex-1 bg-lime/30 mt-4" />
                    )}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Pillars */}
      <section className="section-padding bg-navy-700">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                5 Pilares de Decisão
              </h2>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                Cada decisão de investimento é avaliada sob cinco dimensões
                complementares.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {DECISION_PILLARS.map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-start gap-4 p-6 border border-white/10 rounded-lg hover:border-lime/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-lime font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {pillar}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Numbers */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-12 text-center">
              Research em Números (2025)
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "960", label: "Visitas a empresas" },
              { value: "142", label: "Reuniões presenciais" },
              { value: "227", label: "Conferências" },
              { value: "275", label: "Reuniões virtuais" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div>
                  <p className="text-lime text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
