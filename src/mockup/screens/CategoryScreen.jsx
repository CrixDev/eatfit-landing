import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ChevronLeft, SlidersHorizontal, ShoppingBag } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import BottomNav from "../BottomNav";
import ProductRow from "../components/ProductRow";
import { comidasPorCategoria, getCategoria } from "../catalogo";
import { useApp } from "../AppContext";

const FILTERS = ["Todos", "Más vendido", "Sano", "Más barato"];

function CategoryScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { totalItems } = useApp();
  const [filter, setFilter] = useState("Todos");

  const categoria = getCategoria(id);
  let productos = comidasPorCategoria(id);

  if (filter === "Más vendido") {
    productos = productos.filter((p) => p.tag === "Más vendido");
  } else if (filter === "Sano") {
    productos = productos.filter(
      (p) => p.tag === "Sano" || p.tag === "Saludable" || p.kcal < 350
    );
  } else if (filter === "Más barato") {
    productos = [...productos].sort((a, b) => a.precio - b.precio);
  }

  if (!categoria) {
    return (
      <PhoneFrame>
        <div className="flex flex-1 items-center justify-center px-6 text-center">
          <p className="text-sm text-slate-500">Categoría no encontrada</p>
        </div>
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between px-5 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700"
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
          <Link
            to="/app/carrito"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700"
          >
            <ShoppingBag size={18} strokeWidth={2.2} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="px-5 pt-2">
          <p className="text-3xl">{categoria.emoji}</p>
          <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900">
            {categoria.nombre}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {productos.length} opciones disponibles cerca de ti
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 overflow-x-auto px-5 pb-1">
          <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 text-slate-600">
            <SlidersHorizontal size={14} strokeWidth={2.2} />
          </button>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                filter === f
                  ? "bg-brand-500 text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-4 flex-1 space-y-2 px-5 pb-6">
          {productos.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-8 text-center">
              <p className="text-sm font-semibold text-slate-700">
                Sin resultados
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Prueba con otro filtro
              </p>
            </div>
          ) : (
            productos.map((p) => <ProductRow key={p.id} producto={p} />)
          )}
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export default CategoryScreen;
