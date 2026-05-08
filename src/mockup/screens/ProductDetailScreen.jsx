import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeft,
  Heart,
  Star,
  Clock,
  Flame,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import { getComida } from "../catalogo";
import { useApp } from "../AppContext";

function ProductDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [cantidad, setCantidad] = useState(1);
  const [fav, setFav] = useState(false);
  const [added, setAdded] = useState(false);

  const p = getComida(id);

  if (!p) {
    return (
      <PhoneFrame>
        <div className="flex flex-1 items-center justify-center">
          <p className="text-sm text-slate-500">Producto no encontrado</p>
        </div>
      </PhoneFrame>
    );
  }

  const handleAdd = () => {
    addToCart(p.id, "comida", cantidad);
    setAdded(true);
    setTimeout(() => navigate("/app/carrito"), 700);
  };

  return (
    <PhoneFrame hideStatusBar>
      <div className="flex flex-1 flex-col">
        <div className="relative h-72">
          <img
            src={p.img}
            alt={p.nombre}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <button
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 backdrop-blur shadow-sm"
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>
            <button
              onClick={() => setFav((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm"
            >
              <Heart
                size={18}
                strokeWidth={2.2}
                fill={fav ? "#ef4444" : "none"}
                className={fav ? "text-red-500" : "text-slate-700"}
              />
            </button>
          </div>
          {p.tag && (
            <span className="absolute bottom-4 left-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              {p.tag}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col rounded-t-3xl bg-white px-6 pt-5 -mt-4 relative z-10">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                {p.restaurante}
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold leading-tight text-slate-900">
                {p.nombre}
              </h1>
            </div>
            <p className="font-display text-2xl font-bold text-slate-900">
              ${p.precio}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Star size={12} strokeWidth={2.4} className="text-amber-500" fill="currentColor" />
              <strong>{p.rating}</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} strokeWidth={2.4} />
              {p.tiempo}
            </span>
            <span className="inline-flex items-center gap-1">
              <Flame size={12} strokeWidth={2.4} className="text-accent-500" />
              {p.kcal} kcal
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3">
            <div className="text-center">
              <p className="font-display text-base font-bold text-brand-600">
                {p.macros.p}g
              </p>
              <p className="text-[10px] text-slate-500">Proteína</p>
            </div>
            <div className="text-center">
              <p className="font-display text-base font-bold text-amber-600">
                {p.macros.c}g
              </p>
              <p className="text-[10px] text-slate-500">Carbos</p>
            </div>
            <div className="text-center">
              <p className="font-display text-base font-bold text-rose-500">
                {p.macros.g}g
              </p>
              <p className="text-[10px] text-slate-500">Grasas</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Descripción
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              {p.descripcion}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Cantidad
            </p>
            <div className="mt-2 flex items-center gap-4">
              <button
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700"
              >
                <Minus size={16} strokeWidth={2.4} />
              </button>
              <span className="font-display text-xl font-bold text-slate-900 min-w-[2ch] text-center">
                {cantidad}
              </span>
              <button
                onClick={() => setCantidad((c) => c + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white"
              >
                <Plus size={16} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4 pb-4">
            <div>
              <p className="text-[11px] text-slate-500">Total</p>
              <p className="font-display text-xl font-bold text-slate-900">
                ${p.precio * cantidad}
              </p>
            </div>
            <button
              onClick={handleAdd}
              className={`ml-auto inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-lg transition active:scale-[0.97] ${
                added
                  ? "bg-emerald-500 shadow-emerald-500/30"
                  : "bg-brand-500 shadow-brand-500/30 hover:bg-brand-600"
              }`}
            >
              <ShoppingBag size={16} strokeWidth={2.4} />
              {added ? "Agregado ✓" : "Agregar al carrito"}
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default ProductDetailScreen;
