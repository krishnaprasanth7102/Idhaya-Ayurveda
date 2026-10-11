import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-xl rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-10 text-center shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-[var(--heading)]">Page not found</h1>
        <p className="mt-4 text-base text-[var(--muted)]">The page you requested is not available in this language or has moved.</p>
        <Link href="/en" className="mt-8 inline-flex rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white">Back to home</Link>
      </div>
    </div>
  );
}
