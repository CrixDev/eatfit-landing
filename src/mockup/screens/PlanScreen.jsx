import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Apple, Leaf, Flame } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import BottomNav from "../BottomNav";

const days = [
  { num: 1, nombre: "Lunes - Hoy", kcal: 1680, status: "ready", today: true },
  { num: 2, nombre: "Martes", kcal: 1720, status: "ready" },
  { num: 3, nombre: "Miércoles", kcal: 1650, status: "ready" },
  { num: 4, nombre: "Jueves", kcal: null, status: "pending" },
  { num: 5, nombre: "Viernes", kcal: null, status: "pending" },
  { num: 6, nombre: "Sábado", kcal: null, status: "pending" },
  { num: 7, nombre: "Domingo", kcal: null, status: "pending" },
];

function StatusIcons() {
  return (
    <div className="flex items-center gap-1">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <Apple size={11} strokeWidth={2.4} />
      </span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Leaf size={11} strokeWidth={2.4} />
      </span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <Flame size={11} strokeWidth={2.4} />
      </span>
    </div>
  );
}

function PlanScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col bg-white">
        <div className="px-5 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700"
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
        </div>

        <div className="px-5 pt-2">
          <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            PLAN SEMANAL
          </h1>
          <p className="mt-1 text-sm text-slate-500">Semana del 7 - 13 Abril</p>
        </div>

        <div className="mt-6 space-y-2 px-5">
          {days.map((d) => (
            <div
              key={d.num}
              className={`flex items-center gap-3 rounded-2xl p-3 ring-1 transition ${
                d.today
                  ? "bg-brand-50 ring-brand-200"
                  : "bg-white ring-slate-100"
              }`}
            >
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-bold ${
                  d.today
                    ? "bg-brand-500 text-white"
                    : d.status === "ready"
                      ? "bg-slate-100 text-slate-700"
                      : "bg-slate-50 text-slate-400"
                }`}
              >
                {d.num}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-semibold ${
                    d.today ? "text-brand-700" : "text-slate-900"
                  }`}
                >
                  {d.nombre}
                </p>
                <p className="text-[11px] text-slate-500">
                  {d.kcal
                    ? `${d.kcal.toLocaleString()} kcal planificadas`
                    : "Pendiente de IA"}
                </p>
              </div>
              {d.status === "ready" ? (
                <StatusIcons />
              ) : (
                <span className="text-xs text-slate-300">···</span>
              )}
              <ChevronRight
                size={16}
                strokeWidth={2.2}
                className="text-slate-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-auto p-5">
          <button
            onClick={() => navigate("/app/super")}
            className="w-full rounded-full bg-brand-500 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-[0.98]"
          >
            Generar lista de compras
          </button>
        </div>

        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export default PlanScreen;
