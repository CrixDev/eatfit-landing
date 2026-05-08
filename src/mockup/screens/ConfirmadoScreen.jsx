import { useNavigate } from "react-router-dom";
import { Check, Home } from "lucide-react";
import PhoneFrame from "../PhoneFrame";

function ConfirmadoScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <Check size={48} strokeWidth={3} />
        </div>
        <h1 className="mt-6 font-display text-3xl font-bold text-slate-900">
          ¡Pedido confirmado!
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Tu pedido va en camino. Tiempo estimado:{" "}
          <strong className="text-slate-700">15 - 25 min</strong>
        </p>

        <div className="mt-8 w-full rounded-2xl bg-slate-50 p-4 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Estado
          </p>
          <div className="mt-2 space-y-2 text-sm">
            <p className="flex items-center gap-2 text-brand-600">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Pedido recibido
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              En preparación
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              En camino
            </p>
            <p className="flex items-center gap-2 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              Entregado
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/app")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 active:scale-95"
        >
          <Home size={16} strokeWidth={2.4} />
          Volver al inicio
        </button>
      </div>
    </PhoneFrame>
  );
}

export default ConfirmadoScreen;
