import { Clock, Apple, ShoppingCart, Sparkles } from "lucide-react";

const features = [
  {
    Icon: Clock,
    title: "Falta de tiempo",
    description:
      "Pedidos automáticos. Tu súper llega solo, sin que tengas que pensarlo entre clases.",
    color: "bg-brand-50 border-brand-100",
    iconColor: "text-brand-600",
  },
  {
    Icon: Apple,
    title: "Dieta desbalanceada",
    description:
      "IA nutricional que aprende tus hábitos y te sugiere qué comer hoy según tus metas.",
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-accent-600",
  },
  {
    Icon: ShoppingCart,
    title: "Olvidos del súper",
    description:
      "Recordatorios inteligentes. Nunca más te quedas sin lo esencial en tu cuarto.",
    color: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
  },
];

function Features() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600">
            <Sparkles size={14} strokeWidth={2.2} />
            ¿Por qué EatFit?
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Resolvemos los 3 problemas
            <br className="hidden sm:block" /> reales del estudiante
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No vendemos solo comida. Te quitamos el dolor de cabeza de planearla,
            comprarla y mantenerla balanceada.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-3xl border ${f.color} p-8 transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ${f.iconColor}`}>
                <f.Icon size={26} strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
