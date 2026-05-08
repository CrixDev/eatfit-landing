import {
  Smartphone,
  Bot,
  Bell,
  ShoppingBasket,
  Home,
  UtensilsCrossed,
  User,
  Plus,
} from "lucide-react";

const appFeatures = [
  {
    Icon: Bot,
    title: "Perfil nutricional con IA",
    description:
      "Te conoce mejor que tú: aprende qué comes, cuándo y qué te falta. Te sugiere platillos según tus metas reales.",
  },
  {
    Icon: Bell,
    title: "Recordatorios automáticos",
    description:
      "Se acabó la leche. Te avisamos antes de que te enteres, basado en lo que normalmente consumes.",
  },
  {
    Icon: ShoppingBasket,
    title: "Súper integrado",
    description:
      "Tu lista de súper se hace sola. Conectamos con supermercados aliados para que recibas todo en un click.",
  },
];

function AppShowcase() {
  return (
    <section
      id="app"
      className="relative overflow-hidden bg-slate-900 py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-100 w-100 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-linear-to-br from-brand-400/30 to-accent-400/20 blur-2xl" />

            <div className="relative h-150 w-75 rounded-[3rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl ring-1 ring-white/10">
              <div className="absolute left-1/2 top-2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-slate-950" />

              <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-white">
                <div className="flex h-full flex-col">
                  <div className="bg-linear-to-br from-brand-500 to-brand-700 px-5 pt-10 pb-6 text-white">
                    <p className="text-xs font-medium opacity-80">Hola, Cris</p>
                    <p className="mt-1 font-display text-xl font-bold leading-tight">
                      Tu salud,
                      <br />
                      bajo control.
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-xl bg-white/15 p-2 backdrop-blur">
                        <p className="text-[10px] opacity-80">Kcal</p>
                        <p className="text-sm font-bold">1,840</p>
                      </div>
                      <div className="rounded-xl bg-white/15 p-2 backdrop-blur">
                        <p className="text-[10px] opacity-80">Proteína</p>
                        <p className="text-sm font-bold">98g</p>
                      </div>
                      <div className="rounded-xl bg-white/15 p-2 backdrop-blur">
                        <p className="text-[10px] opacity-80">Agua</p>
                        <p className="text-sm font-bold">1.6L</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 px-4 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Sugerencia IA
                    </p>
                    <div className="mt-2 flex gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                      <img
                        src="/platillo1.jpg"
                        alt=""
                        className="h-14 w-14 flex-shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-900">
                          Bowl Mediterráneo
                        </p>
                        <p className="text-[10px] text-slate-500">420 kcal · 32g prot</p>
                        <button className="mt-1 rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-semibold text-white">
                          Ordenar
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Tu súper
                    </p>
                    <div className="mt-2 space-y-2">
                      {[
                        { n: "Avena", t: "Casi se acaba" },
                        { n: "Yogurt griego", t: "Para mañana" },
                      ].map((it) => (
                        <div
                          key={it.n}
                          className="flex items-center gap-3 rounded-xl bg-slate-50 p-2.5"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-600">
                            <ShoppingBasket size={16} strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-900">{it.n}</p>
                            <p className="text-[10px] text-slate-500">{it.t}</p>
                          </div>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-white">
                            <Plus size={12} strokeWidth={3} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 bg-white px-6 py-3">
                    <div className="flex justify-between text-slate-400">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Home size={18} strokeWidth={2} />
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                        <UtensilsCrossed size={18} strokeWidth={2} />
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                        <ShoppingBasket size={18} strokeWidth={2} />
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                        <User size={18} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-brand-300">
            <Smartphone size={14} strokeWidth={2.2} />
            La app
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Toda tu nutrición en
            <span className="bg-linear-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              {" "}una sola app
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Tu campus, tu nutrición. Diseñada para la vida universitaria — rápida,
            inteligente y sin que tengas que pensarlo dos veces.
          </p>

          <ul className="mt-10 space-y-6">
            {appFeatures.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-300 ring-1 ring-white/10">
                  <f.Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-base text-slate-300">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AppShowcase;
