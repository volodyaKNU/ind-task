import React from "react";

/**
 * GlassCardWithBlob — reusable container with a soft "blob" underlay.
 *
 * Requirements:
 * - TailwindCSS v3+
 * - No custom Tailwind plugins required (uses inline radial-gradient)
 *
 * Example:
 * <GlassCardWithBlob
 *   className="max-w-md"
 *   blob={{ size: 420, from: "#d468fb", to: "#a42add", opacity: 0.6, blur: 40, offsetX: -80, offsetY: 30 }}
 * >
 *   <h2 className="text-xl font-semibold">Title</h2>
 *   <p className="text-sm/6 text-white/70">Your content here…</p>
 * </GlassCardWithBlob>
 */

export type BlobOptions = {
  size?: number;
  from?: string;
  to?: string;
  opacity?: number;
  blur?: number;
  offsetX?: number;
  offsetY?: number;
  pulse?: boolean;
};

export type GlassCardWithBlobProps = React.PropsWithChildren<{
  className?: string;
  blob?: BlobOptions;
  blobClassName?: string;
}>;

const defaultBlob: Required<BlobOptions> = {
  size: 360,
  from: "#d468fb",
  to: "#a42add",
  opacity: 0.5,
  blur: 32,
  offsetX: 0,
  offsetY: 20,
  pulse: true,
};

export default function GlassCardWithBlob({
  children,
  className = "",
  blob,
  blobClassName = "",
}: GlassCardWithBlobProps) {
  const cfg = { ...defaultBlob, ...(blob ?? {}) };

  return (
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden
        className={`pointer-events-none absolute -z-10 select-none ${
          cfg.pulse ? "animate-pulse" : ""
        } ${blobClassName}`}
        style={{
          width: cfg.size,
          height: cfg.size,
          left: `calc(50% + ${cfg.offsetX}px - ${cfg.size / 2}px)`,
          top: `calc(50% + ${cfg.offsetY}px - ${cfg.size / 2}px)`,
          filter: `blur(${cfg.blur}px)`,
          opacity: cfg.opacity,
          background: `radial-gradient(50% 50% at 50% 50%, ${cfg.from} 0%, ${cfg.to} 60%, transparent 100%)`,
          borderRadius: cfg.size,
        }}
      />

      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md [@supports(backdrop-filter:blur(0))]:bg-white/10 dark:border-white/10 dark:bg-white/5">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-white/5" />
        {children}
      </div>
    </div>
  );
}

export function BlobUnderlay({
  size = 360,
  from = "#d468fb",
  to = "#a42add",
  opacity = 0.5,
  blur = 32,
  pulse = true,
  className = "",
}: BlobOptions & { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 select-none ${
        pulse ? "animate-pulse" : ""
      } ${className}`}
      style={{
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
        opacity,
        background: `radial-gradient(50% 50% at 50% 50%, ${from} 0%, ${to} 60%, transparent 100%)`,
        borderRadius: size,
      }}
    />
  );
}
