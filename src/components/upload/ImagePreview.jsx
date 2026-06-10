import { ImageIcon, X } from "lucide-react";

export default function ImagePreview({ file, imageUrl, onClear }) {
  if (!imageUrl) {
    return (
      <div className="flex min-h-[360px] items-center justify-center rounded-lg border border-slate-800 bg-slate-900/45">
        <div className="text-center">
          <ImageIcon className="mx-auto h-9 w-9 text-slate-600" />
          <p className="mt-3 text-sm text-slate-500">Preview bekleniyor</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-200">Gorsel preview</p>
          <p className="mt-1 truncate text-xs text-slate-500">{file?.name}</p>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-slate-700 text-slate-400 transition hover:border-rose-400/60 hover:text-rose-300"
          aria-label="Gorseli kaldir"
          title="Gorseli kaldir"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <img
          src={imageUrl}
          alt="Yuklenen gorsel"
          className="h-[300px] w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
