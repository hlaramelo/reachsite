import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FUNDS } from "@/lib/constants";

export default function FundsPreview() {
  const featured = FUNDS.filter((f) => f.return).slice(0, 4);

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-lime" />
              <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
                Estratégias
              </span>
              <div className="w-12 h-px bg-lime" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-900 font-bold mb-4">
              Nossos Fundos
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              10 estratégias complementares para diferentes perfis e objetivos de
              investimento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featured.map((fund, index) => (
            <ScrollReveal key={fund.name} delay={index * 100}>
              <div className="bg-white p-6 h-full flex flex-col border border-gray-100 hover:shadow-lg transition-all duration-300 rounded-lg group">
                <p className="text-lime text-xs tracking-wider uppercase font-bold mb-1">
                  {fund.subtitle}
                </p>
                <h3 className="text-lg text-navy-900 font-bold mb-3">
                  {fund.name}
                </h3>
                {fund.return && (
                  <p className="text-lime text-3xl font-bold mb-1">
                    {fund.return}
                  </p>
                )}
                {fund.benchmarkReturn && (
                  <p className="text-gray-400 text-xs mb-4">
                    vs {fund.benchmarkReturn}
                  </p>
                )}
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                  {fund.description.substring(0, 120)}...
                </p>
                <div className="border-t border-gray-100 pt-3 mt-auto text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Benchmark</span>
                    <span className="text-navy-900 font-semibold">{fund.benchmark}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Desde</span>
                    <span className="text-navy-900 font-semibold">{fund.since}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/estrategias"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-700 text-white text-sm tracking-wider uppercase font-bold hover:bg-navy-600 transition-colors duration-200 rounded"
            >
              Ver todas as estratégias
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
