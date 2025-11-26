import { cn } from "@/lib/utils";

export function Button({ asChild, children, variant = "default", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
    outline: "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800",
    ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800",
  };

  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      className={cn(base, variants[variant] || variants.default, "px-3 py-2 rounded-2xl", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
