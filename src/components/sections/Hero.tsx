import Link from "next/link";
import { COMPANY, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with mountain overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600" />

      {/* Mountain silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 400" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 400L120 350L240 380L360 300L480 340L600 250L720 200L840 280L960 180L1080 240L1200 160L1320 220L1440 150V400H0Z" />
        </svg>
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-lime" />
            <span className="text-lime text-sm tracking-[0.3em] uppercase font-semibold">
              Gestora de Investimentos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.1] mb-6">
            Crescer é seguir{" "}
            <span className="text-lime">evoluindo</span> com{" "}
            <span className="text-lime">consistência</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            {COMPANY.about}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center px-8 py-4 bg-lime text-navy-900 text-sm tracking-wider uppercase font-bold hover:bg-lime-light transition-colors duration-200"
            >
              Conheça a Reach
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm tracking-wider uppercase font-medium hover:border-lime hover:text-lime transition-colors duration-200"
            >
              Fale conosco
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-white/10 pt-10 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-lime font-bold text-3xl md:text-4xl mb-1">
                  {stat.value}
                </p>
                <p className="text-white/40 text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
