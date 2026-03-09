import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Invista com a{" "}
              <span className="text-lime">Reach Capital</span>
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Conheça nossas estratégias e descubra como podemos ajudá-lo a
              alcançar seus objetivos de investimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-lime text-navy-900 text-sm tracking-wider uppercase font-bold hover:bg-lime-light transition-colors duration-200"
              >
                Fale com um especialista
              </Link>
              <Link
                href="/estrategias"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm tracking-wider uppercase font-medium hover:border-lime hover:text-lime transition-colors duration-200"
              >
                Conheça as estratégias
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
