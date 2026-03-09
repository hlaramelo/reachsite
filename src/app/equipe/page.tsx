import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Equipe | Reach Capital",
  description:
    "Conheça a equipe de gestão da Reach Capital: profissionais com passagem por Credit Suisse, Goldman Sachs, Gávea, Harvard e mais.",
};

// Cores de gradiente únicas por membro para avatares
const AVATAR_GRADIENTS = [
  "from-navy-700 to-navy-900",
  "from-navy-600 to-navy-800",
  "from-lime-dark to-navy-700",
  "from-navy-800 to-navy-600",
  "from-navy-700 to-lime-dark",
  "from-navy-900 to-navy-700",
  "from-navy-600 to-navy-900",
  "from-lime-dark to-navy-800",
  "from-navy-800 to-navy-700",
  "from-navy-700 to-navy-600",
  "from-navy-900 to-lime-dark",
  "from-navy-600 to-navy-700",
];

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
                  {/* Avatar com gradiente e foto placeholder profissional */}
                  <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i]} flex items-center justify-center shrink-0 border-4 border-lime/20 shadow-xl relative overflow-hidden`}>
                    <span className="text-white/90 font-bold text-4xl tracking-wider">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    {/* Efeito decorativo */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
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
                    <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4 text-lime/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                      </svg>
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
            {teamMembers.map((member, i) => {
              const gradIdx = (i + leaders.length) % AVATAR_GRADIENTS.length;
              return (
                <ScrollReveal key={member.name} delay={i * 80}>
                  <div className="text-center group">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[gradIdx]} flex items-center justify-center mx-auto mb-3 border-3 border-lime/20 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
                      <span className="text-white/90 font-bold text-lg tracking-wider">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-navy-900 font-bold mb-4">
                Nossa Sede
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Escritório no coração do Itaim Bibi, São Paulo, projetado para
                colaboração e excelência em gestão de investimentos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { label: "Sala de Gestão", desc: "Ambiente integrado para tomada de decisões" },
              { label: "Sala de Reuniões", desc: "Encontros com empresas e investidores" },
              { label: "Lounge", desc: "Espaço para networking e eventos" },
            ].map((room, i) => (
              <ScrollReveal key={room.label} delay={i * 100}>
                <div className="group relative aspect-[4/3] bg-gradient-to-br from-navy-700/10 to-navy-900/10 rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  {/* Decorative office illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-navy-700/15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-900/80 to-transparent">
                    <p className="text-white font-bold text-sm">{room.label}</p>
                    <p className="text-white/60 text-xs">{room.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
