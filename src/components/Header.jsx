import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "Productos", href: "productos" },
  { label: "Cómo funciona", href: "como-funciona" },
  { label: "La app", href: "app" },
  { label: "Contacto", href: "contacto" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("hero")}
          className="flex items-center gap-2"
        >
          <img src="/logo.png" alt="EatFit" className="h-9 w-auto" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => handleClick("cta")}
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 hover:shadow-md active:scale-95"
          >
            <Download size={16} strokeWidth={2.5} />
            Descargar app
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("cta")}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Download size={16} strokeWidth={2.5} />
              Descargar app
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
