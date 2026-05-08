import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneFrame from "../PhoneFrame";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      navigate("/onboarding");
    } else {
      setError("Usa usuario: admin y contraseña: admin");
    }
  };

  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col px-6 pb-10 pt-12">
        <div className="flex items-center gap-1">
          <span className="font-display text-3xl font-bold tracking-tight text-slate-900">
            Eat
          </span>
          <span className="font-display text-3xl font-bold tracking-tight text-brand-500">
            Fit
          </span>
        </div>

        <div className="mt-12">
          <h1 className="font-display text-3xl font-bold text-slate-900">
            Bienvenido
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Accede con tu correo institucional
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-3">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@universidad.edu.mx"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-brand-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-brand-500"
          />

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-brand-500 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 active:scale-[0.98]"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          o
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <span className="font-bold text-blue-600">G</span>
            Continuar con Google
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <img
              src="/Apple_logo_black.svg"
              alt=""
              className="h-4 w-4 object-contain"
            />
            Continuar con Apple
          </button>
        </div>

        <p className="mt-6 text-center text-[11px] text-slate-400">
          Solo correos institucionales tienen acceso premium
        </p>

        <p className="mt-auto rounded-xl bg-slate-50 p-3 text-center text-[11px] text-slate-500">
          Demo: usa <strong className="text-slate-700">admin</strong> /{" "}
          <strong className="text-slate-700">admin</strong>
        </p>
      </div>
    </PhoneFrame>
  );
}

export default LoginScreen;
