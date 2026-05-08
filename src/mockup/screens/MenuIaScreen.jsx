import { useNavigate } from "react-router-dom";
import { ChevronLeft, Clock, ShoppingCart } from "lucide-react";
import PhoneFrame from "../PhoneFrame";

const meals = [
  {
    id: 1,
    tag: "DESAYUNO",
    nombre: "Tostada de Aguacate",
    img: "/platillo3.png",
    tiempo: "15 mins",
    macros: { p: 12, c: 28, g: 18 },
  },
  {
    id: 2,
    tag: "ALMUERZO",
    nombre: "Ensalada de Quinoa",
    img: "/platillo1.jpg",
    tiempo: "20 mins",
    macros: { p: 18, c: 42, g: 14 },
  },
  {
    id: 3,
    tag: "CENA",
    nombre: "Salmón al Horno",
    img: "/platillo2.jpg",
    tiempo: "35 mins",
    macros: { p: 32, c: 18, g: 22 },
  },
];

function MenuIaScreen() {
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
            TU MENÚ IA DE HOY
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Personalizado para tus objetivos
          </p>
        </div>

        <div className="mt-6 space-y-3 px-5">
          {meals.map((m) => (
            <div
              key={m.id}
              className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100"
            >
              <img
                src={m.img}
                alt=""
                className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold tracking-wider text-brand-600">
                    {m.tag}
                  </span>
                  <button className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                    Cambiar
                  </button>
                </div>
                <p className="font-display text-base font-bold text-slate-900">
                  {m.nombre}
                </p>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                  <Clock size={11} strokeWidth={2.2} />
                  {m.tiempo}
                </div>
                <div className="mt-1.5 flex gap-2 text-[11px] font-semibold">
                  <span className="text-brand-600">P: {m.macros.p}g</span>
                  <span className="text-amber-600">C: {m.macros.c}g</span>
                  <span className="text-rose-500">G: {m.macros.g}g</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 px-5">
          <div className="grid grid-cols-4 gap-2 rounded-2xl bg-slate-50 px-3 py-4">
            <div className="text-center">
              <p className="font-display text-xl font-bold text-slate-900">1,680</p>
              <p className="text-[10px] text-slate-500">kcal total</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold text-brand-600">62g</p>
              <p className="text-[10px] text-slate-500">Proteína</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold text-amber-600">88g</p>
              <p className="text-[10px] text-slate-500">Carbos</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold text-rose-500">54g</p>
              <p className="text-[10px] text-slate-500">Grasas</p>
            </div>
          </div>
        </div>

        <div className="mt-auto p-5">
          <button
            onClick={() => navigate("/app/plan")}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-[0.98]"
          >
            <ShoppingCart size={16} strokeWidth={2.4} />
            Confirmar menú
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default MenuIaScreen;
