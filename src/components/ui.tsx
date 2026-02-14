import Link from "next/link";
import { ComponentProps } from "react";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-100">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-[var(--radius)] border border-white/10 bg-white/[0.04] shadow-[0_10px_60px_rgba(0,0,0,0.35)] " +
        className
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(255,207,109,0.10),transparent_60%),radial-gradient(600px_280px_at_88%_10%,rgba(125,240,255,0.08),transparent_55%)]" />
      <div className="relative p-5">{children}</div>
    </div>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-white text-slate-950 hover:bg-slate-200"
      : "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10";
  return <Link className={`${base} ${styles} ${className ?? ""}`} {...props} />;
}
