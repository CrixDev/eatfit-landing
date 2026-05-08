import { Rocket } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/";
const PLAY_STORE_URL = "https://play.google.com/store";

function CTASection() {
  return (
    <section id="cta" className="bg-white px-6 py-16 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-brand-500 via-brand-600 to-brand-700 px-8 py-16 text-white shadow-2xl shadow-brand-500/20 sm:px-16 sm:py-20">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <Rocket size={14} strokeWidth={2.2} />
              Disponible ya
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Empieza a comer mejor hoy.
            </h2>
            <p className="mt-4 max-w-md text-lg text-white/90">
              Descarga EatFit gratis y deja que la IA se encargue de tu rutina
              alimenticia. Tu campus, tu nutrición.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95"
            >
              <img
                src="/Apple_logo_black.svg"
                alt=""
                className="h-7 w-7 brightness-0 invert"
              />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70">Descargar en</p>
                <p className="font-display text-base font-semibold">App Store</p>
              </div>
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-95"
            >
              <img
                src="/Google_Play_2022_icon.svg.png"
                alt=""
                className="h-7 w-7 object-contain"
              />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-70">Disponible en</p>
                <p className="font-display text-base font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
