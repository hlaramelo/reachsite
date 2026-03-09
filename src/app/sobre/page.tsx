import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY, TIMELINE, PILLARS, DISTRIBUTORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sobre | Reach Capital",
  description: "Conheça a história, pilares e diferenciais da Reach Capital.",
};

export default function SobrePage() {
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
              Sobre Nós
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Reach Capital
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            {COMPANY.about}
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-12 text-center">
              Nossos Pilares
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 100}>
                <div className="p-8 border border-gray-100 rounded-lg hover:border-lime/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center mb-4">
                    <div className="w-5 h-5 bg-lime rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-16 text-center">
              Nossa Trajetória
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 100}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-navy-700 flex items-center justify-center shrink-0">
                      <span className="text-lime font-bold text-sm">
                        {item.year}
                      </span>
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-navy-700/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-4">
                    <p className="text-navy-900 text-lg leading-relaxed">
                      {item.milestone}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 bg-navy-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: COMPANY.aum, label: "Sob Gestão" },
              { value: `${COMPANY.strategies}`, label: "Estratégias" },
              { value: `${COMPANY.employees}`, label: "Colaboradores" },
              { value: `${DISTRIBUTORS.length}`, label: "Distribuidores" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lime text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribuição */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4">
              Onde Investir
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
              Nossos fundos estão disponíveis nas principais plataformas de
              investimento do Brasil.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {DISTRIBUTORS.map((dist) => (
                <span
                  key={dist}
                  className="px-6 py-3 bg-cream text-navy-700 text-sm font-semibold rounded-lg border border-gray-100"
                >
                  {dist}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
