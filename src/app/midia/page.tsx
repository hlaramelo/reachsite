import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MEDIA_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mídia | Reach Capital",
  description:
    "Cartas do gestor, artigos, lives e aparições na imprensa da Reach Capital.",
};

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    "Carta do Gestor": "bg-navy-700/10 text-navy-700",
    Live: "bg-red-50 text-red-600",
    Artigo: "bg-lime/10 text-lime-dark",
    Imprensa: "bg-blue-50 text-blue-600",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
        colors[tag] || "bg-gray-100 text-gray-600"
      }`}
    >
      {tag}
    </span>
  );
}

function TypeIcon({ type }: { type: string }) {
  if (type === "video") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    );
  }
  if (type === "carta") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>
  );
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function MidiaPage() {
  const cartas = MEDIA_CONTENT.filter((m) => m.type === "carta");
  const videos = MEDIA_CONTENT.filter((m) => m.type === "video");
  const artigos = MEDIA_CONTENT.filter(
    (m) => m.type === "artigo"
  );

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
              Mídia
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Conteúdo & Mídia
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            Cartas do gestor, análises, lives e aparições na imprensa.
            Acompanhe nossa visão de mercado.
          </p>
        </div>
      </section>

      {/* Cartas do Gestor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-lime" />
              <h2 className="text-2xl md:text-3xl text-navy-900 font-bold">
                Cartas do Gestor
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartas.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-lime/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <TagBadge tag={item.tag} />
                    <div className="text-navy-700/40">
                      <TypeIcon type={item.type} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <p className="text-gray-400 text-xs">{formatDate(item.date)}</p>
                    <span className="text-lime text-xs font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Ler
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Videos & Lives */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-lime" />
              <h2 className="text-2xl md:text-3xl text-navy-900 font-bold">
                Vídeos & Lives
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                  {/* Video placeholder */}
                  <div className="aspect-video bg-navy-900/5 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center group-hover:bg-lime/30 transition-colors">
                      <svg className="w-8 h-8 text-lime ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>
                    </div>
                    <TagBadge tag={item.tag} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-xs">{formatDate(item.date)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos & Imprensa */}
      {artigos.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-px bg-lime" />
                <h2 className="text-2xl md:text-3xl text-navy-900 font-bold">
                  Artigos & Análises
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artigos.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="group border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-lime/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <TagBadge tag={item.tag} />
                      <div className="text-navy-700/40">
                        <TypeIcon type={item.type} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <p className="text-gray-400 text-xs">{formatDate(item.date)}</p>
                      <span className="text-lime text-xs font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Ler
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy-700">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Receba nosso conteúdo
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Cadastre-se para receber as cartas do gestor, análises de mercado
              e convites para nossas lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime/30"
              />
              <button className="px-6 py-3 bg-lime text-navy-900 text-sm font-bold tracking-wider uppercase rounded-lg hover:bg-lime-light transition-colors whitespace-nowrap">
                Cadastrar
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
