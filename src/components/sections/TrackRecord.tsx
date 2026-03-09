import ScrollReveal from "@/components/ui/ScrollReveal";
import { TRACK_RECORD } from "@/lib/constants";

export default function TrackRecord() {
  return (
    <section className="section-padding bg-navy-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-lime" />
              <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
                Resultados
              </span>
              <div className="w-12 h-px bg-lime" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
              Track Record
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Resultados consistentes construídos com disciplina, convicção e uma
              equipe de excelência.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRACK_RECORD.map((item, index) => (
            <ScrollReveal key={item.fund} delay={index * 200}>
              <div className="text-center p-8 border border-white/10 hover:border-lime/30 transition-all duration-300 rounded-lg">
                <p className="text-lime font-bold text-5xl md:text-6xl mb-2">
                  {item.highlight}
                </p>
                <p className="text-white/40 text-sm mb-4">
                  vs {item.benchmark}
                </p>
                <p className="text-white text-lg font-semibold mb-2">
                  {item.fund}
                </p>
                <p className="text-white/50 text-sm">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
