import { ShieldCheck, UploadCloud } from "lucide-react";

export default function UploadDropzone({ selectedFile, onFileSelect }) {
  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    onFileSelect(file);
  };

  return (
    <label
      onDrop={(event) => {
        event.preventDefault();
        handleFile(event.dataTransfer.files?.[0]);
      }}
      onDragOver={(event) => event.preventDefault()}
      className="group flex min-h-[360px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-cyan-300/35 bg-slate-900/65 px-6 text-center transition hover:border-cyan-200 hover:bg-cyan-300/5"
    >
      <input
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />
      <div className="grid h-16 w-16 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(103,232,249,0.16)] transition group-hover:scale-105">
        <UploadCloud className="h-8 w-8" />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-white">
        Gorseli buraya birak
      </h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
        JPG, PNG veya WEBP formatinda bir yuz gorseli sec. Sistem analiz
        oncesi dosyayi yerel preview alaninda hazirlar.
      </p>
      <span className="mt-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
        <ShieldCheck className="h-4 w-4" />
        Dosya Sec
      </span>
      {selectedFile && (
        <p className="mt-5 max-w-full truncate text-xs text-slate-500">
          Secilen: {selectedFile.name}
        </p>
      )}
    </label>
  );
}
