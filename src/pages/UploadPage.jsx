import { useEffect, useState } from "react";
import { Activity, ScanFace } from "lucide-react";
import AnalysisProgress from "../components/upload/AnalysisProgress.jsx";
import ImagePreview from "../components/upload/ImagePreview.jsx";
import UploadDropzone from "../components/upload/UploadDropzone.jsx";
import CyberPanel from "../components/ui/CyberPanel.jsx";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const handleFileSelect = (selectedFile) => {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setFile(selectedFile);
    setImageUrl(URL.createObjectURL(selectedFile));
    setIsAnalyzing(false);
  };

  const handleClear = () => {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setFile(null);
    setImageUrl("");
    setIsAnalyzing(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.18),transparent_58%)]" />

      <section className="relative mx-auto max-w-6xl">
        <header className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium uppercase text-cyan-100">
              <ScanFace className="h-4 w-4" />
              Deepfake Tespit
            </div>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Upload Paneli
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
            <Activity className="h-4 w-4" />
            Model hazir
          </div>
        </header>

        <CyberPanel className="p-4 sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <UploadDropzone
                selectedFile={file}
                onFileSelect={handleFileSelect}
              />
              {isAnalyzing && <AnalysisProgress />}
              <button
                type="button"
                onClick={() => file && setIsAnalyzing(true)}
                disabled={!file || isAnalyzing}
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-500"
              >
                Analizi Baslat
              </button>
            </div>
            <ImagePreview file={file} imageUrl={imageUrl} onClear={handleClear} />
          </div>
        </CyberPanel>
      </section>
    </main>
  );
}
