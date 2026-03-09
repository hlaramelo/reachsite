import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM } from "@/lib/constants";

export default function TeamPreview() {
  const leaders = TEAM.slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-lime" />
              <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
                Liderança
              </span>
              <div className="w-12 h-px bg-lime" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-900 font-bold mb-4">
              Nossa Equipe
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Profissionais com décadas de experiência em gestão de ativos,
              mercados financeiros e setor público.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {leaders.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-navy-700/10 flex items-center justify-center mx-auto mb-4 border-2 border-lime/20">
                  <span className="text-navy-700/40 font-bold text-2xl">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg text-navy-900 font-bold mb-0.5">
                  {member.name}
                  {member.credentials && (
                    <span className="text-gray-400 font-normal text-sm">
                      , {member.credentials}
                    </span>
                  )}
                </h3>
                <p className="text-lime text-xs tracking-wider uppercase font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs">{member.background}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/equipe"
              className="inline-flex items-center gap-2 text-navy-900 text-sm tracking-wider uppercase font-bold hover:text-lime transition-colors duration-200 group"
            >
              Conheça a equipe completa
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
