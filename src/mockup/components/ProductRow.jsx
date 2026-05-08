import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { useApp } from "../AppContext";

function ProductRow({ producto }) {
  const { addToCart } = useApp();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(producto.id, "comida", 1);
  };

  return (
    <Link
      to={`/app/producto/${producto.id}`}
      className="flex items-center gap-3 rounded-2xl bg-white p-2.5 ring-1 ring-slate-100 transition active:scale-[0.99]"
    >
      <img
        src={producto.img}
        alt=""
        className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-900">
          {producto.nombre}
        </p>
        <p className="truncate text-[10px] text-slate-500">
          {producto.restaurante}
        </p>
        <div className="mt-0.5 flex flex-wrap gap-1">
          {producto.tag && (
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[9px] font-semibold text-brand-700">
              {producto.tag}
            </span>
          )}
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-600">
            {producto.kcal} kcal
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-900">${producto.precio}</p>
          <span className="inline-flex items-center gap-0.5 text-[10px] text-amber-500">
            <Star size={10} strokeWidth={2.4} fill="currentColor" />
            <span className="font-semibold">{producto.rating}</span>
            <span className="text-slate-400"> · {producto.tiempo}</span>
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        aria-label="Agregar"
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-sm active:scale-90"
      >
        <Plus size={16} strokeWidth={2.5} />
      </button>
    </Link>
  );
}

export default ProductRow;
