import { Home, Search, ShoppingBag, User, ClipboardList } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { id: "inicio", label: "Inicio", Icon: Home, to: "/app" },
  { id: "buscar", label: "Buscar", Icon: Search, to: "/app/buscar" },
  { id: "pedir", label: "Pedir", Icon: ShoppingBag, to: "/app/super", center: true },
  { id: "perfil", label: "Perfil", Icon: User, to: "/app/progreso" },
  { id: "pedidos", label: "Pedidos", Icon: ClipboardList, to: "/app/plan" },
];

function BottomNav() {
  const { pathname } = useLocation();

  return (
    <div className="sticky bottom-0 z-20 border-t border-slate-100 bg-white">
      <div className="flex items-end justify-between px-4 pb-3 pt-2">
        {items.map((it) => {
          const active = pathname === it.to;
          if (it.center) {
            return (
              <Link
                key={it.id}
                to={it.to}
                className="-mt-6 flex flex-col items-center gap-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30 ring-4 ring-white">
                  <it.Icon size={20} strokeWidth={2.2} />
                </span>
                <span className="text-[10px] font-medium text-slate-600">
                  {it.label}
                </span>
              </Link>
            );
          }
          return (
            <Link
              key={it.id}
              to={it.to}
              className={`flex w-14 flex-col items-center gap-1 ${
                active ? "text-brand-600" : "text-slate-400"
              }`}
            >
              <it.Icon size={20} strokeWidth={2} />
              <span className="text-[10px] font-medium">{it.label}</span>
              {active && <span className="h-1 w-1 rounded-full bg-brand-500" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNav;
