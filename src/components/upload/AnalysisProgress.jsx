export default function AnalysisProgress() {
  return (
    <div className="mt-5 rounded-lg border border-cyan-300/20 bg-slate-900/80 p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-cyan-200">Analiz ediliyor...</p>
        <p className="text-xs text-slate-500">ViT model taraması</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-2/3 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
      </div>
    </div>
  );
}
