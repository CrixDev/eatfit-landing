import { Salad, Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import ProductCard from "./ProductCard";
import { productos } from "../data/productos";

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const cardA = productos[0];
  const cardB = productos[1];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-accent-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pt-16 pb-24 lg:grid-cols-2 lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur">
            <Salad size={14} strokeWidth={2.2} />
            Hecho para estudiantes ITSON
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Tu salud,
            <br />
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              bajo control.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Comer bien en la uni nunca fue tan fácil. IA que aprende tus hábitos,
            recordatorios para no olvidar el súper, y comida saludable lista
            para tu día.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("cta")}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 hover:shadow-xl active:scale-95"
            >
              Comenzar gratis
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scrollTo("como-funciona")}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <PlayCircle size={16} strokeWidth={2.2} />
              Ver cómo funciona
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-brand-300", "bg-accent-400", "bg-brand-500", "bg-orange-300"].map((c, i) => (
                <div
                  key={i}
                  className={`h-9 w-9 rounded-full border-2 border-white ${c}`}
                />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">+500 estudiantes</span> ITSON ya comen mejor
            </p>
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[600px]">
          <div className="absolute right-0 top-0 w-[78%] rotate-3 transition-transform duration-500 hover:rotate-0">
            <ProductCard producto={cardA} />
          </div>
          <div className="absolute bottom-0 left-0 w-[72%] -rotate-3 transition-transform duration-500 hover:rotate-0">
            <ProductCard producto={cardB} />
          </div>

          <div className="absolute right-6 bottom-20 z-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <Sparkles size={20} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">IA Nutricional</p>
              <p className="text-xs text-slate-500">Sugerencia del día</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
