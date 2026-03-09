import Link from "next/link";
import { COMPANY, NAV_LINKS, DISCLAIMER, DISTRIBUTORS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Logo size="sm" color="white" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lime text-xs tracking-wider uppercase mb-4 font-bold">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-lime transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lime text-xs tracking-wider uppercase mb-4 font-bold">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-white/50 text-sm">
              <p>{COMPANY.address}</p>
              <p>{COMPANY.cep}</p>
              <p>{COMPANY.phone}</p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-lime transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lime text-xs tracking-wider uppercase mb-4 font-bold">
              Redes Sociais
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-lime transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-lime transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
            <h4 className="text-lime text-xs tracking-wider uppercase mb-2 font-bold">
              Distribuição
            </h4>
            <p className="text-white/30 text-xs leading-relaxed">
              {DISTRIBUTORS.join(" · ")}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-xs leading-relaxed mb-4">
            {DISCLAIMER}
          </p>
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
            reservados. ANBIMA certificada.
          </p>
        </div>
      </div>
    </footer>
  );
}
