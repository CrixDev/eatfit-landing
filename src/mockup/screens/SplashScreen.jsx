import { useNavigate } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";
import PhoneFrame from "../PhoneFrame";

function SplashScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col items-center justify-between px-8 py-12">
        <div className="flex-1" />

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="font-display text-6xl font-bold tracking-tight text-slate-900">
              Eat
            </span>
            <span className="font-display text-6xl font-bold tracking-tight text-brand-500">
              F
            </span>
            <span className="relative font-display text-6xl font-bold tracking-tight text-brand-500">
              <UtensilsCrossed
                size={36}
                strokeWidth={2.4}
                className="inline align-middle"
              />
            </span>
            <span className="font-display text-6xl font-bold tracking-tight text-brand-500">
              t
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Tu Campus. Tu Nutrición. Smart Pide.
          </p>

          <div className="mt-3 h-0.5 w-20 rounded-full bg-brand-300" />
        </div>

        <div className="flex-1" />

        <button
          onClick={() => navigate("/login")}
          className="rounded-full bg-brand-500 px-12 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-600 active:scale-95"
        >
          Comenzar
        </button>

        <p className="mt-6 text-[10px] text-slate-400">v1.0 · Demo</p>
      </div>
    </PhoneFrame>
  );
}

export default SplashScreen;
