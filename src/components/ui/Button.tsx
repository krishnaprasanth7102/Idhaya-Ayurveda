import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  [key: string]: unknown;
}) {
  const styles = {
    primary:
      "bg-[var(--brand-green)] text-white hover:bg-[var(--brand-green-deep)] shadow-[0_18px_30px_rgba(20,83,45,0.18)]",
    secondary:
      "bg-white text-[var(--text)] border border-[var(--border)] hover:bg-[var(--card)]",
    ghost: "bg-transparent text-[var(--brand-green-soft)] hover:bg-[var(--soft-sage)]",
  };

  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green)] focus-visible:ring-offset-2 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
