import { Signal, Wifi, BatteryFull } from "lucide-react";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold text-slate-900">
      <span>9:41</span>
      <div className="flex items-center gap-1.5 text-slate-700">
        <Signal size={14} strokeWidth={2.4} />
        <Wifi size={14} strokeWidth={2.4} />
        <BatteryFull size={16} strokeWidth={2} className="text-brand-500" />
      </div>
    </div>
  );
}

function PhoneFrame({ children, hideStatusBar = false }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100 px-0 py-0 sm:px-4 sm:py-8">
      <div className="relative w-full max-w-[420px] sm:max-w-[400px]">
        <div className="relative overflow-hidden bg-white shadow-2xl ring-1 ring-slate-200 sm:rounded-[3rem] sm:border-[10px] sm:border-slate-900">
          <div className="absolute left-1/2 top-0 z-30 hidden h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900 sm:block" />

          <div className="relative flex min-h-screen flex-col sm:min-h-[820px]">
            {!hideStatusBar && <StatusBar />}
            <div className="flex flex-1 flex-col">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneFrame;
