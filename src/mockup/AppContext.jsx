import { createContext, useContext, useMemo, useState } from "react";
import { getComida, getProductoSuper } from "./catalogo";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (id, tipo = "comida", cantidad = 1) => {
    setCart((prev) => {
      const existing = prev.find((it) => it.id === id && it.tipo === tipo);
      if (existing) {
        return prev.map((it) =>
          it.id === id && it.tipo === tipo
            ? { ...it, cantidad: it.cantidad + cantidad }
            : it
        );
      }
      return [...prev, { id, tipo, cantidad }];
    });
  };

  const removeFromCart = (id, tipo) => {
    setCart((prev) => prev.filter((it) => !(it.id === id && it.tipo === tipo)));
  };

  const updateCantidad = (id, tipo, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(id, tipo);
      return;
    }
    setCart((prev) =>
      prev.map((it) =>
        it.id === id && it.tipo === tipo ? { ...it, cantidad } : it
      )
    );
  };

  const clearCart = () => setCart([]);

  const items = useMemo(
    () =>
      cart
        .map((it) => {
          const data =
            it.tipo === "super" ? getProductoSuper(it.id) : getComida(it.id);
          return data ? { ...it, ...data } : null;
        })
        .filter(Boolean),
    [cart]
  );

  const totalItems = cart.reduce((acc, it) => acc + it.cantidad, 0);
  const totalPrecio = items.reduce(
    (acc, it) => acc + it.precio * it.cantidad,
    0
  );

  return (
    <AppContext.Provider
      value={{
        cart,
        items,
        totalItems,
        totalPrecio,
        addToCart,
        removeFromCart,
        updateCantidad,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
