import { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato | Reach Capital",
  description:
    "Entre em contato com a Reach Capital. São Paulo, SP.",
};

export default function ContatoPage() {
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
              Contato
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl">
            Estamos à disposição para tirar suas dúvidas e apresentar nossas
            estratégias de investimento.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info Cards */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl text-navy-900 font-bold mb-8">
                  Informações
                </h2>
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={100}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-bold mb-1">
                        Endereço
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {COMPANY.address}
                        <br />
                        CEP {COMPANY.cep}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-bold mb-1">
                        Telefone
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {COMPANY.phone}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-bold mb-1">E-mail</h3>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-lime text-sm hover:underline"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 00-6.364-6.364L4.5 8.257" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy-900 font-bold mb-2">
                        Redes Sociais
                      </h3>
                      <div className="flex gap-4">
                        <a
                          href={COMPANY.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 text-sm hover:text-lime transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href={COMPANY.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 text-sm hover:text-lime transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Map placeholder */}
            <ScrollReveal delay={200}>
              <div className="bg-cream rounded-lg overflow-hidden h-full min-h-[400px] flex items-center justify-center border border-gray-100">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-navy-700/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-navy-900 font-bold text-lg mb-2">
                    Itaim Bibi, São Paulo
                  </p>
                  <p className="text-gray-400 text-sm">
                    {COMPANY.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      COMPANY.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-lime text-sm font-semibold hover:underline"
                  >
                    Ver no Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
