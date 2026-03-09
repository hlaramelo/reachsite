import ScrollReveal from "@/components/ui/ScrollReveal";
import { PILLARS } from "@/lib/constants";

function PillarIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    shield:
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    globe:
      "M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 017.75 6H14.5a15.5 15.5 0 00-1.25-5.56A8 8 0 0112 4zm-1.25.44A13.5 13.5 0 009.5 10H4.25A8 8 0 0110.75 4.44zM4 12h5.5c0 1.8.2 3.5.5 5H4.25A8 8 0 014 12zm.25 7h5.25c.5 1.5 1.1 2.8 1.75 3.56A8 8 0 014.25 19zM12 22.9c-.9-1-2.5-3.2-3-5.9h6c-.5 2.7-2.1 4.9-3 5.9zm1.25-.34A13.5 13.5 0 0014.5 17h5.25a8 8 0 01-6.5 5.56zM20 15h-5.5c.3-1.5.5-3.2.5-5h5.75a8 8 0 01.25 5z",
    search:
      "M21 21l-5.2-5.2m0 0A7.5 7.5 0 105.2 5.2a7.5 7.5 0 0010.6 10.6z",
    team:
      "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  };

  return (
    <div className="w-14 h-14 rounded-lg bg-lime/10 flex items-center justify-center mb-6">
      <svg
        className="w-7 h-7 text-lime"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={paths[icon] || paths.shield} />
      </svg>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-lime" />
              <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
                Nossos Pilares
              </span>
              <div className="w-12 h-px bg-lime" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy-900 font-bold mb-4">
              O que nos diferencia
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Uma combinação única de independência, visão global, pesquisa
              profunda e alinhamento de interesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 150}>
              <div className="group p-8 border border-gray-100 hover:border-lime/30 transition-all duration-300 hover:shadow-lg rounded-lg">
                <PillarIcon icon={pillar.icon} />
                <h3 className="text-xl md:text-2xl text-navy-900 font-bold mb-3">
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
  );
}
