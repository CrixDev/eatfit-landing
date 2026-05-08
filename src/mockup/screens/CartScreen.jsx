import { useNavigate } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import PhoneFrame from "../PhoneFrame";
import { useApp } from "../AppContext";

function CartScreen() {
  const navigate = useNavigate();
  const { items, totalPrecio, updateCantidad, removeFromCart, clearCart } =
    useApp();

  const envio = items.length > 0 ? 25 : 0;
  const total = totalPrecio + envio;

  const handleCheckout = () => {
    clearCart();
    navigate("/app/confirmado");
  };

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
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs font-semibold text-rose-500"
            >
              Vaciar
            </button>
          )}
        </div>

        <div className="px-5 pt-2">
          <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Tu carrito
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {items.length === 0
              ? "Aún no tienes productos"
              : `${items.length} ${items.length === 1 ? "producto" : "productos"} · listo para ordenar`}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <ShoppingBag size={36} strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-base font-semibold text-slate-700">
              Tu carrito está vacío
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Explora platillos en el inicio
            </p>
            <button
              onClick={() => navigate("/app")}
              className="mt-6 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white"
            >
              Ir al inicio
            </button>
          </div>
        ) : (
          <>
            <div className="mt-4 flex-1 space-y-3 px-5 pb-4">
              {items.map((it) => (
                <div
                  key={`${it.tipo}-${it.id}`}
                  className="flex gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100"
                >
                  {it.tipo === "super" ? (
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 text-3xl">
                      {it.img}
                    </div>
                  ) : (
                    <img
                      src={it.img}
                      alt=""
                      className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {it.nombre}
                    </p>
                    {it.restaurante && (
                      <p className="truncate text-[11px] text-slate-500">
                        {it.restaurante}
                      </p>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-900">
                        ${it.precio * it.cantidad}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateCantidad(it.id, it.tipo, it.cantidad - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700"
                        >
                          <Minus size={12} strokeWidth={2.5} />
                        </button>
                        <span className="min-w-[1.5ch] text-center text-sm font-bold text-slate-900">
                          {it.cantidad}
                        </span>
                        <button
                          onClick={() =>
                            updateCantidad(it.id, it.tipo, it.cantidad + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white"
                        >
                          <Plus size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(it.id, it.tipo)}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center self-start rounded-full text-rose-400"
                  >
                    <Trash2 size={16} strokeWidth={2.2} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-white px-5 pt-4 pb-5">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${totalPrecio}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Envío</span>
                  <span>${envio}</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-2 text-base font-bold text-slate-900">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-4 w-full rounded-full bg-brand-500 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 active:scale-[0.98]"
              >
                Confirmar pedido · ${total}
              </button>
            </div>
          </>
        )}
      </div>
    </PhoneFrame>
  );
}

export default CartScreen;
