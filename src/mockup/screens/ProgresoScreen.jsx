import { useNavigate } from "react-router-dom";
import { ChevronLeft, ShoppingCart, TrendingUp } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import BottomNav from "../BottomNav";

function MiniLineChart() {
  const real = [1800, 1700, 1900, 1750, 1820, 1680, 1880, 1720, 1850, 1700, 1900, 1780];
  const objetivo = 1920;
  const max = 2000;
  const min = 1500;
  const w = 320;
  const h = 110;
  const pts = real
    .map((v, i) => {
      const x = (i / (real.length - 1)) * w;
      const y = h - ((v - min) / (max - min)) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const objY = h - ((objetivo - min) / (max - min)) * h;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-28 w-full"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        x2={w}
        y1={objY}
        y2={objY}
        stroke="#f97316"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <polyline
        fill="none"
        stroke="#16a34a"
        strokeWidth="2.5"
        points={pts}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MiniBars() {
  const bars = [40, 55, 45, 60, 50, 65, 70, 80, 75, 85, 90, 95];
  return (
    <div className="flex h-12 items-end gap-0.5">
      {bars.map((b, i) => (
        <span
          key={i}
          style={{ height: `${b}%` }}
          className="w-1.5 rounded-sm bg-brand-500"
        />
      ))}
    </div>
  );
}

function ProgresoScreen() {
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
            PROGRESO DIETÉTICO
          </h1>
          <p className="mt-1 text-sm text-slate-500">Resumen mensual de abril</p>
        </div>

        <div className="mt-5 px-5">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Calorías Diarias vs Objetivo
                </p>
                <div className="mt-1 flex gap-3 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                    Ingesta real
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-accent-500" />
                    Objetivo
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                Abril
              </span>
            </div>

            <div className="mt-3">
              <MiniLineChart />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3">
              <div className="text-center">
                <p className="font-display text-lg font-bold text-brand-600">
                  1,680
                </p>
                <p className="text-[10px] text-slate-500">Promedio real</p>
              </div>
              <div className="text-center">
                <p className="font-display text-lg font-bold text-accent-500">
                  1,920
                </p>
                <p className="text-[10px] text-slate-500">Objetivo diario</p>
              </div>
              <div className="text-center">
                <p className="font-display text-lg font-bold text-brand-600">
                  87%
                </p>
                <p className="text-[10px] text-slate-500">Adherencia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 px-5">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <ShoppingCart size={18} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-slate-500">Valor Promedio del Pedido</p>
              <p className="font-display text-2xl font-bold text-slate-900">
                $120
              </p>
              <p className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-600">
                <TrendingUp size={10} strokeWidth={2.4} />
                8% vs mes anterior
              </p>
            </div>
            <MiniBars />
          </div>
        </div>

        <div className="mt-3 px-5">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-slate-900">Adherencia al Plan</p>
              <p className="font-display text-2xl font-bold text-brand-600">87%</p>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[87%] rounded-full bg-brand-500" />
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-slate-400">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="mt-auto" />
        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export default ProgresoScreen;
