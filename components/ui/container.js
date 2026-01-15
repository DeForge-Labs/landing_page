import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
  visiblytl = true,
  visiblytr = true,
  visiblybr = true,
  visiblybl = true,
  showGlow = true,
}) {
  return (
    <div
      className={cn(
        "container border border-dashed border-y-0 border-black/50 relative",
        className
      )}
    >
      {showGlow && (
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 -z-10"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            top: "20%",
            left: "10%",
          }}
        />
      )}

      {showGlow && (
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 -z-10"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            bottom: "20%",
            right: "10%",
          }}
        />
      )}
      {visiblytl && (
        <div className="w-2 h-2 bg-black absolute -top-1 -left-[4.5px] rotate-45"></div>
      )}
      {visiblytr && (
        <div className="w-2 h-2 bg-black absolute -top-1 -right-[4.5px] rotate-45"></div>
      )}
      {visiblybr && (
        <div className="w-2 h-2 bg-black absolute -bottom-1 -right-[4.5px] rotate-45"></div>
      )}
      {visiblybl && (
        <div className="w-2 h-2 bg-black absolute -bottom-1 -left-[4.5px] rotate-45"></div>
      )}
      {children}
    </div>
  );
}
