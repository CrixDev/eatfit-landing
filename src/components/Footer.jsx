import { Mail, MapPin } from "lucide-react";

const social = [
  {
    name: "Instagram",
    src: "/Instagram_logo_2016.svg.png",
    href: "https://instagram.com/eatfitapp",
  },
  {
    name: "TikTok",
    src: "/tiktok-icon-2.svg",
    href: "https://tiktok.com/@eatfitapp",
  },
  {
    name: "X",
    src: "/X_icon.svg.png",
    href: "https://x.com/eatfitapp",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt="EatFit" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Comida saludable y nutrición inteligente para estudiantes ITSON.
              Tu salud, bajo control.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900">
              Producto
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#productos" className="hover:text-brand-600">Menú</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-600">¿Cómo funciona?</a></li>
              <li><a href="#app" className="hover:text-brand-600">La app</a></li>
              <li><a href="#cta" className="hover:text-brand-600">Descargar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:Eatfitapp@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-brand-600"
                >
                  <Mail size={16} strokeWidth={2} />
                  Eatfitapp@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={16} strokeWidth={2} />
                ITSON, Cd. Obregón, Sonora
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white p-2 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md"
                >
                  <img
                    src={s.src}
                    alt={s.name}
                    className="h-full w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {year} EatFit. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-600">Privacidad</a>
            <a href="#" className="hover:text-brand-600">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
