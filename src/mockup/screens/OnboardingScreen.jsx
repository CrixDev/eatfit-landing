import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import PhoneFrame from "../PhoneFrame";

function ChipGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p className="text-xs font-medium text-slate-600">{label}</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`rounded-full px-3 py-2.5 text-xs font-semibold transition ${
                active
                  ? "bg-brand-500 text-white shadow-sm"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function OnboardingScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("Saludable");
  const [budget, setBudget] = useState("$80 - $120");
  const [time, setTime] = useState("Menos de 10 min");
  const [activity, setActivity] = useState("Moderado");

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pb-8 pt-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">
            Cuéntanos de ti
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Te ayudamos a comer mejor sin gastar de más
          </p>
        </div>

        <div className="mt-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre (opcional)"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-brand-400 text-brand-500 transition hover:bg-brand-50"
          >
            <Plus size={28} strokeWidth={2} />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <ChipGroup
            label="¿Qué buscas la mayoría del tiempo?"
            options={["Económico", "Rápido", "Saludable"]}
            value={goal}
            onChange={setGoal}
          />
          <ChipGroup
            label="Presupuesto por comida"
            options={["$50 - $80", "$80 - $120", "$120+"]}
            value={budget}
            onChange={setBudget}
          />
          <ChipGroup
            label="Tiempo disponible"
            options={["Menos de 10 min", "10 - 20 min", "Sin prisa"]}
            value={time}
            onChange={setTime}
          />
          <ChipGroup
            label="Nivel de actividad"
            options={["Ligero", "Moderado", "Activo"]}
            value={activity}
            onChange={setActivity}
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/app")}
          className="mt-8 w-full rounded-2xl bg-brand-500 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 active:scale-[0.98]"
        >
          Continuar
        </button>
      </div>
    </PhoneFrame>
  );
}

export default OnboardingScreen;
