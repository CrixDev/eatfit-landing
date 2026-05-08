import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ChevronLeft, Search, ShoppingBag, Plus, Minus } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import { getSupermercado, productosSuper } from "../catalogo";
import { useApp } from "../AppContext";

function SuperProductsScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart, updateCantidad, totalItems, totalPrecio } =
    useApp();
  const [query, setQuery] = useState("");

  const tienda = getSupermercado(id);
  const productos = productosSuper.filter((p) =>
    query
      ? p.nombre.toLowerCase().includes(query.toLowerCase()) ||
        p.categoria.toLowerCase().includes(query.toLowerCase())
      : true
  );

  const cantidadEnCarrito = (productoId) =>
    cart.find((it) => it.id === productoId && it.tipo === "super")?.cantidad ||
    0;

  const grupos = productos.reduce((acc, p) => {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
  }, {});

  if (!tienda) {
    return (
      <PhoneFrame>
        <div className="flex flex-1 items-center justify-center">
          <p className="text-sm text-slate-500">Supermercado no encontrado</p>
        </div>
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col pb-24">
        <div className="px-5 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700"
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
        </div>

        <div className="px-5 pt-2">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${tienda.color} font-bold text-white`}
            >
              {tienda.logo}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                {tienda.nombre}
              </h1>
              <p className="text-xs text-slate-500">
                Envío ${tienda.envio} · {tienda.tiempo}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5">
            <Search size={16} strokeWidth={2.2} className="text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Buscar en ${tienda.nombre}...`}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="mt-4 flex-1 px-5">
          {Object.entries(grupos).length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-8 text-center">
              <p className="text-sm font-semibold text-slate-700">
                Sin resultados
              </p>
            </div>
          ) : (
            Object.entries(grupos).map(([cat, items]) => (
              <div key={cat} className="mb-6">
                <p className="mb-3 text-sm font-bold text-slate-900">{cat}</p>
                <div className="grid grid-cols-2 gap-3">
                  {items.map((p) => {
                    const en = cantidadEnCarrito(p.id);
                    return (
                      <div
                        key={p.id}
                        className="flex flex-col rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100"
                      >
                        <div className="flex h-20 items-center justify-center rounded-xl bg-slate-50 text-4xl">
                          {p.img}
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs font-semibold text-slate-900">
                          {p.nombre}
                        </p>
                        <p className="mt-auto pt-1 font-display text-lg font-bold text-slate-900">
                          ${p.precio}
                        </p>
                        {en === 0 ? (
                          <button
                            onClick={() => addToCart(p.id, "super", 1)}
                            className="mt-2 flex w-full items-center justify-center gap-1 rounded-full bg-brand-500 py-1.5 text-[11px] font-bold text-white active:scale-95"
                          >
                            <Plus size={12} strokeWidth={2.5} />
                            Agregar
                          </button>
                        ) : (
                          <div className="mt-2 flex items-center justify-between rounded-full bg-brand-500 px-1 py-1 text-white">
                            <button
                              onClick={() =>
                                updateCantidad(p.id, "super", en - 1)
                              }
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
                            >
                              <Minus size={12} strokeWidth={2.5} />
                            </button>
                            <span className="text-xs font-bold">{en}</span>
                            <button
                              onClick={() =>
                                updateCantidad(p.id, "super", en + 1)
                              }
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20"
                            >
                              <Plus size={12} strokeWidth={2.5} />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {totalItems > 0 && (
          <Link
            to="/app/carrito"
            className="fixed bottom-4 left-1/2 z-30 inline-flex w-[calc(100%-2.5rem)] max-w-[360px] -translate-x-1/2 items-center justify-between rounded-full bg-slate-900 px-5 py-3.5 text-white shadow-2xl"
          >
            <span className="inline-flex items-center gap-2">
              <ShoppingBag size={16} strokeWidth={2.4} />
              <span className="text-sm font-semibold">
                {totalItems} {totalItems === 1 ? "producto" : "productos"}
              </span>
            </span>
            <span className="font-display text-sm font-bold">
              Ver carrito · ${totalPrecio}
            </span>
          </Link>
        )}
      </div>
    </PhoneFrame>
  );
}

export default SuperProductsScreen;
