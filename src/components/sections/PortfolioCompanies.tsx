import ScrollReveal from "@/components/ui/ScrollReveal";
import { PORTFOLIO_COMPANIES } from "@/lib/constants";

export default function PortfolioCompanies() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-gray-400 text-sm tracking-wider uppercase font-semibold mb-2">
              Empresas já investidas
            </p>
            <h3 className="text-xl text-navy-900 font-bold">
              Histórico de Portfólio
            </h3>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {PORTFOLIO_COMPANIES.map((company) => (
              <span
                key={company}
                className="px-4 py-2 bg-cream text-navy-700 text-sm font-medium rounded-full border border-gray-100 hover:border-lime/40 hover:bg-lime/5 transition-all duration-200"
              >
                {company}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
