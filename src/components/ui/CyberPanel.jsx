export default function CyberPanel({ children, className = "" }) {
  return (
    <section
      className={[
        "rounded-lg border border-cyan-300/20 bg-slate-950/80",
        "shadow-[0_24px_80px_rgba(8,145,178,0.14)] backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
