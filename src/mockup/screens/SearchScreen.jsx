import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Search, X, TrendingUp } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import BottomNav from "../BottomNav";
import ProductRow from "../components/ProductRow";
import { buscarComidas, categorias } from "../catalogo";

const sugerencias = ["Tacos", "Saludable", "Menos de $50", "Alto en proteína"];

function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const resultados = buscarComidas(query);
  const showResults = query.trim().length > 0;

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2 px-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700"
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
          <div className="flex flex-1 items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5">
            <Search size={16} strokeWidth={2.2} className="text-slate-500" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tacos, tortas, jugos..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-slate-400">
                <X size={16} strokeWidth={2.4} />
              </button>
            )}
          </div>
        </div>

        {showResults ? (
          <div className="flex-1 px-5 pt-4">
            <p className="text-xs text-slate-500">
              {resultados.length} resultado{resultados.length === 1 ? "" : "s"} para
              <strong className="text-slate-700"> "{query}"</strong>
            </p>
            <div className="mt-3 space-y-2">
              {resultados.length === 0 ? (
                <div className="rounded-2xl bg-slate-50 p-8 text-center">
                  <p className="text-sm font-semibold text-slate-700">
                    Sin resultados
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Intenta con otra palabra
                  </p>
                </div>
              ) : (
                resultados.map((p) => <ProductRow key={p.id} producto={p} />)
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 px-5 pt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Sugerencias
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {sugerencias.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  <TrendingUp size={11} strokeWidth={2.4} />
                  {s}
                </button>
              ))}
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">
              Categorías
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {categorias.map((c) => (
                <Link
                  key={c.id}
                  to={`/app/categoria/${c.id}`}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100 transition active:bg-slate-50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-xl">
                    {c.emoji}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {c.nombre}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <BottomNav />
      </div>
    </PhoneFrame>
  );
}

export default SearchScreen;
