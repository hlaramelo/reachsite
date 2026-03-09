import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Equipe | Reach Capital",
  description:
    "Conheça a equipe de gestão da Reach Capital: profissionais com passagem por Credit Suisse, Goldman Sachs, Gávea, Harvard e mais.",
};

export default function EquipePage() {
  const leaders = TEAM.filter((m) => m.bio);
  const teamMembers = TEAM.filter((m) => !m.bio);

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
              Equipe
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Nossa Equipe
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            Profissionais com décadas de experiência em gestão de ativos,
            investment banking, setor público e academia.
          </p>
        </div>
      </section>

      {/* Leaders */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-12 text-center">
              Liderança
            </h2>
          </ScrollReveal>

          <div className="space-y-16 max-w-4xl mx-auto">
            {leaders.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 200}>
                <div
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-navy-700/10 flex items-center justify-center shrink-0 border-4 border-lime/20">
                    <span className="text-navy-700/30 font-bold text-4xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">
                      {member.name}
                      {member.credentials && (
                        <span className="text-gray-400 font-normal text-lg">
                          , {member.credentials}
                        </span>
                      )}
                    </h3>
                    <p className="text-lime text-sm tracking-wider uppercase font-bold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {member.background}
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-12 text-center">
              Time de Gestão
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-navy-700/10 flex items-center justify-center mx-auto mb-3 border-2 border-lime/20">
                    <span className="text-navy-700/30 font-bold text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-navy-900 mb-0.5">
                    {member.name}
                    {member.credentials && (
                      <span className="text-gray-400 font-normal">
                        , {member.credentials}
                      </span>
                    )}
                  </h3>
                  <p className="text-lime text-xs tracking-wider uppercase font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs">{member.background}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
