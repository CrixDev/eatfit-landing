import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ChevronDown,
  MapPin,
  Sparkles,
  Zap,
  GraduationCap,
  ChevronRight,
  Star,
  Heart,
  ShoppingBag,
} from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import BottomNav from "../BottomNav";
import { categorias, comidas } from "../catalogo";
import { useApp } from "../AppContext";

const destacadosIds = ["c1", "c8"];
const cercaIds = ["c4", "c11", "c9"];

function HomeScreen() {
  const navigate = useNavigate();
  const { totalItems } = useApp();

  const destacados = destacadosIds.map((id) => comidas.find((c) => c.id === id));
  const cerca = cercaIds.map((id) => comidas.find((c) => c.id === id));

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="bg-brand-500 px-5 pb-5 pt-2 text-white">
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
              <MapPin size={12} strokeWidth={2.4} />
              ITSON Campus Nainari
              <ChevronDown size={12} strokeWidth={2.4} />
            </button>
            <div className="flex items-center gap-2">
              <Link
                to="/app/carrito"
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur"
              >
                <ShoppingBag size={16} strokeWidth={2.2} />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] font-bold text-white ring-2 ring-brand-500">
                    {totalItems}
                  </span>
                )}
              </Link>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-bold ring-2 ring-white/40">
                CF
              </div>
            </div>
          </div>

          <h1 className="mt-4 font-display text-2xl font-bold leading-tight">
            ¡Hola, Carlos! 👋
          </h1>
          <p className="text-xs opacity-90">¿Qué vas a pedir hoy?</p>

          <button
            onClick={() => navigate("/app/buscar")}
            className="mt-4 flex w-full items-center gap-2 rounded-2xl bg-white px-4 py-3 text-left text-slate-500 shadow-sm"
          >
            <Search size={16} strokeWidth={2.2} />
            <span className="flex-1 text-sm text-slate-400">
              Tacos, tortas, jugos...
            </span>
          </button>
        </div>

        <div className="px-5 pt-4">
          <Link
            to="/app/menu-ia"
            className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/70 p-3 active:bg-brand-50"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Sparkles size={18} strokeWidth={2.2} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-brand-700">NutriAI</p>
              <p className="text-xs text-slate-700">
                Hoy te faltan <strong>820 kcal</strong>.
              </p>
              <p className="text-[11px] text-slate-500">
                Te recomiendo un almuerzo balanceado 🥗
              </p>
            </div>
            <span className="rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-semibold text-white">
              Ver plan
            </span>
          </Link>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
          <button className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white">
            Todos
          </button>
          <button className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            <Zap size={12} strokeWidth={2.4} className="text-amber-500" />
            Menos de 15 min
          </button>
          <button className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            <GraduationCap size={12} strokeWidth={2.4} />
            Convenio ITSON
          </button>
        </div>

        <div className="mt-5 px-5">
          <p className="text-base font-bold text-slate-900">Categorías</p>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {categorias.map((c) => (
              <Link
                key={c.id}
                to={`/app/categoria/${c.id}`}
                className="flex w-16 flex-shrink-0 flex-col items-center gap-1.5 active:scale-95"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-2xl ring-1 ring-slate-100">
                  {c.emoji}
                </div>
                <span className="text-[11px] font-medium text-slate-600">
                  {c.nombre}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 px-5">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-slate-900">
              Destacados del campus
            </p>
            <Link
              to="/app/categoria/tacos"
              className="text-xs font-semibold text-brand-600"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {destacados.map((d) => (
              <Link
                key={d.id}
                to={`/app/producto/${d.id}`}
                className="overflow-hidden rounded-2xl bg-amber-50/40 ring-1 ring-slate-100 active:scale-[0.98]"
              >
                <div className="relative">
                  <img
                    src={d.img}
                    alt=""
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {d.tag && (
                    <span className="absolute left-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-semibold text-white">
                      {d.tag}
                    </span>
                  )}
                  <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-slate-400">
                    <Heart size={12} strokeWidth={2.4} />
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="truncate text-xs font-semibold text-slate-900">
                    {d.restaurante}
                  </p>
                  <p className="text-[10px] text-slate-500">
                    {d.kcal} kcal · {d.tiempo} · ${d.precio}
                  </p>
                  <div className="mt-1 flex items-center justify-between text-[10px]">
                    <span className="text-brand-700">★ Envío $0</span>
                    <span className="font-medium text-slate-600">
                      ★ {d.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 px-5">
          <Link
            to="/app/super"
            className="flex items-center gap-3 rounded-2xl bg-brand-500 p-3.5 text-white shadow-sm active:scale-[0.98]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <GraduationCap size={18} strokeWidth={2.2} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">Beneficio ITSON</p>
              <p className="text-[11px] opacity-90">
                10% off con tu credencial hoy.
              </p>
              <p className="text-[10px] opacity-80">
                Válido en puestos del convenio.
              </p>
            </div>
            <ChevronRight size={18} strokeWidth={2.4} />
          </Link>
        </div>

        <div className="mt-6 px-5">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-slate-900">Cerca de ti</p>
            <Link to="/app/buscar" className="text-xs font-semibold text-brand-600">
              Ver todos →
            </Link>
          </div>
          <div className="mt-3 space-y-3">
            {cerca.map((c) => (
              <Link
                key={c.id}
                to={`/app/producto/${c.id}`}
                className="flex items-center gap-3 rounded-2xl bg-white p-2.5 ring-1 ring-slate-100 active:scale-[0.99]"
              >
                <img
                  src={c.img}
                  alt=""
                  className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {c.restaurante}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">{c.nombre}</p>
                  <div className="mt-0.5 flex flex-wrap gap-1">
                    {c.tag && (
                      <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[9px] font-semibold text-brand-700">
                        {c.tag}
                      </span>
                    )}
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-600">
                      {c.kcal} kcal
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    ${c.precio}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-0.5 text-[10px] text-slate-500">
                  <span className="inline-flex items-center gap-0.5 text-amber-500">
                    <Star size={10} strokeWidth={2.4} fill="currentColor" />
                    <span className="font-semibold">{c.rating}</span>
                  </span>
                  <span>· {c.tiempo}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="h-6" />
        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export default HomeScreen;
