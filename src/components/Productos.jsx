import { UtensilsCrossed, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { productos } from "../data/productos";

function Productos() {
  return (
    <section id="productos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <UtensilsCrossed size={14} strokeWidth={2.2} />
            Nuestro menú
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Comida lista, hecha para ti
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Platillos balanceados con macros calculados, listos para ordenar
            desde la app. Cada uno pensado para tus metas y tu rutina.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
          >
            Ver menú completo
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Productos;
