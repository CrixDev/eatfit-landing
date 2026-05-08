import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ArrowRight, Clock, ShoppingBag } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import BottomNav from "../BottomNav";
import { supermercados } from "../catalogo";
import { useApp } from "../AppContext";

function SuperScreen() {
  const navigate = useNavigate();
  const { totalItems } = useApp();

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
          <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            PEDIR A SÚPER
          </h1>
          <p className="mt-1 text-sm text-slate-500">Elige tu tienda preferida</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 px-5">
          {supermercados.map((t) => (
            <Link
              key={t.id}
              to={`/app/super/${t.id}`}
              className="group relative flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition active:scale-[0.97]"
            >
              {t.badge && (
                <span className="absolute -top-2 right-3 rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                  {t.badge}
                </span>
              )}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl ${t.color} text-xl font-bold text-white`}
              >
                {t.logo}
              </div>
              <p className="font-display text-base font-bold text-slate-900">
                {t.nombre}
              </p>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <Clock size={11} strokeWidth={2.2} />
                {t.tiempo}
              </div>
              <p className="text-[11px] text-slate-500">Envío: ${t.envio}</p>
              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1.5 text-[10px] font-bold uppercase text-white shadow-sm group-hover:bg-brand-600">
                Ver productos
                <ArrowRight size={11} strokeWidth={2.4} />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-6 px-5 text-[11px] text-slate-400">
          Sincroniza tu lista con tu súper de confianza. Los productos llegan a casa.
        </p>

        <div className="mt-auto" />
        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export default SuperScreen;
