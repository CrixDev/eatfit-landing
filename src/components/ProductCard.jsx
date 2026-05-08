import { Flame, Dumbbell, Plus } from "lucide-react";

function ProductCard({ producto, className = "", href = "#productos" }) {
  const { nombre, descripcion, imagen, kcal, proteina, precio, tag } = producto;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10 ${className}`}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={imagen}
          alt={nombre}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            {nombre}
          </h3>
          {descripcion && (
            <p className="mt-1 line-clamp-2 text-sm text-slate-500">
              {descripcion}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-accent-600">
            <Flame size={14} strokeWidth={2.2} />
            {kcal} kcal
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">
            <Dumbbell size={14} strokeWidth={2.2} />
            {proteina}g prot
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-2xl font-bold text-slate-900">
            ${precio}
          </span>
          <a
            href={href}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 hover:shadow-md active:scale-95"
          >
            <Plus size={16} strokeWidth={2.5} />
            Ordenar
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
