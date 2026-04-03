interface DashedSeparatorProps {
  variant: "light" | "dark";
  className?: string;
}

export function DashedSeparator({ variant, className = "" }: DashedSeparatorProps) {
  const bgImage =
    variant === "dark"
      ? "repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 5px, transparent 5px, transparent 12px)"
      : "repeating-linear-gradient(90deg, rgba(10,25,38,0.15) 0px, rgba(10,25,38,0.15) 5px, transparent 5px, transparent 12px)";

  return (
    <div
      className={`h-[2px] w-full ${className}`}
      style={{ backgroundImage: bgImage }}
    />
  );
}
